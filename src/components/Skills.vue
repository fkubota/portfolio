<template>
  <div class="contents-bg-1">
    <v-container class="contents">
      <h1 class="contents-title">Skills.</h1>
      <v-row>
        <v-col cols=4 v-for="(item, key) in items" :key="key">
          <v-hover v-slot:default="{ hover }">
          <v-card v-bind:color="skill_card_color" hover=true height="300px" class="mx-auto">
        <v-expand-transition>
        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;" >
            $14.99
        </div>
        </v-expand-transition>
            <v-card-title>
                <v-icon large left> mdi-laptop </v-icon>
              <span class="title font-weight-light">{{ item.title }}</span>
            </v-card-title>
            <v-card-text class="headline font-weight-light">
              {{ item.contents }}
            </v-card-text>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      skill_card_color: "#ffffff",
      items: [
        {
          title: "twitter",
          contents: "コメント",
        },
        {
          title: "github",
          contents: "fkubota",
        },
        {
          title: "frontend",
          contents: "vueとか使える",
        },
        {
          title: "wake up early",
          contents: "4時半に起きて、九時半に寝ます",
        }
      ]
    }),
  }
</script>
<style>
@import "./../css/mycss.css";
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
