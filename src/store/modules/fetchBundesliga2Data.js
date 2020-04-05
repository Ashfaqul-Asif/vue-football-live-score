import axios from 'axios'
const state={
    Bundesliga2Fixture:{
        name:"",
        rounds:[]
    },
    Bundesliga2Team:[]
}
const actions={
    fetchBundesliga2Fixture:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/de.1.json")
        let fixture = res.data
        commit("setBundesliga2Fixture", fixture)
    },
    fetchAllBundesliga2Team:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/de.1.clubs.json")
        let allTeam=res.data
       
        commit("setAllBundesliga2Team",allTeam)
    }
}
const mutations={
    setBundesliga2Fixture:(state,payload)=>state.Bundesliga2Fixture=payload,
    setAllBundesliga2Team:(state,payload)=>state.Bundesliga2Team=payload
}
const getters={
    getBundesliga2Fixture:state=>state.Bundesliga2Fixture,
    getAllBundesliga2Team:state=>state.Bundesliga2Team
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 