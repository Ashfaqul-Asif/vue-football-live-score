import axios from 'axios'
const state={
    LaLiga2Fixture:{
        name:"",
        rounds:[]
    },
    LaLiga2Team:[]
}
const actions={
    fetchLaLiga2Fixture:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/es.2.json")
        let fixture = res.data
       /*  let x= fixture.rounds.map(element => {
            return element
        }); */
        commit("setLaLiga2Fixture", fixture)
        console.log(fixture.rounds);
        
    },
    fetchAllLaLiga2Team:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/es.2.clubs.json")
        let allTeam=res.data
       
        commit("setAllLaLiga2Team",allTeam)
    }
}
const mutations={
    setLaLiga2Fixture:(state,payload)=>state.LaLiga2Fixture=payload,
    setAllLaLiga2Team:(state,payload)=>state.LaLiga2Team=payload
}
const getters={
    getLaLiga2Fixture:state=>state.LaLiga2Fixture,
    getAllLaLiga2Team:state=>state.LaLiga2Team
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 