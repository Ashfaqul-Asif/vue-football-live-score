<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="green  white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus aut inventore! Ad, numquam quasi. Nemo voluptatibus et debitis, soluta molestias itaque unde rerum nostrum delectus, hic, vitae commodi ipsum.
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>