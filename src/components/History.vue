<template>
    <v-container class="contents">
      <h1 class="contents-title">Experiences.</h1>
          <!-- <p class='contents-body'>      -->
          <!-- 1993-hoge hogeandhoge<br/>     -->
          <!-- 2010-2015 kljsd fslkdfj <br/>  -->
          <!-- 2022-2030 kksajdf sadkljf<br/> -->
          <!-- </p>                           -->
          <v-timeline align-top dense class="contents-body">
        <v-timeline-item color="#aaaaaa" small>
          <v-row>
            <v-col cols="3">
              <strong>1993-</strong>
            </v-col>
            <v-col>
              <strong>生まれた(沖縄)</strong>
              <div class="text-caption">
								7/13
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2009-2012</strong>
            </v-col>
            <v-col>
              <strong>沖縄県立普天間高校</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2012-2016</strong>
            </v-col>
            <v-col>
              <strong>琉球大学理学部(物理)</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2016-2018</strong>
            </v-col>
            <v-col>
              <strong>琉球大学大学院理工学研究科(物理)</strong>
              <div class="text-caption">
                物性物理学を専攻。実験系の研究室に属していて、強相関電子系の磁性体をNMR(核磁気共鳴)を用いた研究を行った。
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2018-2018</strong>
            </v-col>
            <v-col>
              <strong>沖縄県立普天間高校</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2018-2018</strong>
            </v-col>
            <v-col>
              <a href="https://linx.jp/" ><strong class="link_text">株式会社LINX</strong></a>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2018-2021</strong>
            </v-col>
            <v-col>
              <a href="https://hmcom.co.jp/" ><strong class="link_text">Hmcomm株式会社</strong></a>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#aaaaaa" small >
          <v-row>
            <v-col cols="3">
              <strong>2021-</strong>
            </v-col>
            <v-col>
              <a href="https://kanmu.co.jp/" ><strong class="link_text">株式会社カンム</strong></a>
            </v-col>
          </v-row>
        </v-timeline-item>

      </v-timeline>
    </v-container>
</template>

<script></script>
<style>
  @import "./../css/mycss.css";
.link_text:hover{
  color: #f9b535;
}
.link_text{
  color: #FAE7C3;
}
</style>
