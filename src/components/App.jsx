import { css } from '@emotion/react';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import KanbanBoard, { COLUMN_KEY_TODO, COLUMN_KEY_ONGOING, COLUMN_KEY_DONE } from './KanbanBoard';
import StaffBoard from './StaffBoard.jsx'
import TagBoard from './TagBoard.jsx'
import { fakeData } from './FakeData';
import logo from './logo.png';
import { configureStore } from '@reduxjs/toolkit';

const DATA_STORE_KEY = 'kanban-data-store';
const projectNameStyles = css`
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 1.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

function App() {
  const rootReducer=(state={data:[]},action)=>{
    switch (action.type){
      case 'READ':
        let KanbanData = fakeData;
        const rawData = window.localStorage.getItem(DATA_STORE_KEY);
        if (!rawData) {
          window.localStorage.setItem(DATA_STORE_KEY, JSON.stringify(KanbanData));
        } else {
          KanbanData = JSON.parse(rawData);
        }
        return {data:KanbanData};
      case 'WRITE':
        let data = JSON.parse(window.localStorage.getItem(DATA_STORE_KEY));
        data[action.payload.currentProject] = action.payload.updatedProject;
        window.localStorage.setItem(DATA_STORE_KEY, JSON.stringify(data));
    }
  }
  const store=configureStore({
    reducer:rootReducer,
  })

  const [todoList, setTodoList] = useState([]);
  const [ongoingList, setOngoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTab,setCurrentTab]=useState("project");
  const [isLoading, setIsLoading] = useState(true);
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
  useEffect(
    () => {
      store.dispatch({type:"READ"});
      let KanbanData=store.getState().data;
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
    store.dispatch({type:"WRITE",payload:{currentProject:currentProject,updatedProject:updatedProject}});
  };

  return (
    <div className="App">
      <header className="App-header">

        <span className="name-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="project-name">SprintFlow</h2>
        </span>

        <span className="tab-container">
          <span className="tab" onClick={()=>{setCurrentTab("project")}}>项目</span>
          <span className="tab" onClick={()=>{setCurrentTab("staff")}}>人员</span>
          <span className="tab" onClick={()=>{setCurrentTab("tag")}}>标签</span>
        </span>

        <span className="control-panel">
          <Button onClick={handleSaveAll} shape="round" type="primary">保存当前项目</Button>
        </span>

      </header>

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
    </div>
  );
}

export default App;
