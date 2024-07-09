<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'


.stud-clubs
  .background-img 
    // margin 5px 0px
    display block
    img 
      position relative
      left 5%
      border-radius 3vw
      top 0
      width 90%

</style>

<template>
	<div class="stud-clubs">
		<div class="background-img">
			<img src="/res/icons/clubs-bg.svg" alt="" />
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
