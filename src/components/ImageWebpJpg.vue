<style lang="stylus" scoped>
.root-picture
  display block
  overflow hidden
  img
    width 100%
    height 100%
    object-fit cover
</style>

<template>
  <picture :class="class" class="root-picture">
    <source type="image/webp" :srcset="srcWebp">
    <source type="image/jpeg" :srcset="srcJpg">
    <img :src="simpleSrc" :srcset="srcJpg" :alt="alt"/>
  </picture>
</template>

<script>
export default {
  props: {
    class: String,
    alt: {
      type: String,
      default: '',
    },
    srcWebp: {
      type: String,
      required: true,
    },
    srcJpg: {
      type: String,
      required: true,
    },
  },

  computed: {
    simpleSrc() {
      return this.srcJpg?.slice(0, this.srcJpg?.indexOf(' '));
    }
  }
};
</script>
