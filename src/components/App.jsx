import logo from './logo.svg';
import './App.css'
import React, {useEffect, useState} from 'react';
import KanbanBoard, {COLUMN_KEY_TODO,COLUMN_KEY_ONGOING,COLUMN_KEY_DONE} from './KanbanBoard';
import AdminContext from '../context/AdminContexts';

const DATA_STORE_KEY='kanban-data-store';

function App() {
  const[todoList,setTodoList]=useState([
    { title: '开发任务-1', status: '2022-05-22 18:15' },
    { title: '开发任务-3', status: '2022-05-22 18:15' },
    { title: '开发任务-5', status: '2022-05-22 18:15' },
    { title: '测试任务-3', status: '2022-05-22 18:15' }
  ]);
  const[ongoingList,setOngoingList]=useState([
    { title: '开发任务-4', status: '2022-05-22 18:15' },
    { title: '开发任务-6', status: '2022-05-22 18:15' },
    { title: '测试任务-2', status: '2022-05-22 18:15' }
  ]);
  const[doneList,setDoneList]=useState([
    { title: '开发任务-2', status: '2022-05-22 18:15' },
    { title: '测试任务-1', status: '2022-05-22 18:15' }
  ]);
  const updaters={
    [COLUMN_KEY_TODO]:setTodoList,
    [COLUMN_KEY_ONGOING]:setOngoingList,
    [COLUMN_KEY_DONE]:setDoneList,
  }
  const handleAdd=(column, newCard)=>{
    updaters[column]((currentStat)=>[newCard,...currentStat]);
  };
  const handleRemove=(column,cardToRemove)=>{
    updaters[column](
      (currentStat)=>currentStat.filter(
        (item)=>item.title!==cardToRemove.title
      )
    );
  }
  const [isAdmin,setIsAdmin]=useState(false);
  const handleToggleAdmin=(evt)=>{
    setIsAdmin(!isAdmin);
  }


  const [isLoading,setIsLoading]=useState(true);
  useEffect(
    ()=>{
      const data=window.localStorage.getItem(DATA_STORE_KEY);
      setTimeout(
        ()=>{
          if(data){
            const KanbanColumnData=JSON.parse(data);
            setTodoList(KanbanColumnData.todoList);
            setOngoingList(KanbanColumnData.ongoingList);
            setDoneList(KanbanColumnData.doneList);
          }
          setIsLoading(false);
        },
        1000
      )
    },
    []
  )
  const handleSaveAll=()=>{
    const data=JSON.stringify({
      todoList,
      ongoingList,
      doneList
    });
    window.localStorage.setItem(DATA_STORE_KEY,data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          我的看板
          <button onClick={handleSaveAll}>保存所有卡片</button>
          <label>
            <input type='checkbox' value={isAdmin} onChange={handleToggleAdmin}/>
            管理员模式
          </label>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AdminContext.Provider value={isAdmin}>
        <KanbanBoard
          isLoading={isLoading}
          todoList={todoList}
          ongoingList={ongoingList}
          doneList={doneList}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </AdminContext.Provider>
    </div>
  );
}

export default App;