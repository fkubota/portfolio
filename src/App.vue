<template>
  <!-- <v-img src="@/../design/output/background.png"></v-img> -->
  <body>
    <div id="home" class='bg'>
      <div class="home-content">
        <h1 class="page-title"> Hi I'm fkubota </h1>
        <p>konnihiwa</p>
      </div>
    </div>
    <div>
      <p> this is contents </p>
    </div>
  </body>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  #home {
    background-image: url("~@/../design/output/background.png");
    min-height: 100vh;
    color: #ffffff;
  }
  .bg {
    background-size: cover;
  }
  .home-content {
    text-align: center;
  }
  .page-title {
    font-family: "Philosopher", serif;
  }
</style>