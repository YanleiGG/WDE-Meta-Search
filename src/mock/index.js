import Mock from 'mockjs'

Mock.mock('http://localhost:8080/se/totalse', () => {
  return {
    se: ['se1', 'se2', 'se3', 'se4', 'se5', 'se6']
  }
})

Mock.mock('http://localhost:8080/se/advancedse', () => {
  return {
    se: ['se111', 'se222', 'se333', 'se444', 'se555', 'se666']
  }
})

Mock.mock('http://localhost:8080/search/crawllist', () => {
  return 'list_search_12312423512'
})

Mock.mock('http://localhost:8080/search/crawllist_advanced', () => {
  return 'list_search_12312423512'
})

Mock.mock(/http:\/\/localhost:8080\/search\/getlist.*/, () => {
  return {
    gather_list: [
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
    ]
  }
})

Mock.mock('http://localhost:8080/search/details', () => {
  return {
    pt: '2012年12月3日 12:22:41',
    nrd: 1255,
    nrply: 13456,
    url: 'http://localhost:8080/search/details',
    title: '文档标题文档标题文档标题文档标题文档标题文档标题文档标题文档标题',
    author: '作者一',
    cont: 'There are already several excellent libraries with a functional flavor. Typically, they are meant to be general-purpose toolkits, suitable for working in multiple paradigms. Ramda has a more focused goal. We wanted a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.',
    lpic: [
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
      'http://localhost:8080/search/details',
    ]
  }
})

Mock.mock('http://localhost:8080/timing/search', () => {
  return 'list_search_12312423512'
})

Mock.mock(/http:\/\/localhost:8080\/timing\/stats.*/, () => {
  return {
    "exec_times":5,
    "res_nums":500,
    "uniq_res":200,
    "gather_list":[
      {
      "title":"aaa",
      "source_url":"http://aaa.bbb.ccc",
      "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"ffffff",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"ccccc",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
      "title":"aaa",
      "source_url":"http://aaa.bbb.ccc",
      "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"ggggggg",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
      "title":"hhhh",
      "source_url":"http://aaa.bbb.ccc",
      "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"aaa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"yyyy",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
      "title":"6666",
      "source_url":"http://aaa.bbb.ccc",
      "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"a444aa",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      },
      {
        "title":"123",
        "source_url":"http://aaa.bbb.ccc",
        "se":{"baidu":1,"google":1,"bing":3}
      }
    ]
  }
})

Mock.mock(/http:\/\/localhost:8080\/timing\/stop.*/, () => {
  return null
})

Mock.mock('http://localhost:8080/query/get', () => {
  return {
    querys: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg']
  }
})

Mock.mock('http://localhost:8080/query/add', () => {
  return null
})

Mock.mock('http://localhost:8080/query/remove', () => {
  return null
})

export default Mock