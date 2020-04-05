<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="grey"
      dark
    >
      <v-tab
        v-for="(fixture,index) in filterFixture"
        :key="index"
      >
        {{ fixture }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item,index) in filterFixture"
        :key="index"
      >
       <tabledata :fixture="fixture" :gameweek="item"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import tabledata from '@/components/tabledata.vue'
export default {
  components:{
    tabledata
  },
  props:{
    fixture:Object,
  },
  data () {
      return {
        tab: null,
      }
    },
    computed: {
      filterFixture(){
       return  this.fixture.rounds.map(eachfixture => {
          
         return eachfixture.name
       }
       );
    }
      
    },
    
}
</script>

