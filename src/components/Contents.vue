<template>
  <v-container class="contents section">
  <!-- <v-div style="background-image: https://github.com/fkubota/portfolio/blob/master/design/output/background.png?raw=true"> -->
    <div class="contents-title" >Contents.</div>
    <v-row align="center" justify="center">
        <!-- <div class='text_hover' data-aos="fade-up">About Me</div> -->
        <div class='text_hover' @click="$refs.fullpage.api.moveTo(1)" @mouseover="image = image01" @mouseleave="image=image00">About Me</div>
    </v-row>
    <v-row align="center" justify="center">
        <div class='text_hover' @mouseover="image = image02" @mouseleave="image=image00">Skills</div>
    </v-row>
    <!-- <v-row>               -->
    <!--   <img :src="image"/> -->
    <!-- </v-row>              -->
  </v-container>
</template>

<script>
  export default {
			name: 'App',
			data() {
					return { 
							image: "https://github.com/fkubota/portfolio/blob/master/design/output/background.png?raw=true",
							image00: "https://github.com/fkubota/portfolio/blob/master/design/output/background.png?raw=true",
							image01: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
							image02: "https://s-media-cache-ak0.pinimg.com/originals/bd/5d/84/bd5d845c980508d41b0329dc21d08d2b.jpg",
							anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
						}
				}
    };


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
