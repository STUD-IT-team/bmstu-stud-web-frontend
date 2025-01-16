<style lang="stylus" scoped>
@import 'styles/constants.styl'
@import 'styles/buttons.styl'
@import 'styles/fonts.styl'

.wrapper
  width 100%
  min-height 100vh

  > *
    position absolute
    display flex
    flex-direction column
    width 100%
    min-height 100vh
</style>

<style lang="stylus">
@import 'styles/fonts.styl'
@import 'styles/components.styl'
@import 'styles/buttons.styl'

.root-modals
  font-medium()
  button
    button()
</style>

<style>
@keyframes scale-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0;
  }
}

@keyframes scale-in {
  0% {
    transform: scale(1.05);
    opacity: 0;
  }
  25% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.scale-in-enter-active {
  overflow: hidden;
  animation: scale-in 0.2s ease;
}
.scale-in-leave-active {
  overflow: hidden;
  animation: scale-out 0.2s ease;
}

.opacity-enter-active {
  animation: opacity 0.3s;
}
.opacity-leave-active {
  animation: opacity 0.3s reverse forwards;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<style>
@keyframes slide-left {
  0% {
    /* opacity: 0; */
    position: absolute;
    transform: translateX(-100%);
  }
  100% {
    /* opacity: 1; */
    position: absolute;
    transform: translateX(0);
  }
}
.slide-left-enter-active {
  overflow: hidden;
  animation: slide-left 0.2s ease;
}
.slide-left-leave-active {
  overflow: hidden;
  animation: slide-left 0.2s ease reverse forwards;
}
</style>

<template>
  <div class="wrapper">
    <router-view #default="{ Component }">
      <transition name="scale-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <NavBar id="navbar" />

  <Popups ref="popups" />
  <Modals ref="modals" class="root-modals" />
</template>

<script>
import {getCurrentInstance} from "vue";
import {Modals, Popups} from "@sergtyapkin/modals-popups";
import CircleLoading from "~/components/CircleLoading.vue";
import API from "~/utils/API";
import NavBar from "~/components/NavBar.vue";


export default {
  components: {NavBar, CircleLoading, Modals, Popups},

  data() {
    return {
      transitionName: "",
      global: undefined,
      prevScrollPos: window.pageYOffset,
    }
  },

  mounted() {
    this.global = getCurrentInstance().appContext.config.globalProperties;

    this.global.$user = this.$store.state.user;
    this.global.$modals = this.$refs.modals;
    this.global.$popups = this.$refs.popups;
    this.global.$app = this;
    this.global.$api = new API(`/api`);

    this.checkMobileScreen();
    window.addEventListener('resize', (e) => {
      this.checkMobileScreen();
    });

    document.body.addEventListener('scroll', this.handleScroll);
  },

  unmounted () {
    document.body.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    checkMobileScreen() {
      if (window.innerWidth <= 700) {
        this.global.$isMobile = true;
        return;
      }
      this.global.$isMobile = false;
    },
    handleScroll(event) {
      const currentScrollPos = document.body.scrollTop;

      if (this.prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-"+Math.min(80,currentScrollPos)+"px";
      }
      this.prevScrollPos = currentScrollPos;
    },
  },

  watch: {
    $route(to, from) {
      this.transitionName = 'scale-in';

      console.log(from.path, 'TO', to.path)
    },
  }
};
</script>
