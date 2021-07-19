<template>
  <v-app>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class='section'>
      <Openning/>
    </div>
    <div class='section' style='background-color: #f5f5f5'>
      <Aboutme/>
    </div>
    <div class='section'>
      <Experiences/>
    </div>
    <div class='section' style='background-color: #f5f5f5'>
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

  export default {
      name: 'App',
      components: {
          Openning,
          Aboutme,
          Experiences,
          Skills,
          Work,
        },
    };
</script>
