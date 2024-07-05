<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'
@require '../styles/buttons.styl'
@require '../styles/components.styl'
@require '../styles/animations.styl'

.root-numbers
    color colorText1
    position absolute
    width 100%
    overflow-x display
    scrollbar disabled
    left 0
    display flex
    //gap 25px
    //background red
    //scrollbar-width none
    .element
        padding 0 10px
    li
        width max-content
        border solid 2px colorPalette1
        border-radius borderRadiusL
        padding 10px 20px
        .number-main
            width max-content
            margin auto
            text-align center
            display block
            font-large-xx()
        .number-title
            width max-content
            margin auto
            text-align center
            display block
            font-large()
            width max-content

</style>

<template>
  <!-- <div > -->
        <ul 
            class="root-numbers" 
            @wheel="handleScroll()"
            @update="disableScrollReset()"
            ref="scroll">
            <div class="element" v-for="(number,idx) in numbers">
                <li>
                    <span class="number-main">
                        {{number.number}}
                    </span>
                    <span class="number-title">
                        {{number.title}}
                    </span>
                </li>
            </div>
        </ul>
  <!-- //</div> -->
</template>

<script>
import CircleLoading from "~/App.vue";
import {ref} from 'vue';

export default {
  emits: ['delete', 'pin', 'upnin', 'edit'],

  components: {CircleLoading},

  props: {
  },

  data() {
    return {
      numbers: [
        {
            title: "выездов",
            number: ">360",
        },
        {
            title: "мероприятий",
            number: "100+",
        },
        {
            title: "клубов и организаций",
            number: "34",
        },
        {
            title: "активистов",
            number: ">1300",
        },
        {
            title: "охват студентов",
            number: "30 000",
        },
        {
            title: "лет мне",
            number: ">20",
        },
        {
            title: "фронтендера",
            number: "3",
        },
        {
            title: "лет жизни",
            number: "27",
        },
        {
            title: "чатов",
            number: "слишком много",
        },
        {
            title: "Штаханчик на пуфике",
            number: "1",
        },
        {
            title: "Вопросов дизайнерам",
            number: "128",
        },
      ],
    }
  },

  computed: {
    datePrettified() {
      return this.timePublished.toLocaleDateString('ru-RU', {day: "numeric", month: "short", hour: "numeric", minute: "numeric"});
    }
  },

  mounted() {
    this.isCollapsed = true;
    // this.scrollExpand();
  },

  methods: {
        // scrollExpand() {
        //     const scroll = this.$refs.scroll
        //     var move = scroll.lastChild
        //     scroll.prepend(move)
        //     move = scroll.firstChild
        //     scroll.append(move)
        // },
        disableScrollReset() {
            event.preventDefault()
        },
        handleScroll() {
            const scroll = this.$refs.scroll
            var delta
            if (event.deltaY > 0) 
                delta = Math.min(event.deltaY, 20)
            else
                delta = Math.max(event.deltaY, -20)
            console.log(delta)
            scroll.style.left = (Number(scroll.offsetLeft) + delta) + 'px'
            var fChild = scroll.firstChild
            if (scroll.offsetLeft < -500 + 10) {
                // console.log(scroll.clientWidth)
                console.log(window.screen.width)
                console.log(scroll.offsetLeft)
                fChild.remove()
                scroll.append(fChild)
                scroll.style.left = (Number(scroll.offsetLeft) + fChild.clientWidth) + 'px'
            }
            var lChild = scroll.lastChild
            if (scroll.offsetLeft > -10) {
                lChild.remove()
                scroll.prepend(lChild)
                scroll.style.left = (Number(scroll.offsetLeft) - lChild.clientWidth) + 'px'
            }
                
            // // scroll.scrollLeft -= event.wheelDelta
            // while(factor < 0.2) {
            //     factor = scroll.scrollLeft / (scroll.scrollWidth - scroll.clientWidth)
            //     var move = scroll.lastChild
            //     move.remove()
            //     scroll.prepend(move)
            //     scroll.scrollLeft += move.clientWidth + 26

            // }
            // while(factor > 0.8) {
            //     factor = scroll.scrollLeft / (scroll.scrollWidth - scroll.clientWidth)
            //     var move = scroll.firstChild
            //     move.remove()
            //     scroll.append(move)
            //     scroll.scrollLeft -= move.clientWidth + 26
            // //     var move = $(this.firstChild);
            // //     move.remove();
            // //     $(this).append(move);
            //     //this.scrollLeft -= move.width();
            // }var factor = scroll.offsetLeft / (scroll.scrollWidth - scroll.clientWidth)
            // console.log(scroll.scrollWidth)
            
        }
    }
};
</script>
