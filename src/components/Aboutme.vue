<template>
		<v-container class="contents">
			<v-row>
				<v-col>
					<h1 class="contents-title">About Me.</h1>
					<h2 class="contents-body">Fumihiro Kubota/久保田 史洋</h2>
					<h4 class="contents-body">機械学習エンジニア</h4>
					<h4 class="contents-body">KaggleExpert(銀4, 銅2)</h4>
          <p class="contents-body">
          
          <br/>
          自慢できることは一つだけ "沖縄出身であること" です。<br/>
          バンドルカードの会社(株式会社カンム)で機械学習エンジニアをしています。<br/>
          学問/コーヒー/お酒/友達 を愛しています。<br/>
          早起きが趣味です。 <br/>
          最近は機械学習とビジネスを繋ぐところに興味があります。 <br/>

          </p>
					<v-row>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://twitter.com/fkubota_' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-twitter</v-icon>
                </v-btn>
              </template>
              <span>twitter</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://github.com/fkubota' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-github</v-icon>
                </v-btn>
              </template>
              <span>GitHub</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://www.kaggle.com/fkubota' v-bind="attrs" v-on="on">
                  <font-awesome-icon color="#cccccc" :icon="[ 'fab', 'kaggle' ]" />
                </v-btn>
              </template>
              <span>Kaggle</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://speakerdeck.com/fkubota' v-bind="attrs" v-on="on">
                  <font-awesome-icon color="#cccccc"  :icon="[ 'fab', 'speaker-deck' ]" />
                </v-btn>
              </template>
              <span>Speaker Deck</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://note.com/f_kubota' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-file-outline</v-icon>
                </v-btn>
              </template>
              <span>note</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://fkubota.hatenablog.com/archive' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-fountain-pen-tip</v-icon>
                </v-btn>
              </template>
              <span>hatena blog</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://zenn.dev/fkubota' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-alpha-z-circle</v-icon>
                </v-btn>
              </template>
              <span>Zenn</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://qiita.com/fkubota' v-bind="attrs" v-on="on">
                  <v-icon color='#cccccc'>mdi-alpha-q-circle</v-icon>
                </v-btn>
              </template>
              <span>Qiita</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon href='https://github.com/fkubota/portfolio' v-bind="attrs" v-on="on">
                  <v-icon color="#cccccc" >mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source Code</span>
            </v-tooltip>

					</v-row>
				</v-col>
				<v-col>
					<v-icon size=300px color='#f9b53520'>mdi-human</v-icon>
				</v-col>
			</v-row>
		</v-container>
</template>

<script>
  export default {
			name: 'App',
			data() {
					return { 
						}
				}
    };
</script>

<style>
  @import "./../css/mycss.css";
</style>
