<template>
  <div class="home">
    <Header />
    <v-container>
      <totalLeagues/>
        <v-overlay v-if="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
     <h2 class="my-4">Bundesliga2</h2>
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
        <eplTable :data="getAllBundesliga2Team" v-if="item==='Tables'"/>
        <tab :fixture="getBundesliga2Fixture" v-if="item==='Matches'"/>
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
        ...mapGetters('fetchBundesliga2Data',['getBundesliga2Fixture','getAllBundesliga2Team'])
        
    },
    methods: {
        ...mapActions('fetchBundesliga2Data',['fetchBundesliga2Fixture','fetchAllBundesliga2Team']),
          async mapaction(){
          await this.fetchBundesliga2Fixture()
          await this.fetchAllBundesliga2Team()
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