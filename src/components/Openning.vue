<template>
  <!-- <v-img src="@/../design/output/background.png"></v-img> -->
  <body>
    <div id="home" class='bg'>
      <header>
        <nav>
          <ul class="main-nav">
            <li>about</li>
            <li>work</li>
          </ul>
        </nav>
      </header>
      <div class="home-content">
        <h1>
          <vue-typer class="page-title" text="Hi I'm fkubota"></vue-typer>
        </h1>
        <!-- <h1 class="page-title"> Hi I'm fkubota </h1> -->
        <p>konnihiwa</p>
      </div>
    </div>
  </body>
</template>

<script></script>

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
    margin-top: 10%;
  }
  .page-title {
    font-size: 5rem;
    font-family: "Philosopher", serif;
  }
  .main-nav {
    display: flex;
    list-style: none;
    text-transform: uppercase;
  }
  .main-nav li {
    margin-left: 36px;
  }
  .vue-typer .custom.char.typed {
  color: #ffffff;
  }
</style>