<template>
<v-app>
  <cursor-fx 
    color="#f9b535"
    color-hover="#000000"
    outside-size="150px"
    inside-size="10px"
    ></cursor-fx>
  <Main/>
</v-app>
</template>

<script>
import Main from './components/Main';
<!-- @import url('https://fonts.googleapis.com/earlyaccess/kokoro.css'); -->
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

export default {
  name: 'App',
  components: {
      Main,
  },
  data: () => ({
    //
  }),
};
</script>
<style></style>
