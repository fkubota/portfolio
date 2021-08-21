<template>
      <v-container class="contents">
        <h1 class="contents-title">Timeline/Bookshelf.</h1>
        <v-row align="center" justify="center">

          <v-carousel v-model="model" show-arrows-on-hover cycle interval=3000 style="max-width:800px;">
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                :href="item.link"
                ></v-carousel-item>
          </v-carousel>

    </v-row>
  </v-container>
</template>

<script>
  export default {
      data: () => ({
          model: 0,
          items: [
              {
                  src: 'https://github.com/fkubota/bookshelf/blob/main/src/images/design.png?raw=true',
                  link: 'https://fkubota.github.io/timeline/',
                },
              {
                  src: 'https://github.com/fkubota/timeline/blob/main/src/images/design.png?raw=true',
                  link: 'https://fkubota.github.io/bookshelf/',
                },
            ],
        }),
    }
</script>

<style>
@import "./../css/mycss.css";
.text_hover:hover{
  color: #f9b535;
}
.text_hover{
  color: #FAE7C3;
  font-size: 50px;
	font-family: "Philosopher", serif;
}
</style>
