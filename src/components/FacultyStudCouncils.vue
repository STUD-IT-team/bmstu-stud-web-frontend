<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'


.stud-faculties 
  .background-img 
    margin 10px 0px
    display block
    img 
      position relative
      left 5%
      border-radius 3vw
      top 0
      width 90%

	.box 
		position relative
		bottom 30vw
		left 45vw
		width 10vw
		height 10vw
		transform-style preserve-3d
		animation animate 20s linear infinite


	.box:hover 
		animation-play-state paused

	@keyframes animate 
		0%
			transform perspective(1000px) rotateY(0deg)
		100%
			transform perspective(1000px) rotateY(360deg)

	.box span 
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		transform-origin center
		transform-style preserve-3d
		transform rotateY(calc(var(--i) * 40deg)) translateZ(400px) //rotateY (--i) * (360/cnt)deg
		-webkit-box-reflect below 2px linear-gradient(transparent, transparent, rgba(4, 4, 4, 0.267))

	.box span img 
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		// transition 0.5s
		border-radius 100%
		// box-shadow 0 1px 3px colorPalette1
		border 4px double colorPalette1

	.box
		img:hover 
			transform translateY(-20px)

</style>

<template>
	<div class="stud-faculties">
		<div class="background-img">
			<img src="/res/icons/stud-faculties-bg.svg" alt="" />
		</div>
		<div class="box">
			<span style="--i:1"><img
					src="https://sun9-22.userapi.com/impg/auBf_amipunZjyGLYTiEzbPtcvPPA7THtCQYGQ/tv2oqPK-fdo.jpg?size=1955x2160&quality=95&sign=5308bf91e6b9d46d5bef3bbf24487b51&type=album"></span>
			<span style="--i:2"><img
					src="https://sun9-75.userapi.com/impg/RyPiAsi6vKqEZiM8CQPA6xeY9yjtX1IpYXz2lw/4Ej3z8wd69c.jpg?size=1668x1667&quality=95&sign=b5b5cafc5f13e6d5aa856d199267e95f&type=album"></span>
			<span style="--i:3"><img
					src="https://sun9-69.userapi.com/impg/RSls9NiDfFfioAKUXwpgg-x-GOmY7b1EyIAlTw/KQ35hPG7bHs.jpg?size=1081x1080&quality=95&sign=7c01bc15e95413d90b73b0ac5193d485&type=album"></span>
			<span style="--i:4"><img
					src="https://sun9-17.userapi.com/impg/fqmrqXHRU0i8zRQFEee5snXQM_Zm39KmE19rbQ/zoZQQw7Q3WI.jpg?size=2560x2560&quality=95&sign=aed6280091da857176c1366d59023827&type=album"></span>
			<span style="--i:5"><img
					src="https://sun9-13.userapi.com/impg/vuG_tke_7W_sHXjwaHNv04qKe6RAsFF-EuhzyQ/fYUTaNl2M24.jpg?size=1080x1080&quality=95&sign=96298b3c53c2804b5100c33e31e68233&type=album"></span>
			<span style="--i:6"><img
					src="https://sun9-43.userapi.com/impg/xf0vjmMtRk5PuyzZVaBHeN9GlrQM8zG_VpZUAg/XpZObatXmXk.jpg?size=2560x2560&quality=95&sign=d7bbb2febd66d9c7b0b5f1946a782acd&type=album"></span>
			<span style="--i:7"><img
					src="https://sun9-76.userapi.com/impg/YmVaO8clIf_NC9JuCI7DrX6Sxss-lWENDxkXBg/SFIUaLHE4GM.jpg?size=932x846&quality=95&sign=da4780033d948d117cd82f79ccabec78&type=album"></span>
			<span style="--i:8"><img
					src="https://sun9-59.userapi.com/impg/7MTcy51k_yKUr-Z4vHYmUJYmCv1WPz2O_g-vsg/9sdFxKy1eXU.jpg?size=2085x2084&quality=95&sign=346501584bba9946b41401cf2827590a&type=album"></span>
			<span style="--i:9"><img
					src="https://sun9-33.userapi.com/impg/M25sTKnMn8GWX8apdvsoZw_VExmlkvMdeO54kw/1cpbHF9OHw4.jpg?size=2560x2560&quality=95&sign=fe9a6a44fbfdde98d83a5c39cecfff57&type=album"></span>
		</div>
	</div>
</template>


<script>
export default {
	props: {
	},

	computed: {
	},

	data() {
		return {
		}
	},


	mounted() {


	},

	methods: {

	},
};
</script>
