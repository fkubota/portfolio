<template>
<v-app>
  <Openning/>
  <Aboutme/>
  <Experiences/>
  <Skills/>
  <Work/>
</v-app>
</template>

<script>
import Openning from "./components/Openning";
import Aboutme from "./components/Aboutme";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Work from "./components/Work";
export default {
  name: 'App',
  components: {
    Openning,
    Aboutme,
    Experiences,
    Skills,
    Work,
  },
  data: () => ({
    //
  }),
};
</script>
<style></style>