<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'
@require '../../styles/utils.styl'
@require '../../styles/buttons.styl'
@require '../../styles/components.styl'
@require '../../styles/animations.styl'

.root-miss-cards-container
  list-style none
  display flex
  flex-wrap wrap
  justify-content center
  gap 20px
  position relative
  .card
    width 45%
    max-width 215px
    min-width 130px
    animation-float(0.5s, 0, -20px)
    animation-index-delay(0.05s)
  .loading
    position absolute
    left 50%
    top -30px
    transform translateX(-50%)
</style>

<template>
  <div class="root-miss-cards-container">
    <MissCard v-for="(miss, idx) in resultMissList"
              :style="{'--animation-index': idx}"
              class="card"
              :group="miss.group"
              :name="miss.name"
              :id="miss.id"
              :imageWebp="miss.imageWebp"
              :imageJpg="miss.imageJpg"
              :votes-count="miss.votesCount"
              :show-votes="showVotes"
              :show-nominations="showNominations"
              :max-votes-count="maxVotesCount"
              :total-votes-count="totalVotesCount"
              :nominations="miss.nominations"
    ></MissCard>
    <transition name="opacity">
      <CircleLoading v-if="loading" class="loading" size="30px"></CircleLoading>
    </transition>
  </div>
</template>

<script>
import MissCard from "~/components/Miss/MissCard.vue";
import {missList} from "~/utils/constantsMiss";
import REST_API from "@sergtyapkin/rest-api";
import CircleLoading from "~/components/CircleLoading.vue";

export default {
  components: {CircleLoading, MissCard},

  props: {
    showVotes: Boolean,
    showNominations: Boolean,

    excludedIds: {
      type: Array,
      default: [],
    },
  },

  computed: {
    resultMissList() {
      return this.missList.filter(miss => !this.excludedIds.includes(miss.id));
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
      loading: false,

      votesApi: new REST_API('/api/miss'),

      missList,
    }
  },

  async mounted() {
    if (this.showVotes) {
      await this.getVotesCounts();
    }
  },

  methods: {
    async getVotesCounts() {
      this.loading = true;
      const {ok, status, data} = await this.votesApi.get('/votes');
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить данные о голосах');
        return;
      }
      Object.entries(data).forEach(([id, votesData]) => this.missList.find(miss => miss.id === Number(id)).votesCount = votesData.count);
    }
  }
}
</script>
