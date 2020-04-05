import axios from 'axios'
const state={
    LaLigaFixture:{
        name:"",
        rounds:[]
    },
    LaLigaTeam:[]
}
const actions={
    fetchLaLigaFixture:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/es.1.json")
        let fixture = res.data
       /*  let x= fixture.rounds.map(element => {
            return element
        }); */
        commit("setLaLigaFixture", fixture)
        console.log(fixture.rounds);
        
    },
    fetchAllLaLigaTeam:async({commit})=>{
        console.log('start');
        let res = await axios.get("https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/es.1.clubs.json")
        let allTeam=res.data
       
        commit("setAllLaLigaTeam",allTeam)
    }
}
const mutations={
    setLaLigaFixture:(state,payload)=>state.LaLigaFixture=payload,
    setAllLaLigaTeam:(state,payload)=>state.LaLigaTeam=payload
}
const getters={
    getLaLigaFixture:state=>state.LaLigaFixture,
    getAllLaLigaTeam:state=>state.LaLigaTeam
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 