<template>
  <div class="contents-bg-1" data-aos="fade-left">
    <v-container class="contents">
      <h1 class="contents-title">Skills.</h1>
      <v-row align="center" justify="center">
        <v-col>
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              ここにいろんなコメントを書くのだよ
            </v-card-text>
          </v-card>
        </v-col>
        <v-col align="stretch">
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitterrrrrrr</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col align="center">
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              ここにいろんなコメントを書くのだよ
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col align="center">
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              ここにいろんなコメントを書くのだよ
            </v-card-text>
          </v-card>
        </v-col>
        <v-col align="center">
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col align="center">
          <v-card  :color="skill_card_color"  hover=true height="300px">
            <v-card-title>
              <v-icon large left > mdi-twitter </v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              ここにいろんなコメントを書くのだよ
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      skill_card_color: "#ffffff",
    }),
  }
</script>
<style>
  @import "./../css/mycss.css";
</style>