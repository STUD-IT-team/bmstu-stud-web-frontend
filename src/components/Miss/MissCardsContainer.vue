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
  justify-content center
  gap 20px
  .card
    width 45%
    max-width 215px
    min-width 130px
    opacity 0
    animation card-in 0.5s ease forwards
    animation-delay calc(var(--index) * 0.05s)
    @keyframes card-in
      from
        opacity 0
        transform translateY(-20px)
      to
        opacity 1
        transform translateY(0)
</style>

<template>
  <div class="root-miss-cards-container">
    <MissCard v-for="(miss, idx) in resultMissList"
              :style="{'--index': idx}"
              class="card"
              :group="miss.group"
              :name="miss.name"
              :id="miss.id"
              :imageWebp="miss.imageWebp"
              :imageJpg="miss.imageJpg"
              :votes-count="miss.votesCount"
              :show-votes="showVotes"
              :max-votes-count="maxVotesCount"
              :total-votes-count="totalVotesCount"
    ></MissCard>
  </div>
</template>

<script>
import MissCard from "~/components/Miss/MissCard.vue";
import {missList} from "~/utils/constants";

export default {
  components: {MissCard},

  props: {
    showVotes: Boolean,

    excludedIds: {
      type: Array,
      default: [],
    },
  },

  computed: {
    resultMissList() {
      return missList.filter(miss => !this.excludedIds.includes(miss.id));
    },
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
