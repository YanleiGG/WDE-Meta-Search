import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: 'http://localhost:8080',
    simpleBrowsers: [],
    advancedBrowsers: [],
    results: [],
    keywords: [],
    resultPageQuery: '',
    task: {},
    detail: {},
    taskId: '',
    resultLoading: true,
    totalCount: 0
  },
  mutations: {
    setSimpleBrowsers (state, { simpleBrowsers }) {
      state.simpleBrowsers = simpleBrowsers
    },
    setAdvancedBrowsers (state, { advancedBrowsers }) {
      state.advancedBrowsers = advancedBrowsers
    },
    setResults(state, { results }) {
      state.results = results
    },
    setResultPageQuery(state, { resultPageQuery }) {
      state.resultPageQuery = resultPageQuery
    },
    setKeywords(state, { keywords }) {
      state.keywords = keywords
    },
    setTask(state, { task }) {
      state.task = task
    },
    setDetail(state, { detail }) {
      state.detail = detail
    },
    setTaskId(state, { taskId }) {
      state.taskId = taskId
    },
    setResultLoading(state, { resultLoading }) {
      state.resultLoading = resultLoading
    },
    setTotalCount(state, { totalCount }) {
      state.totalCount = totalCount
    },
  }
})