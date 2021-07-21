<template>
  <v-app>
  <full-page ref="fullpage" id="fullpage" style='background-color: #2e5471' :options="options">
      <particles-bg color="#aaaaaa" num=200 type="cobweb" :bg=true></particles-bg>
    <!-- <vue-particles color="#dedede"> -->
    <!-- </vue-particles>                -->
    <div class='section'>
      <Openning/>
        <!-- <v-btn style='width:200px; margin-left:-100px; bottom:10%; left:50%; color:#ffffff' outlined @click="$refs.fullpage.api.moveSectionDown()">scroll</v-btn> -->
        <!-- <div data-aos="flip-right" data-aos-delay="1000" style="bottom:30%"> -->
          <v-btn style='width:200px; margin-left:-100px; bottom:200px; left:50%; color:#ffffff' outlined @click="$refs.fullpage.api.moveSectionDown()">scroll</v-btn>
    </div>
    <div class='section'>

      <v-container class="contents">
        <div class="contents-title" >Contents.</div>
        <v-row align="center" justify="center" style="margin-top:5%">
          <div class='text_hover' @click="$refs.fullpage.api.moveTo(1)">Home</div>
        </v-row>
        <v-row align="center" justify="center">
          <div class='text_hover' @click="$refs.fullpage.api.moveTo(3)">About Me</div>
        </v-row>
        <v-row align="center" justify="center">
          <div class='text_hover' @click="$refs.fullpage.api.moveTo(4)">Work</div>
        </v-row>
        <v-row align="center" justify="center">
          <div class='text_hover' @click="$refs.fullpage.api.moveTo(5)">History</div>
        </v-row>
        <v-row align="center" justify="center">
          <div class='text_hover' @click="$refs.fullpage.api.moveTo(6)">Monologue</div>
        </v-row>
      </v-container>

    </div>
    <div class='section'>
      <Aboutme/>
    </div>
    <div class='section'>
      <Work/>
    </div>
    <div class='section'>
      <History/>
    </div>
    <div class='section'>
      <Monologue/>
    </div>
    <!-- <div class='section'> -->
    <!--   <Skills/>           -->
    <!-- </div>                -->
  </full-page>
  </v-app>

</template>
<script>
  import Openning from "./Openning";
  import Aboutme from "./Aboutme";
  import History from "./History";
  import Work from "./Work";
  import Monologue from "./Monologue";

  export default {
      name: 'App',
      components: {
          Openning,
          Aboutme,
          History,
          Work,
          Monologue,
        },
      data() {
          return {
              options: {
                  scrollOverflow: true,
                }
            }
        }
    };
</script>

<style>
@import "./../css/mycss.css";
.text_hover:hover{
  color: #f9b535;
  font-size: 70px;
}
.text_hover{
  color: #FAE7C3;
  font-size: 50px;
	font-family: "Philosopher", serif;
}
</style>
