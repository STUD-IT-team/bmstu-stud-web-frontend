<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'

.root-miss-cards-container
  list-style none
  display flex
  flex-wrap wrap
  justify-content space-between
  @media ({mobile})
    justify-content center
  gap 20px
  .card
    width 100%
    max-width 190px
</style>

<template>
  <ul class="root-miss-cards-container">
    <MissCard v-for="miss in missList"
              class="card"
              :group="miss.group"
              :name="miss.name"
              :id="miss.id"
              :image="miss.image"
              :votes-count="miss.votesCount"
              :show-votes="showVotes"
              :max-votes-count="maxVotesCount"
              :total-votes-count="totalVotesCount"
    ></MissCard>
  </ul>
</template>

<script>
import MissCard from "~/components/Miss/MissCard.vue";
import {missList} from "~/utils/constants";

export default {
  components: {MissCard},

  props: {
    showVotes: Boolean,
  },

  computed: {
    maxVotesCount() {
      return this.missList.reduce((maxVotes, miss) => Math.max(maxVotes, miss.votesCount), -Infinity);
    },
    totalVotesCount() {
      return this.missList.reduce((maxVotes, miss) => maxVotes + miss.votesCount, 0);
    }
  },

  data() {
    return {
      missList,
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
