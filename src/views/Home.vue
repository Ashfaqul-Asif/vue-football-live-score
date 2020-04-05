<template>
  <div class="home">
    <Header />
    <v-container>
      <totalLeagues/>
        <v-overlay v-if="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
     <h2 class="my-4">Premiere League</h2>
    <v-card  elevation=0>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <eplTable :data="getAllEplTeam" v-if="item==='Tables'"/>
        <tab :fixture="getEplFixture" v-if="item==='Matches'"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src

  
  import eplTable from '@/components/eplTable'
  import tab from '@/components/tab.vue'
  import Header from "@/layout/header.vue"
  import Footer from "@/layout/footer.vue"
  import totalLeagues from "@/components/totalLeagues.vue"
import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'Home',
    
    components: {
      tab,
      Header,
      Footer,
      eplTable,
      totalLeagues
    },
    data() {
      return {
          tab: null,
          overlay: true,
          items: ['Matches','Tables'],
      }
    },
    computed: {
      ...mapGetters("fetchEplData",["getEplFixture","getAllEplTeam"]),
       filterEachGameWeeks(){
       return  this.getEplFixture.rounds.filter(eachfixture => {

         return eachfixture.name ===this.Gameweek
       },
       )[0];
    },
          currentTabComponent() {
            return this.tab.toLowerCase();
          }
        },
         methods: {
      ...mapActions("fetchEplData",["fetchEplFixture","fetchAllEplTeam"]),
      async mapaction(){
         await this.fetchEplFixture()
         await this.fetchAllEplTeam()
        
           this.overlay=false
      }
         
    },
    created() {
      this.mapaction()
    }
  }
</script>