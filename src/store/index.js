import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: 'http://172.22.0.34:8080',
    simpleBrowsers: ['百度', '必应'],
    advancedBrowsers: ['百度', '必应', '谷歌'],
    results: [],
    resultPageQuery: '',
    keywords: []
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
    }
  }
})