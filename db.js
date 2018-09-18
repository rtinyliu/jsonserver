import { Random } from 'mockjs'
export default {
  login: {
    code: '1000', 
    msg: 'test', 
    user: {
      'userName': Random.cword(2, 4), 
      'email': Random.word(15), 
      'token': Random.word(20)
    }
  },
  todoList: {
    code: '1000',
    page: {
      'list|10': [
        {
          id: 1,
          code: Random.word(15),
          importFlag: Random.boolean(),
          title: Random.cword(10),
          attachment: Random.cword(10, 20),
          applyUserName: Random.cword(2, 4),
          startTime: Random.date(),
          status: 2
        }
      ]
    }
  },
  doneList: {
    code: '1000',
    page: {
      'list|10': [
        {
          id: 2,
          code: Random.word(15),
          importFlag: Random.boolean(),
          title: Random.cword(10),
          attachment: Random.cword(10, 20),
          applyUserName: Random.cword(2, 4),
          startTime: Random.date(),
          status: Random.integer(3, 4)
        }
      ]
    }
  },
  applyList: {
    code: '1000',
    page: {
      'list|10': [
        {
          id: 3,
          code: Random.word(15),
          importFlag: Random.boolean(),
          title: Random.cword(10),
          attachment: Random.cword(10, 20),
          applyUserName: Random.cword(2, 4),
          startTime: Random.date(),
          status: Random.integer(1, 4)
        }
      ]
    }
  },
  filetransferInfo: {
    code: '1000',
    fileTransfer: {
      id: 1,
      code: Random.word(15),
      jobNum: Random.word(15),
      importFlag: Random.boolean(),
      title: Random.cword(10),
      bapName: Random.cword(6),
      baName: Random.cword(6),
      content: Random.cword(56),
      attachment: Random.cword(10, 20),
      applyUserName: Random.cword(2, 4),
      startTime: Random.date()
    },
    'taskLogs|5': [
      {
        id: 1,
        taskName: Random.word(5),
        advanceName: Random.cword(2, 4),
        dealTime: Random.datetime(),
        appOpinion: Random.cword(50),
        action: Random.integer(1, 5)
      }
    ]
  } 
}