import { css } from '@emotion/react';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, Switch } from 'antd';
import KanbanBoard, { COLUMN_KEY_TODO, COLUMN_KEY_ONGOING, COLUMN_KEY_DONE } from './KanbanBoard';
import StaffBoard from './StaffBoard.jsx'
import TagBoard from './TagBoard.jsx'
import AdminContext from '../context/AdminContexts';
import { fakeData } from './FakeData';
import logo from './logo.svg';

const DATA_STORE_KEY = 'kanban-data-store';

const projectNameStyles = css`
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 1.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [ongoingList, setOngoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTab,setCurrentTab]=useState("project")
  const updaters = {
    [COLUMN_KEY_TODO]: setTodoList,
    [COLUMN_KEY_ONGOING]: setOngoingList,
    [COLUMN_KEY_DONE]: setDoneList,
  };
  const handleAdd = (column, newCard) => {
    updaters[column]((currentStat) => [newCard, ...currentStat]);
  };
  const handleRemove = (column, cardToRemove) => {
    updaters[column](
      (currentStat) => currentStat.filter(
        (item) => item.title !== cardToRemove.title,
      ),
    );
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => {
      let KanbanData = fakeData;
      const data = window.localStorage.getItem(DATA_STORE_KEY);
      if (!data) {
        window.localStorage.setItem(DATA_STORE_KEY, JSON.stringify(KanbanData));
      } else {
        KanbanData = JSON.parse(data);
      }
      setProjectList(KanbanData.map((item) => item.name));
      setTodoList(KanbanData[currentProject].todolist);
      setOngoingList(KanbanData[currentProject].ongoinglist);
      setDoneList(KanbanData[currentProject].donelist);
      setStaffList(KanbanData[currentProject].stafflist);
      setTagList(KanbanData[currentProject].taglist);

      setTimeout(
        () => {
          setIsLoading(false);
        },
        1000,
      );
    },
    [currentProject],
  );
  const handleSaveAll = () => {
    const updatedProject = {
      name: projectList[currentProject],
      todolist: todoList,
      ongoinglist: ongoingList,
      donelist: doneList,
      stafflist:staffList,
      taglist:tagList,
    };
    let data = window.localStorage.getItem(DATA_STORE_KEY);
    if (data) {
      data = JSON.parse(data);
      data[currentProject] = updatedProject;
    } else {
      data = [updatedProject];
    }
    window.localStorage.setItem(DATA_STORE_KEY, JSON.stringify(data));
  };

  return (
    <div className="App">
      <header className="App-header">

        <span className="name-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="project-name">看板小程序</h2>
        </span>

        <span className="tab-container">
          <span className="tab" onClick={()=>{setCurrentTab("project")}}>项目</span>
          <span className="tab" onClick={()=>{setCurrentTab("staff")}}>人员</span>
          <span className="tab" onClick={()=>{setCurrentTab("tag")}}>标签</span>
        </span>

        <span className="control-panel">
          <Button onClick={handleSaveAll} shape="round" size="small" type="primary">保存当前项目</Button>
          <div style={{fontSize:"0.8rem",marginTop:"4px"}}>
            管理员模式
            <Switch onChange={() => { setIsAdmin(!isAdmin); }} />
          </div>
        </span>

      </header>
      <AdminContext.Provider value={isAdmin}>
        <footer className="App-footer">
          <ul className="project-selector">
            {projectList.map((item, index) => (
              <li
                key={index}
                onClick={() => { setIsLoading(true); setCurrentProject(index); }}
                css={projectNameStyles}
                style={{ backgroundColor: index === currentProject ? '#fff' : '#888' }}
              >
                {item}
              </li>
            ))}
          </ul>
          {currentTab==="project"?
            <KanbanBoard
              isLoading={isLoading}
              todoList={todoList}
              ongoingList={ongoingList}
              doneList={doneList}
              staffList={staffList}
              tagList={tagList}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
            :currentTab==="staff"?
              <StaffBoard list={staffList}/>
            :
              <TagBoard list={tagList}/>
          }
        </footer>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
