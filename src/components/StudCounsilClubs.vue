<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'

.stud-clubs
  position relative
  left 5%
  overflow hidden
  margin auto
  .background-img
    display block
    img
      width 90%
      border-radius 40px

  .club-holder
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    .club-container
      position absolute
      top calc(var(--y) * 1px)
      left calc(var(--x) * 1px)
      transform translate(-50%, -50%)
      overflow hidden
      width calc(var(--radius) * 2 * 1px)
      height calc(var(--radius) * 2 * 1px)
      border-radius 99999px
      box-shadow 0 5px 5px 0 rgba(0, 0, 0, 0.5)
      img
        transform rotate(calc(var(--rotation) * 1rad))
        width 100%
        height 100%
        object-fit cover
        transition 0.2s ease
        &:hover
          filter brightness(1.1)
</style>

<template>
  <div class="stud-clubs">
    <div class="background-img">
      <img src="/static/icons/clubs-bg.svg" alt="">
    </div>
    <div class="club-holder">
      <div
        v-for="(club, index) in clubs"
        :key="index"
        class="club-container"
        :style="{
          '--x': `${club.x}`,
          '--y': `${club.y}`,
          '--radius': `${club.rad}`,
          '--rotation': `${club.rot}`,
        }"
      >
        <a :href="club.redirectLink">
          <img :src="club.imgUrl" :alt="club.title">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
class Club {
  title = undefined;
  imgUrl = undefined;
  redirectLink = undefined;
  x = undefined;
  y = undefined;
  weight = undefined;
  rad = undefined;
  rot = undefined;
  srot = undefined;

  constructor(title, imgUrl, redirectLink, x, y, rad, rot = 0, weight = 1) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.redirectLink = redirectLink;
    this.x = x;
    this.y = y;
    this.weight = weight;
    this.sx = 0;
    this.sy = 0;
    this.rad = rad;
    this.rot = rot;
    this.srot = 0;
  }
}

export default {
  props: {},

  data() {
    return {
      clubs: [],

      prevScrollValue: undefined,
    }
  },

  async mounted() {
    const clubsInfo = await this.getClubsList();
    const boundingRect = this.$el.getBoundingClientRect();

    clubsInfo.forEach((clubInfo, i) => {
      this.clubs.push(new Club(
        clubInfo.title,
        `${clubInfo.logo.key}`,
        `organizations/${clubInfo.id}`,
        Math.random() * boundingRect.width, // рандомная позиция из ширины области
        Math.random() * boundingRect.width * 0.6, // рандоимная позиция из примерной высоты области
        1, // исходный радиус потом сразу перепишется
        (Math.random() - 0.5) * Math.PI / 3, // читаемый угол наклона +-30град
        1 + Math.random() * 2, // рандомный вес 1..3
      ));
    });

    requestAnimationFrame(this.runAnimationFrame);

    document.body.addEventListener('scroll', this.onScroll);
  },

  unmounted() {
    document.body.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    runAnimationFrame() {
      const isClubsInContact = this.clubs.map(() => false);

      this.clubs.forEach((club, idx) => {
        const prevX = club.x;
        const prevY = club.y;

        // Collisions between each other
        this.clubs.forEach((club2, idx2) => {
          if (club2 === club) {
            return; // continue
          }
          const dist = Math.sqrt(Math.pow(club.x - club2.x, 2) + Math.pow(club.y - club2.y, 2));
          if (dist < club.rad + club2.rad) {
            isClubsInContact[idx] = true;
            isClubsInContact[idx2] = true;

            const relaxDist = (club.rad + club2.rad - dist) * 1;
            club.x -= (club2.x - club.x) / dist * relaxDist / 2;
            club.sx -= (club2.x - club.x) / dist * relaxDist / 2;
            club.y -= (club2.y - club.y) / dist * relaxDist / 2;
            club.sy -= (club2.y - club.y) / dist * relaxDist / 2;
            club2.x += (club2.x - club.x) / dist * relaxDist / 2;
            club2.sx += (club2.x - club.x) / dist * relaxDist / 2;
            club2.y += (club2.y - club.y) / dist * relaxDist / 2;
            club2.sy += (club2.y - club.y) / dist * relaxDist / 2;

            club.srot = relaxDist / 50;
            club2.srot = -club.srot;
          }
        });

        // Collisions with sides
        const boundingRect = this.$el.getBoundingClientRect();
        const BOTTOM_COORD = boundingRect.height;
        const RIGHT_COORD = boundingRect.width;
        const LEFT_COORD = 0;
        const TOP_COORD = 0;

        const rad = club.rad  * 1.8;
        if (club.y + rad > BOTTOM_COORD) {
          club.sy -= club.y + rad - BOTTOM_COORD;
          club.y = BOTTOM_COORD - rad;
        }
        if (club.x + rad * 2 > RIGHT_COORD) {
          club.sx -= club.x + rad * 2 - RIGHT_COORD;
          club.x = RIGHT_COORD - rad * 2;
        }
        if (club.x - rad < LEFT_COORD) {
          club.sx += LEFT_COORD - (club.x - rad);
          club.x = LEFT_COORD + rad;
        }
        if (club.y - rad < TOP_COORD) {
          club.sy += TOP_COORD - (club.y - rad) / 2;
          club.y = TOP_COORD + rad;
        }

        // Default updations
        club.x += club.sx;
        club.y += club.sy;
        club.sx *= 0.9;
        club.sy *= 0.9;
        const realDelta = Math.sqrt(Math.pow(club.x - prevX, 2) + Math.pow(club.y - prevY, 2));

        if (isClubsInContact[idx]) {
          if (realDelta < club.rad / 2) {
            club.srot *= 0.9;
          }
          if (realDelta < club.rad / 5) {
            club.srot = 0;
          }
        }
        club.rot += club.srot;
        if (club.y < BOTTOM_COORD - club.rad * 2) {
          club.sy += 1 * club.weight;
        }

        club.rad = boundingRect.width / 20; // Set clubs size
      });
      requestAnimationFrame(this.runAnimationFrame);
    },

    onScroll() { // generate force when fast scrolls
      const currentScrollValue = document.body.scrollTop;
      if (!this.prevScrollValue) {
        this.prevScrollValue = currentScrollValue;
        return;
      }
      const delta = currentScrollValue - this.prevScrollValue;
      if (delta > 0) {
        this.clubs.forEach(club => {
          club.sy += -delta / 20 * club.weight;
        });
      }

      this.prevScrollValue = currentScrollValue;
    },

    async getClubsList() {
      this.loading = true;
      const { data, ok, status } = await this.$api.getOrgsByType("Клуб");
      this.loading = false;
      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить список клубов');
      }

      return data.clubs;
    },
  },
};
</script>
