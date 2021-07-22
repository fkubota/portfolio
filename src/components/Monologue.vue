<template>
<div class="bg">
	<v-container class="contents">
    <h1 class="contents-title">Monologue.</h1>
		<div class="home-content">
			<transition-group tag="div">
					<span v-for="el in text" :key="el.id" class="item" v-text="el.text" style="font-size:2rem; color:#ffffff"/>
				</transition-group>
		</div>
				<v-row justify="center">
					<v-icon size=100px color='#f9b53520'>mdi-account-voice</v-icon>
				</v-row>
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      index: 0,
      // オリジナルメッセージ
      original: [

          '読書が好きです。',
          'デカルトの「方法序説」をバイブルとしています。',
          'Vim がないと生きていけません。',
          'Twitterを令和初日にはじめました。',
          '資格は漢検3級しかないです。',
          '一人っ子です。',
          'ウィスキーはタリスカーが好きです。',
          'オルダス・ハクスリーの「素晴らしい新世界」が好きです。',
          'サッカー部でした。',
          'スポーツはなんでも好きです。',
          '少食です。',
          'アジカンとかよく聴いてます。',
          'ビールを好んでよく飲みます。',
          'スノボに憧れがあります。',
          '1993年生まれです。',
          'Kaggle Expertです。',

      ],
      // 分解したメッセージ
      messages: [],
      text: ''
    }
  },
  computed: {
    editor: {
      get() { return this.text.map(e => e.text).join('') },
      set(text) { this.text = this.convText(text) }
    }
  },
  methods: {
    // デモ用のオートタイマー
    ticker() {
      this.timer = setTimeout(() => {
          this.index = this.index < this.messages.length-1 ? this.index + 1 : 0
          this.text = this.messages[this.index]
          this.ticker()
      }, 3000)
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const alms = {}
      const result = text.split('').map(el => {
        alms[el] = alms[el] ? ++alms[el] : 1
        return { id: `${el}_${alms[el]}`, text: el }
      })
      return Object.freeze(result) // 監視しない
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el))
    this.text = this.messages[0]
    this.ticker()
  }
}
</script>

<style>
@import "./../css/mycss.css";
.title {
	font-size: 2rem;
}
.item {
	display: inline-block;
	min-width: 0.3em;
}
/* トランジション用スタイル */
.v-enter-active,
.v-leave-active,
.v-move {
	transition: all 1s;
}
.v-leave-active {
	position: absolute;
}
.v-enter,
.v-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
	.bg {
		background-size: cover;
		background-position: center;
	}
	.home-content {
		text-align: center;
		margin-top: 15%;
		font-family: "Philosopher", serif;
	}
</style>
