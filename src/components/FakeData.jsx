export var fakeData = [
  {
    name: '编程项目',
    todolist: [
      {
        title: "修复登录页面无法输入密码的Bug",
        createTime: "2024-03-21 10:30",
        describe: "用户在登录页面无法输入密码，导致无法完成登录流程。",
        staff: "王五",
      },
      {
        title: "解决用户无法上传头像的问题",
        createTime: "2024-04-05 09:30",
        describe: "用户在上传头像时，遇到无法完成上传的问题，需要进行调查并解决。",
        deadline: "2024-04-08",
        tag: ["限时", "特别", "修复", "紧急"]
      },
      {
        title: "新增文章评论功能",
        createTime: "2024-04-03 16:50",
        deadline: "2024-04-15",
        staff: "张三",
        tag: ["限时", "特别", "优先"]
      },
      {
        title: "修复支付功能中的支付失败Bug",
        createTime: "2024-04-06 11:20",
        describe: "用户在进行支付操作时，遇到支付失败的情况，需要修复此Bug以保证支付正常进行。",
        deadline: "2024-04-09",
        tag: ["限时",  "紧急"]
      }
    ],
    ongoinglist: [
      {
        title: "优化用户注册流程",
        createTime: "2024-03-22 14:45",
        describe: "简化用户注册流程，提高用户注册成功率。",
        deadline: "2024-04-05",
        staff: "张三",
      },
      {
        title: "优化搜索功能的搜索算法",
        createTime: "2024-04-07 10:15",
        describe: "对搜索功能的搜索算法进行优化，提高搜索结果的准确性和搜索速度。",
        deadline: "2024-04-12",
        staff: "王五",
        tag: ["限时", "特别",  "重要"]
      },
      {
        title: "修复用户注销账户时出现的错误",
        describe: "用户在注销账户时，遇到系统错误导致注销失败的情况，需要修复此Bug。",
        deadline: "2024-04-10",
        staff: "张三",
      },
      {
        title: "新增在线客服功能",
        createTime: "2024-04-09 09:00",
        describe: "为了提高用户体验，需要在应用中新增在线客服功能，方便用户进行实时咨询。",
        staff: "李四",
        tag: ["限时", "特别", "优先"]
      }      
    ],
    donelist: [
      {
        title: "添加新功能：消息推送",
        createTime: "2024-03-23 09:00",
        deadline: "2024-04-10",
        staff: "李四",
        tag: ['限时', '特别', '优先', '重要']
      },
      {
        title: "修复用户登录时出现的密码重置问题",
        createTime: "2024-04-01 08:45",
        describe: "用户在进行密码重置后，登录时遇到验证码错误的问题，需要修复此Bug。",
        deadline: "2024-04-03",
        tag: ["限时", "特别", "优先", "紧急"]
      },
      {
        title: "新增用户反馈功能",
        createTime: "2024-03-30 14:20",
        describe: "为了提高用户满意度，需要在应用中新增用户反馈功能，包括用户评分和意见反馈。",
        deadline: "2024-04-10",
        staff: "张三",
        tag: ["限时" ]
      },
      {
        title: "优化页面加载速度",
        createTime: "2024-04-02 11:10",
        describe: "用户反馈显示应用加载速度较慢，需要优化页面加载速度以提升用户体验。",
        deadline: "2024-04-07",
        staff: "李四",
      },
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
      {name:'限时',color:"#6981eb",describe:"这个任务有截止日期"},
      {name:'紧急',color:"#ff0000"},
      {name:'🏆' ,color:"#f2ff3c",describe:"完成这个任务有奖励"},
      {name:'修复',color:"#ff5db6"},
      {name:'特别', color:"#ff5733", describe:"特殊标签"},
      {name:'优先', color:"#a0ff33", describe:"高优先级任务"},
      {name:'重要', color:"#337eff", describe:"任务重要性较高"},
      {name:'验证', color:"#8c33ff", describe:"待验证的任务"},
      {name:'新功能',color:"#34ff34"}
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
      {name:"我"}
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
