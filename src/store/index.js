import Vue from 'vue'
import Vuex from 'vuex'
import fetchEplData from './modules/fetchEplData'
import fetchLaLigaData from './modules/fetchLaLigaData'
import fetchLaLiga2Data from './modules/fetchLaLiga2Data'
import fetchBundesligaData from './modules/fetchBundesligaData'
import fetchBundesliga2Data from './modules/fetchBundesliga2Data'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  
  modules: {
    fetchEplData,fetchLaLigaData,fetchBundesligaData,fetchBundesliga2Data,fetchLaLiga2Data
  }
})
