export var fakeData = [
  {
    name: '编程项目',
    todolist: [
      {
        title: '开发任务-1', createTime: '2024-03-21 18:15', describe: '修复死锁问题', deadline: '2024-03-21',staff:'王五'
      },
      { title: '开发任务-3', createTime: '2024-03-22 13:15' },
      {
        title: '测试任务-3', createTime: '2024-03-22 18:15', describe: '测试添加功能', deadline: '2024-03-16',
      },
    ],
    ongoinglist: [
      { title: '开发任务-4', createTime: '2024-03-22 18:21' ,staff:'王五'},
      { title: '开发任务-6', createTime: '2024-02-12 18:15' },
      { title: '测试任务-2', createTime: '2024-03-22 18:15', deadline: '2024-03-26' },
    ],
    donelist: [
      { title: '开发任务-2', createTime: '2024-03-11 12:15' },
      { title: '测试任务-1', createTime: '2024-02-22 18:11', deadline: '2024-04-23' },
    ],
    stafflist: [
      { name: '张三' ,avatar:"https://api.multiavatar.com/aaa.svg",
      describe:"张三是一位富有创造力和才华的年轻人，对于编程和软件开发有着深厚的兴趣。他喜欢挑战自己，经常参与各种编程竞赛和黑客马拉松。在工作中，他总是能够提供创新的解决方案，因为他善于思考问题的不同角度。"},
      { name: '李四' ,avatar:"https://api.multiavatar.com/asd.svg",
      describe:"李四是一位充满激情和对时尚充满热爱的设计师。她对于纺织品和色彩有着敏锐的嗅觉，总能够创造出令人惊叹的设计。她的作品常常融合了东方和西方的元素，展现了她独特的审美观。"},
      { name: '王五' ,avatar:"https://api.multiavatar.com/hgrccc.svg",
      describe:"王五是一位雄心勃勃的年轻创业者，拥有着对创新和商业的热情。他曾创立过几个初创公司，虽然经历了一些失败，但他总是能够从失败中吸取教训，并坚定地继续前行。他的梦想是创建一家具有社会影响力的企业，为社会带来积极的变革。"},
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
    stafflist: [
        {name:"朱浩然"}
    ],
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
