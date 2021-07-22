<template>
  <v-container class="contents">
    <h1 class="contents-title">Work.</h1>
    <v-row
        justify="center"
        align="center"
        >
        <template v-for="(item, i) in items">
          <v-col
              :key="i"
              >
              <v-hover v-slot="{ hover }">
                <div class='rounded-pill'>
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    :href='item.link'
                    style="border-radius:0px;"
                    width="250px"
                    >

                    <v-img
                        :src="item.img"
                        height="200px"
                        >
                    </v-img>

                      <v-fade-transition>
                        <v-overlay v-if="!hover" absolute color="#000000" opacity=0.75>
                          <h2 class="contents-body text-center" style="color:#ffffff">{{ item.title }}</h2>
                          <p class="contents-body text-center" style="color:#ffffff"> {{ item.text }} </p>
                        </v-overlay>
                      </v-fade-transition>

                </v-card>
                </div>
              </v-hover>
          </v-col>
        </template>
    </v-row>
  <div style="margin-bottom: 400px"></div>
  </v-container>
</template>

<script>
  export default {
      data: () => ({
          items: [
              {
                  title: 'Timeline',
                  text: '日々の出来事/アウトプットをまとめている場所',
                  img: 'https://github.com/fkubota/timeline/blob/main/src/images/design.png?raw=true',
                  link: 'https://fkubota.github.io/timeline/',
                },

              {
                  title: 'Bookshelf',
                  text: '論文まとめ',
                  img: 'https://github.com/fkubota/portfolio/blob/master/design/images/bookshelf.png?raw=true',
                  link: 'https://fkubota.github.io/bookshelf/',
                },

              {
                  title: '[note] 転職記事',
                  text: '未経験で機械学習エンジニアに転職。〜安定からベンチャーへ〜',
                  img: 'https://github.com/fkubota/portfolio/blob/master/design/images/note.png?raw=true',
                  link: 'https://note.com/f_kubota/n/n744d269a9b6e',
                },

              {
                  title: 'Carrier-Owl',
                  text: 'arxiv-->DeepL-->Slack',
                  img: 'https://github.com/fkubota/Carrier-Owl/blob/master/data/images/carrier-owl.png?raw=true',
                  link: 'https://github.com/fkubota/Carrier-Owl',
                },

              {
                  title: '[Zenn] Kaggle日記という戦い方',
                  text: 'Kaggleの情報整理関係の記事',
                  img: 'https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2021/03/zenn-960x504.jpg',
                  link: 'https://zenn.dev/fkubota/articles/3d8afb0e919b555ef068',
                },

              {
                  title: '[SD] エンジニア1年目をまとめたスライド',
                  text: '生産性と戦った僕の一年の記録とツールたち',
                  img: 'https://github.com/fkubota/portfolio/blob/master/design/images/sd01.png?raw=true',
                  link: 'https://speakerdeck.com/fkubota/sheng-chan-xing-tozhan-tutapu-false1nian-falseji-lu-toturutati',
                },

            ],
        }),
    }
</script>
<style>
@import "./../css/mycss.css";
</style>
