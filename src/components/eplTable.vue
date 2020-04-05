<template>
<v-container>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Standing</th>
          <th class="text-left">Team</th>
          <th class="text-left">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in eplPointTable" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td style="width:65px !important">{{ item.points }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
<!--   {{eplPointTable.points}} -->
</v-container>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    
    data() {
        return {
            point:{
                
            }
        }
        
    },
    props:{
       data:Object
    },
        computed: {

      eplPointTable(){
             return (this.data.clubs.map(fixture=>{
              return {name:fixture.name,points:(Math.floor(Math.random() * 100) + 9)}

             })).sort((a,b)=>b.points-a.points)
      }
      
    },
    methods: {
      
    },
    created() {
      
 
      console.log(Math.floor(Math.random() * 100) + 1);
    },
   
    

}
</script>

<style >
    
</style>