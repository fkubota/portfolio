<template>
  <v-container class="contents">
    <h1 class="contents-title">Skills.</h1>
    <v-row>
      <v-col cols=4 v-for="(item, key) in items" :key="key">
          <v-card v-bind:color="skill_card_color" height="300px" class="mx-auto">
            <v-card-title>
              <v-icon large left> mdi-laptop </v-icon>
              <span class="title font-weight-light">{{ item.title }}</span>
            </v-card-title>
            <v-card-text class="headline font-weight-light">
              {{ item.contents }}
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
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
