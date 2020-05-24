<template>
<v-app>
  <Openning/>
  <v-divider></v-divider>
  <Aboutme/>
  <v-divider></v-divider>
  <Experiences/>
  <v-divider></v-divider>
  <Skills/>
  <v-divider></v-divider>
</v-app>
</template>

<script>
import Openning from "./components/Openning";
import Aboutme from "./components/Aboutme";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
export default {
  name: 'App',
  components: {
    Openning,
    Aboutme,
    Experiences,
    Skills
  },
  data: () => ({
    //
  }),
};
</script>
<style></style>