<template>
  <v-container class="contents">
    <h1 class="contents-title">Work.</h1>
    <v-row
        class="fill-height"
        align="center"
        justify="center"
        >
        <template v-for="(item, i) in items">
          <v-col
              :key="i"
              cols="12"
              md="4"
              >
              <v-hover v-slot="{ hover }">
                <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    >
                    <v-img
                        :src="item.img"
                        height="225px"
                        >
                    </v-img>
        <v-fade-transition>
          <v-overlay v-if="!hover" absolute color="#000000" opacity=0.6 >
            <!-- <v-btn>See more info</v-btn> -->
            <h2 class="contents-body text-center">{{ item.title }}</h2>
            <p class="contents-body text-center"> {{ item.text }} </p>
          </v-overlay>
        </v-fade-transition>

                </v-card>
              </v-hover>
          </v-col>
        </template>
    </v-row>
  </v-container>
</template>

<script>
  export default {
      data: () => ({
          items: [
              {
                  title: 'Bookshelf',
                  text: '論文まとめ',
                  subtext: 'Newly released songs. Updated daily.',
                  img: 'https://github.com/fkubota/portfolio/blob/master/design/images/design.png?raw=true',
                },
              {
                  title: 'Rock',
                  text: 'Greatest Rock Hits',
                  subtext: 'Lose yourself in rock tunes.',
                  img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
                },
              {
                  title: 'Mellow Moods',
                  text: 'Ambient Bass',
                  subtext: 'Chill beats to mellow you out.',
                  img: 'https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
                },
            ],
          transparent: 'rgba(255, 255, 255, 0)',
        }),
    }
</script>
<style>
@import "./../css/mycss.css";
.v-card {
}

.v-card:not(.on-hover) {
}

.show-text {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
