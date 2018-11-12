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

export default Mock