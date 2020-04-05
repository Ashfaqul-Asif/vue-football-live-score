<template>
  <div class="home">
    <Header />
    <v-container>
      <totalLeagues/>
        <v-overlay v-if="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
     <h2 class="my-4">Bundesliga</h2>
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
        <eplTable :data="getAllBundesligaTeam" v-if="item==='Tables'"/>
        <tab :fixture="getBundesligaFixture" v-if="item==='Matches'"/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
  import eplTable from '@/components/eplTable'
  import tab from '@/components/tab.vue'
  import Footer from "@/layout/footer.vue"
  import totalLeagues from "@/components/totalLeagues.vue"
export default {
     components: {
      tab,
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
        ...mapGetters('fetchBundesligaData',['getBundesligaFixture','getAllBundesligaTeam'])
        
    },
    methods: {
        ...mapActions('fetchBundesligaData',['fetchBundesligaFixture','fetchAllBundesligaTeam']),
          async mapaction(){
          await this.fetchBundesligaFixture()
          await this.fetchAllBundesligaTeam()
          this.overlay=false
      }
    },
    created() {
        this.mapaction()
    },
}
</script>

<style scoped>

</style>