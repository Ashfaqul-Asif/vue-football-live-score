import axios from 'axios'
const state={
    BundesligaFixture:{
        name:"",
        rounds:[]
    },
    BundesligaTeam:[]
}
const actions={
    fetchBundesligaFixture:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/de.1.json")
        let fixture = res.data
        commit("setBundesligaFixture", fixture)
    },
    fetchAllBundesligaTeam:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/de.1.clubs.json")
        let allTeam=res.data
       
        commit("setAllBundesligaTeam",allTeam)
    }
}
const mutations={
    setBundesligaFixture:(state,payload)=>state.BundesligaFixture=payload,
    setAllBundesligaTeam:(state,payload)=>state.BundesligaTeam=payload
}
const getters={
    getBundesligaFixture:state=>state.BundesligaFixture,
    getAllBundesligaTeam:state=>state.BundesligaTeam
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 