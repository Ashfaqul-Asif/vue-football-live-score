<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        
        <tr v-for="(item,index) in filterEachGameWeeks.matches" :key="index">
          <td class="text-right">{{item.team1.name}}</td>
          <td class="text-middle score" style="text-align: center;">{{item.score1}}-{{item.score2}}</td>
          <td >{{item.team2.name}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex' 
  export default {
    data () {
      return {
        
       
      }
    },
    props:{
      fixture:Object,
      gameweek:String
    },
     computed: {
  
       filterEachGameWeeks(){
       return  this.fixture.rounds.filter(eachfixture => {

         return eachfixture.name ===this.gameweek
       },
       )[0];
    },
    },
   
      }
</script>

<style scoped>



@media (min-width: 300px) and (max-width: 470px) {
  .score{
  padding: 0px !important;
  width:  20px !important;
}
}

</style>

