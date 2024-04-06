export var fakeData = [
  {
    name: '编程项目',
    todolist: [
      {
        title: '开发任务-1', createTime: '2024-03-21 18:15', describe: '修复死锁问题', deadline: '2024-03-21',
      },
      { title: '开发任务-3', createTime: '2024-03-22 13:15' },
      {
        title: '测试任务-3', createTime: '2024-03-22 18:15', describe: '测试添加功能', deadline: '2024-03-16',
      },
    ],
    ongoinglist: [
      { title: '开发任务-4', createTime: '2024-03-22 18:21' },
      { title: '开发任务-6', createTime: '2024-02-12 18:15' },
      { title: '测试任务-2', createTime: '2024-03-22 18:15', deadline: '2024-03-26' },
    ],
    donelist: [
      { title: '开发任务-2', createTime: '2024-03-11 12:15' },
      { title: '测试任务-1', createTime: '2024-02-22 18:11', deadline: '2024-04-23' },
    ],
    stafflist: [
      { name: '张三' },
      { name: '李四' },
      { name: '王五' },
    ],
    taglist: [
      '限时',
      '紧急',
      '🏆',
      '修复',
    ],
  },
  {
    name: '学习项目',
    todolist: [
      { title: '学习任务-3', createTime: '2024-03-22 13:15' },
      { title: '复习任务-3', createTime: '2024-03-22 18:15', deadline: '2024-04-23' },
      { title: '预习任务-2', createTime: '2024-03-11 12:15' },
    ],
    ongoinglist: [
      { title: '学习任务-1', createTime: '2024-03-21 18:15' },
      { title: '学习任务-4', createTime: '2024-03-22 18:21' },
      { title: '学习任务-6', createTime: '2024-02-12 18:15', deadline: '2024-04-23' },
    ],
    donelist: [
      { title: '学习任务-2', createTime: '2024-03-22 18:15', deadline: '2024-04-23' },
      { title: '预习任务-1', createTime: '2024-02-22 18:11' },
    ],
    stafflist: [],
    taglist: [],
  },
  {
    name: '读书项目',
    todolist: [],
    ongoinglist: [],
    donelist: [],
    stafflist: [],
    taglist: [],
  },
];
