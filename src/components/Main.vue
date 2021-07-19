<template>
  <v-app>
  <full-page ref="fullpage" id="fullpage" style='background-color: #2e5471'>
      <particles-bg color="#aaaaaa" num=200 type="cobweb" :bg=true></particles-bg>
    <!-- <vue-particles color="#dedede"> -->
    <!-- </vue-particles>                -->
    <div class='section'>
      <Openning/>
    </div>
    <div class='section'>
      <Contents/>
    </div>
    <div class='section'>
      <Aboutme/>
    </div>
    <div class='section'>
      <Experiences/>
    </div>
    <div class='section'>
      <Skills/>
    </div>
    <div class='section'>
      <Work/>
    </div>
  </full-page>
  </v-app>

</template>
<script>
  import Openning from "./Openning";
  import Aboutme from "./Aboutme";
  import Experiences from "./Experiences";
  import Skills from "./Skills";
  import Work from "./Work";
  import Contents from "./Contents";

  export default {
      name: 'App',
      components: {
          Openning,
          Aboutme,
          Experiences,
          Skills,
          Work,
          Contents,
        },
    };
</script>
