import axios from 'axios'
const state={
    eplFixture:{
        name:"",
        rounds:[]
    },
    eplTeam:[]
}
const actions={
    fetchEplFixture:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json")
        let fixture = res.data
        commit("setEplFixture", fixture)
        console.log(fixture);
    },
    fetchAllEplTeam:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.clubs.json")
        let allTeam=res.data
        console.log(res.data);
        commit("setAllEplTeam",allTeam)
    }
}
const mutations={
    setEplFixture:(state,payload)=>state.eplFixture=payload,
    setAllEplTeam:(state,payload)=>state.eplTeam=payload
}
const getters={
    getEplFixture:state=>state.eplFixture,
    getAllEplTeam:state=>state.eplTeam
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 