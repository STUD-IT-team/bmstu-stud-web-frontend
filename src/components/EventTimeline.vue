<style lang="stylus" scoped>
@import '../styles/constants.styl'
@import '../styles/fonts.styl'
@import '../styles/utils.styl'
@import '../styles/buttons.styl'
@import '../styles/components.styl'
@import '../styles/animations.styl'

collapsed-width = 200px
expanded-width = 700px
indicator-height = 76px
indicator-width = 232px

main-part-max-width = 1440px
radio-radius = 14px

.root-timeline
  // trans(0.5s)
  position relative
  width 100%
  max-width main-part-max-width
  margin auto
  .event
    // trans(0.5s)
    position relative
    overflow hidden
    // top 0
    display block
    width 1019px
    height 422px
    margin-bottom 30px
    margin-left auto
    border-radius borderRadiusL
    img
      trans(0.5s)

      width inherit
      // transition filter 5s linear
      // border-radius borderRadiusL
      height inherit
      object-fit cover
      filter brightness(0.6)
      outline 10px solid black
    .title
    .info
      trans(0.5s)

      position absolute
      top 0
      height 100%
    .title
      right 0
      display flex
      align-items center
      justify-content end
      width 60%
      padding-right 20px
      color colorWhite
      text-align right
      font-large-xxx()
    .info
      display flex
      align-items top
      justify-content center
      width 40%
      padding 40px 40px
      color colorWhite
      font-large-xx()
    .description
      trans(0.5s)

      position absolute
      top 0
      left 0
      display flex
      align-items top
      justify-content left
      width 100%
      height 100%
      padding 50px
      color colorWhite
      opacity 0
      transition-delay 0.4s 0
      font-large()
    &:hover
      .title
      .info
        opacity 0
      .description
        opacity 1
      img
        filter brightness(0.4) blur(10px)
  .current
    position relative
    display flex
    align-items center
    justify-content center
    width indicator-width
    height indicator-height
    padding-top 5px
    color colorWhite
    // padding-left 80px
    background colorPalette1
    // border-radius 0 borderRadiusM borderRadiusM 0
    border-radius borderRadiusM
    font-large()
  .timeline-container
    scrollbar-width none
    position relative
    top - indicator-height
    right 0
    left indicator-width
    overflow-x scroll
    overflow-y visible
    height indicator-height + 10px
    .timeline
      trans(0.5s)

      display flex
      width max-content
      height indicator-height
      margin-left - radio-radius
      color colorText1
      .month
        position relative
        width max-content
        height indicator-height * 0.5
        .radio-month
          cursor pointer
          position absolute
          bottom - (radio-radius * 0.5)
          width radio-radius
          height radio-radius
          -moz-appearance initial
          appearance none
          &:after
            trans(0.2s)

            content ''
            display block
            width radio-radius
            height radio-radius
            background colorPalette1
            border-radius borderRadiusMax
            // outline solid
          &:hover
            &:after
              background colorPalette2
          &:checked
            &:after
              // height 30px
              // width 30px
              // margin -5px
              background colorPalette4
          &:checked ~ label
            opacity 0
        label
          trans(0.5s)

          position relative
          top 35px
          left 0.5 * radio-radius - 100px
          display block
          width 200px
          padding 0 auto
          text-align center
          font-large()
        &:first-child
          .month-events-flex
            width expanded-width
          .month-events-flex
            .radio-event
              opacity 1
        .month-events-flex
          trans(0.3s)

          position relative
          top indicator-height * 0.5
          margin-left radio-radius //* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

          /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4
            label
            font-medium()
            position absolute
            top 22px
            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10
            .event-fade-enter-active
            trans(0.3s)
            .event-fade-leave-active
            trans(0.3s)
            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0
             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

          /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

            /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

            /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4
              label
              font-medium()
              position absolute
              top 22px
              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10
              .event-fade-enter-active
              trans(0.3s)
              .event-fade-leave-active
              trans(0.3s)
              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0
               /* 0.5\
              //margin-right radio-radius\
              display flex\
              justify-content space-evenly\
              height radio-radius\
              width collapsed-width\
              &:before\
              content ''\
              position absolute\
              //outline solid\
              width 100%\
              //height radio-radius\
              top -1px\
              border-top 2px solid colorPalette1\
              z-index -1\
              .radio-event\
              trans(0.5s)\
              opacity 0\
              position relative\
              height radio-radius\
              width radio-radius\
              margin-top - (radio-radius * 0.5)\
              input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
              input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                            label\
              font-medium()\
              position absolute\
              top 22px\
                            .future\
              position relative\
              top indicator-height * 0.5\
              height radio-radius\
              width 1000px\
              &:before\
              content ''\
              position absolute\
              width 100%\
              top -1px\
              border-top 2px solid colorPalette1\
              &:before\
              content ''\
              background linear-gradient(to right, transparent, colorWhite)\
              width 40%\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              right 0\
              z-index 1\
              user-events none\
              pointer-events none\
              &:after\
              content ''\
              background colorWhite\
              width 600px\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              left 100%\
              z-index 10\
                                          .event-fade-enter-active\
              trans(0.3s)\
                            .event-fade-leave-active\
              trans(0.3s)\
                            .event-fade-enter-from\
              //transition all 1s\
              transform translateY(10px)\
              opacity 0\
              .event-fade-leave-to\
              transform translateY(-10px)\
              opacity 0\
                            /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

               /* 0.5\
              //margin-right radio-radius\
              display flex\
              justify-content space-evenly\
              height radio-radius\
              width collapsed-width\
              &:before\
              content ''\
              position absolute\
              //outline solid\
              width 100%\
              //height radio-radius\
              top -1px\
              border-top 2px solid colorPalette1\
              z-index -1\
              .radio-event\
              trans(0.5s)\
              opacity 0\
              position relative\
              height radio-radius\
              width radio-radius\
              margin-top - (radio-radius * 0.5)\
              input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
              input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                            label\
              font-medium()\
              position absolute\
              top 22px\
                            .future\
              position relative\
              top indicator-height * 0.5\
              height radio-radius\
              width 1000px\
              &:before\
              content ''\
              position absolute\
              width 100%\
              top -1px\
              border-top 2px solid colorPalette1\
              &:before\
              content ''\
              background linear-gradient(to right, transparent, colorWhite)\
              width 40%\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              right 0\
              z-index 1\
              user-events none\
              pointer-events none\
              &:after\
              content ''\
              background colorWhite\
              width 600px\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              left 100%\
              z-index 10\
                                          .event-fade-enter-active\
              trans(0.3s)\
                            .event-fade-leave-active\
              trans(0.3s)\
                            .event-fade-enter-from\
              //transition all 1s\
              transform translateY(10px)\
              opacity 0\
              .event-fade-leave-to\
              transform translateY(-10px)\
              opacity 0\
                            /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

               /* 0.5\
              //margin-right radio-radius\
              display flex\
              justify-content space-evenly\
              height radio-radius\
              width collapsed-width\
              &:before\
              content ''\
              position absolute\
              //outline solid\
              width 100%\
              //height radio-radius\
              top -1px\
              border-top 2px solid colorPalette1\
              z-index -1\
              .radio-event\
              trans(0.5s)\
              opacity 0\
              position relative\
              height radio-radius\
              width radio-radius\
              margin-top - (radio-radius * 0.5)\
              input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
              input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                            label\
              font-medium()\
              position absolute\
              top 22px\
                            .future\
              position relative\
              top indicator-height * 0.5\
              height radio-radius\
              width 1000px\
              &:before\
              content ''\
              position absolute\
              width 100%\
              top -1px\
              border-top 2px solid colorPalette1\
              &:before\
              content ''\
              background linear-gradient(to right, transparent, colorWhite)\
              width 40%\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              right 0\
              z-index 1\
              user-events none\
              pointer-events none\
              &:after\
              content ''\
              background colorWhite\
              width 600px\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              left 100%\
              z-index 10\
                                          .event-fade-enter-active\
              trans(0.3s)\
                            .event-fade-leave-active\
              trans(0.3s)\
                            .event-fade-enter-from\
              //transition all 1s\
              transform translateY(10px)\
              opacity 0\
              .event-fade-leave-to\
              transform translateY(-10px)\
              opacity 0\
                            /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

               /* 0.5\
              //margin-right radio-radius\
              display flex\
              justify-content space-evenly\
              height radio-radius\
              width collapsed-width\
              &:before\
              content ''\
              position absolute\
              //outline solid\
              width 100%\
              //height radio-radius\
              top -1px\
              border-top 2px solid colorPalette1\
              z-index -1\
              .radio-event\
              trans(0.5s)\
              opacity 0\
              position relative\
              height radio-radius\
              width radio-radius\
              margin-top - (radio-radius * 0.5)\
              input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
              input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                            label\
              font-medium()\
              position absolute\
              top 22px\
                            .future\
              position relative\
              top indicator-height * 0.5\
              height radio-radius\
              width 1000px\
              &:before\
              content ''\
              position absolute\
              width 100%\
              top -1px\
              border-top 2px solid colorPalette1\
              &:before\
              content ''\
              background linear-gradient(to right, transparent, colorWhite)\
              width 40%\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              right 0\
              z-index 1\
              user-events none\
              pointer-events none\
              &:after\
              content ''\
              background colorWhite\
              width 600px\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              left 100%\
              z-index 10\
                                          .event-fade-enter-active\
              trans(0.3s)\
                            .event-fade-leave-active\
              trans(0.3s)\
                            .event-fade-enter-from\
              //transition all 1s\
              transform translateY(10px)\
              opacity 0\
              .event-fade-leave-to\
              transform translateY(-10px)\
              opacity 0\
                            /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

               /* 0.5\
              //margin-right radio-radius\
              display flex\
              justify-content space-evenly\
              height radio-radius\
              width collapsed-width\
              &:before\
              content ''\
              position absolute\
              //outline solid\
              width 100%\
              //height radio-radius\
              top -1px\
              border-top 2px solid colorPalette1\
              z-index -1\
              .radio-event\
              trans(0.5s)\
              opacity 0\
              position relative\
              height radio-radius\
              width radio-radius\
              margin-top - (radio-radius * 0.5)\
              input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
              input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                            label\
              font-medium()\
              position absolute\
              top 22px\
                            .future\
              position relative\
              top indicator-height * 0.5\
              height radio-radius\
              width 1000px\
              &:before\
              content ''\
              position absolute\
              width 100%\
              top -1px\
              border-top 2px solid colorPalette1\
              &:before\
              content ''\
              background linear-gradient(to right, transparent, colorWhite)\
              width 40%\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              right 0\
              z-index 1\
              user-events none\
              pointer-events none\
              &:after\
              content ''\
              background colorWhite\
              width 600px\
              height indicator-height\
              position absolute\
              bottom indicator-height\
              left 100%\
              z-index 10\
                                          .event-fade-enter-active\
              trans(0.3s)\
                            .event-fade-leave-active\
              trans(0.3s)\
                            .event-fade-enter-from\
              //transition all 1s\
              transform translateY(10px)\
              opacity 0\
              .event-fade-leave-to\
              transform translateY(-10px)\
              opacity 0\
                            /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

              /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

              /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
                  //margin-right radio-radius
                  display flex
                  justify-content space-evenly
                  height radio-radius
                  width collapsed-width
                  &:before
                  content ''
                  position absolute
                  //outline solid
                  width 100%
                  //height radio-radius
                  top -1px
                  border-top 2px solid colorPalette1
                  z-index -1
                  .radio-event
                  trans(0.5s)
                  opacity 0
                  position relative
                  height radio-radius
                  width radio-radius
                  margin-top - (radio-radius * 0.5)
                  input
                  position relative
                  height radio-radius
                  width radio-radius
                  cursor pointer
                  appearance none
                  &:before
                  trans(0.2s)
                  content ''
                  position absolute
                  top radio-radius * 0.15
                  left radio-radius * 0.15
                  height radio-radius * 0.7
                  width radio-radius * 0.7
                  background colorWhite
                  border-radius borderRadiusMax
                  outline solid 3px colorPalette1
                  &:hover
                  &:before
                  outline solid 4px colorPalette2
                  input:checked
                  &:before
                  top radio-radius * 0.05
                  left radio-radius * 0.05
                  height radio-radius * 0.9
                  width radio-radius * 0.9
                  outline solid 4px colorPalette4
                  label
                  font-medium()
                  position absolute
                  top 22px
                  .future
                  position relative
                  top indicator-height * 0.5
                  height radio-radius
                  width 1000px
                  &:before
                  content ''
                  position absolute
                  width 100%
                  top -1px
                  border-top 2px solid colorPalette1
                  &:before
                  content ''
                  background linear-gradient(to right, transparent, colorWhite)
                  width 40%
                  height indicator-height
                  position absolute
                  bottom indicator-height
                  right 0
                  z-index 1
                  user-events none
                  pointer-events none
                  &:after
                  content ''
                  background colorWhite
                  width 600px
                  height indicator-height
                  position absolute
                  bottom indicator-height
                  left 100%
                  z-index 10
                  .event-fade-enter-active
                  trans(0.3s)
                  .event-fade-leave-active
                  trans(0.3s)
                  .event-fade-enter-from
                  //transition all 1s
                  transform translateY(10px)
                  opacity 0
                  .event-fade-leave-to
                  transform translateY(-10px)
                  opacity 0
                   /* 0.5\
                  //margin-right radio-radius\
                  display flex\
                  justify-content space-evenly\
                  height radio-radius\
                  width collapsed-width\
                  &:before\
                  content ''\
                  position absolute\
                  //outline solid\
                  width 100%\
                  //height radio-radius\
                  top -1px\
                  border-top 2px solid colorPalette1\
                  z-index -1\
                  .radio-event\
                  trans(0.5s)\
                  opacity 0\
                  position relative\
                  height radio-radius\
                  width radio-radius\
                  margin-top - (radio-radius * 0.5)\
                  input\
                  position relative\
                  height radio-radius\
                  width radio-radius\
                  cursor pointer\
                  appearance none\
                  &:before\
                  trans(0.2s)\
                  content ''\
                  position absolute\
                  top radio-radius * 0.15\
                  left radio-radius * 0.15\
                  height radio-radius * 0.7\
                  width radio-radius * 0.7\
                  background colorWhite\
                  border-radius borderRadiusMax\
                  outline solid 3px colorPalette1\
                  &:hover\
                  &:before\
                  outline solid 4px colorPalette2\
                  input:checked\
                  &:before\
                  top radio-radius * 0.05\
                  left radio-radius * 0.05\
                  height radio-radius * 0.9\
                  width radio-radius * 0.9\
                  outline solid 4px colorPalette4\
                                    label\
                  font-medium()\
                  position absolute\
                  top 22px\
                                    .future\
                  position relative\
                  top indicator-height * 0.5\
                  height radio-radius\
                  width 1000px\
                  &:before\
                  content ''\
                  position absolute\
                  width 100%\
                  top -1px\
                  border-top 2px solid colorPalette1\
                  &:before\
                  content ''\
                  background linear-gradient(to right, transparent, colorWhite)\
                  width 40%\
                  height indicator-height\
                  position absolute\
                  bottom indicator-height\
                  right 0\
                  z-index 1\
                  user-events none\
                  pointer-events none\
                  &:after\
                  content ''\
                  background colorWhite\
                  width 600px\
                  height indicator-height\
                  position absolute\
                  bottom indicator-height\
                  left 100%\
                  z-index 10\
                                                      .event-fade-enter-active\
                  trans(0.3s)\
                                    .event-fade-leave-active\
                  trans(0.3s)\
                                    .event-fade-enter-from\
                  //transition all 1s\
                  transform translateY(10px)\
                  opacity 0\
                  .event-fade-leave-to\
                  transform translateY(-10px)\
                  opacity 0\
                                    /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

            /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
              //margin-right radio-radius
              display flex
              justify-content space-evenly
              height radio-radius
              width collapsed-width
              &:before
              content ''
              position absolute
              //outline solid
              width 100%
              //height radio-radius
              top -1px
              border-top 2px solid colorPalette1
              z-index -1
              .radio-event
              trans(0.5s)
              opacity 0
              position relative
              height radio-radius
              width radio-radius
              margin-top - (radio-radius * 0.5)
              input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
              trans(0.2s)
              content ''
              position absolute
              top radio-radius * 0.15
              left radio-radius * 0.15
              height radio-radius * 0.7
              width radio-radius * 0.7
              background colorWhite
              border-radius borderRadiusMax
              outline solid 3px colorPalette1
              &:hover
              &:before
              outline solid 4px colorPalette2
              input:checked
              &:before
              top radio-radius * 0.05
              left radio-radius * 0.05
              height radio-radius * 0.9
              width radio-radius * 0.9
              outline solid 4px colorPalette4

              label
              font-medium()
              position absolute
              top 22px

              .future
              position relative
              top indicator-height * 0.5
              height radio-radius
              width 1000px
              &:before
              content ''
              position absolute
              width 100%
              top -1px
              border-top 2px solid colorPalette1
              &:before
              content ''
              background linear-gradient(to right, transparent, colorWhite)
              width 40%
              height indicator-height
              position absolute
              bottom indicator-height
              right 0
              z-index 1
              user-events none
              pointer-events none
              &:after
              content ''
              background colorWhite
              width 600px
              height indicator-height
              position absolute
              bottom indicator-height
              left 100%
              z-index 10


              .event-fade-enter-active
              trans(0.3s)

              .event-fade-leave-active
              trans(0.3s)

              .event-fade-enter-from
              //transition all 1s
              transform translateY(10px)
              opacity 0
              .event-fade-leave-to
              transform translateY(-10px)
              opacity 0

              /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4
                label
                font-medium()
                position absolute
                top 22px
                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10
                .event-fade-enter-active
                trans(0.3s)
                .event-fade-leave-active
                trans(0.3s)
                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0
                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
                //margin-right radio-radius
                display flex
                justify-content space-evenly
                height radio-radius
                width collapsed-width
                &:before
                content ''
                position absolute
                //outline solid
                width 100%
                //height radio-radius
                top -1px
                border-top 2px solid colorPalette1
                z-index -1
                .radio-event
                trans(0.5s)
                opacity 0
                position relative
                height radio-radius
                width radio-radius
                margin-top - (radio-radius * 0.5)
                input
                position relative
                height radio-radius
                width radio-radius
                cursor pointer
                appearance none
                &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
                &:hover
                &:before
                outline solid 4px colorPalette2
                input:checked
                &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

                label
                font-medium()
                position absolute
                top 22px

                .future
                position relative
                top indicator-height * 0.5
                height radio-radius
                width 1000px
                &:before
                content ''
                position absolute
                width 100%
                top -1px
                border-top 2px solid colorPalette1
                &:before
                content ''
                background linear-gradient(to right, transparent, colorWhite)
                width 40%
                height indicator-height
                position absolute
                bottom indicator-height
                right 0
                z-index 1
                user-events none
                pointer-events none
                &:after
                content ''
                background colorWhite
                width 600px
                height indicator-height
                position absolute
                bottom indicator-height
                left 100%
                z-index 10


                .event-fade-enter-active
                trans(0.3s)

                .event-fade-leave-active
                trans(0.3s)

                .event-fade-enter-from
                //transition all 1s
                transform translateY(10px)
                opacity 0
                .event-fade-leave-to
                transform translateY(-10px)
                opacity 0

                 /* 0.5\
                //margin-right radio-radius\
                display flex\
                justify-content space-evenly\
                height radio-radius\
                width collapsed-width\
                &:before\
                content ''\
                position absolute\
                //outline solid\
                width 100%\
                //height radio-radius\
                top -1px\
                border-top 2px solid colorPalette1\
                z-index -1\
                .radio-event\
                trans(0.5s)\
                opacity 0\
                position relative\
                height radio-radius\
                width radio-radius\
                margin-top - (radio-radius * 0.5)\
                input\
                position relative\
                height radio-radius\
                width radio-radius\
                cursor pointer\
                appearance none\
                &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
                &:hover\
                &:before\
                  outline solid 4px colorPalette2\
                input:checked\
                &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                                label\
                font-medium()\
                position absolute\
                top 22px\
                                .future\
                position relative\
                top indicator-height * 0.5\
                height radio-radius\
                width 1000px\
                &:before\
                content ''\
                position absolute\
                width 100%\
                top -1px\
                border-top 2px solid colorPalette1\
                &:before\
                content ''\
                background linear-gradient(to right, transparent, colorWhite)\
                width 40%\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                right 0\
                z-index 1\
                user-events none\
                pointer-events none\
                &:after\
                content ''\
                background colorWhite\
                width 600px\
                height indicator-height\
                position absolute\
                bottom indicator-height\
                left 100%\
                z-index 10\
                                                .event-fade-enter-active\
                trans(0.3s)\
                                .event-fade-leave-active\
                trans(0.3s)\
                                .event-fade-enter-from\
                //transition all 1s\
                transform translateY(10px)\
                opacity 0\
                .event-fade-leave-to\
                transform translateY(-10px)\
                opacity 0\
                                /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

          /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

            /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
            //margin-right radio-radius
            display flex
            justify-content space-evenly
            height radio-radius
            width collapsed-width
            &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
            .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
            position relative
            height radio-radius
            width radio-radius
            cursor pointer
            appearance none
            &:before
            trans(0.2s)
            content ''
            position absolute
            top radio-radius * 0.15
            left radio-radius * 0.15
            height radio-radius * 0.7
            width radio-radius * 0.7
            background colorWhite
            border-radius borderRadiusMax
            outline solid 3px colorPalette1
            &:hover
            &:before
            outline solid 4px colorPalette2
            input:checked
            &:before
            top radio-radius * 0.05
            left radio-radius * 0.05
            height radio-radius * 0.9
            width radio-radius * 0.9
            outline solid 4px colorPalette4

            label
            font-medium()
            position absolute
            top 22px

            .future
            position relative
            top indicator-height * 0.5
            height radio-radius
            width 1000px
            &:before
            content ''
            position absolute
            width 100%
            top -1px
            border-top 2px solid colorPalette1
            &:before
            content ''
            background linear-gradient(to right, transparent, colorWhite)
            width 40%
            height indicator-height
            position absolute
            bottom indicator-height
            right 0
            z-index 1
            user-events none
            pointer-events none
            &:after
            content ''
            background colorWhite
            width 600px
            height indicator-height
            position absolute
            bottom indicator-height
            left 100%
            z-index 10


            .event-fade-enter-active
            trans(0.3s)

            .event-fade-leave-active
            trans(0.3s)

            .event-fade-enter-from
            //transition all 1s
            transform translateY(10px)
            opacity 0
            .event-fade-leave-to
            transform translateY(-10px)
            opacity 0

             /* 0.5\
            //margin-right radio-radius\
            display flex\
            justify-content space-evenly\
            height radio-radius\
            width collapsed-width\
            &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
            .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                        label\
            font-medium()\
            position absolute\
            top 22px\
                        .future\
            position relative\
            top indicator-height * 0.5\
            height radio-radius\
            width 1000px\
            &:before\
            content ''\
            position absolute\
            width 100%\
            top -1px\
            border-top 2px solid colorPalette1\
            &:before\
            content ''\
            background linear-gradient(to right, transparent, colorWhite)\
            width 40%\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            right 0\
            z-index 1\
            user-events none\
            pointer-events none\
            &:after\
            content ''\
            background colorWhite\
            width 600px\
            height indicator-height\
            position absolute\
            bottom indicator-height\
            left 100%\
            z-index 10\
                                    .event-fade-enter-active\
            trans(0.3s)\
                        .event-fade-leave-active\
            trans(0.3s)\
                        .event-fade-enter-from\
            //transition all 1s\
            transform translateY(10px)\
            opacity 0\
            .event-fade-leave-to\
            transform translateY(-10px)\
            opacity 0\
                        /* 0.5
      //margin-right radio-radius
      display flex
      justify-content space-evenly
      height radio-radius
      width collapsed-width
      &:before
      content ''
      position absolute
      //outline solid
      width 100%
      //height radio-radius
      top -1px
      border-top 2px solid colorPalette1
      z-index -1
      .radio-event
      trans(0.5s)
      opacity 0
      position relative
      height radio-radius
      width radio-radius
      margin-top - (radio-radius * 0.5)
      input
      position relative
      height radio-radius
      width radio-radius
      cursor pointer
      appearance none
      &:before
      trans(0.2s)
      content ''
      position absolute
      top radio-radius * 0.15
      left radio-radius * 0.15
      height radio-radius * 0.7
      width radio-radius * 0.7
      background colorWhite
      border-radius borderRadiusMax
      outline solid 3px colorPalette1
      &:hover
      &:before
      outline solid 4px colorPalette2
      input:checked
      &:before
      top radio-radius * 0.05
      left radio-radius * 0.05
      height radio-radius * 0.9
      width radio-radius * 0.9
      outline solid 4px colorPalette4

      label
      font-medium()
      position absolute
      top 22px

      .future
      position relative
      top indicator-height * 0.5
      height radio-radius
      width 1000px
      &:before
      content ''
      position absolute
      width 100%
      top -1px
      border-top 2px solid colorPalette1
      &:before
      content ''
      background linear-gradient(to right, transparent, colorWhite)
      width 40%
      height indicator-height
      position absolute
      bottom indicator-height
      right 0
      z-index 1
      user-events none
      pointer-events none
      &:after
      content ''
      background colorWhite
      width 600px
      height indicator-height
      position absolute
      bottom indicator-height
      left 100%
      z-index 10


      .event-fade-enter-active
      trans(0.3s)

      .event-fade-leave-active
      trans(0.3s)

      .event-fade-enter-from
      //transition all 1s
      transform translateY(10px)
      opacity 0
      .event-fade-leave-to
      transform translateY(-10px)
      opacity 0

      /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
        //margin-right radio-radius
        display flex
        justify-content space-evenly
        height radio-radius
        width collapsed-width
        &:before
        content ''
        position absolute
        //outline solid
        width 100%
        //height radio-radius
        top -1px
        border-top 2px solid colorPalette1
        z-index -1
        .radio-event
        trans(0.5s)
        opacity 0
        position relative
        height radio-radius
        width radio-radius
        margin-top - (radio-radius * 0.5)
        input
        position relative
        height radio-radius
        width radio-radius
        cursor pointer
        appearance none
        &:before
        trans(0.2s)
        content ''
        position absolute
        top radio-radius * 0.15
        left radio-radius * 0.15
        height radio-radius * 0.7
        width radio-radius * 0.7
        background colorWhite
        border-radius borderRadiusMax
        outline solid 3px colorPalette1
        &:hover
        &:before
        outline solid 4px colorPalette2
        input:checked
        &:before
        top radio-radius * 0.05
        left radio-radius * 0.05
        height radio-radius * 0.9
        width radio-radius * 0.9
        outline solid 4px colorPalette4
        label
        font-medium()
        position absolute
        top 22px
        .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
        content ''
        position absolute
        width 100%
        top -1px
        border-top 2px solid colorPalette1
        &:before
        content ''
        background linear-gradient(to right, transparent, colorWhite)
        width 40%
        height indicator-height
        position absolute
        bottom indicator-height
        right 0
        z-index 1
        user-events none
        pointer-events none
        &:after
        content ''
        background colorWhite
        width 600px
        height indicator-height
        position absolute
        bottom indicator-height
        left 100%
        z-index 10
        .event-fade-enter-active
        trans(0.3s)
        .event-fade-leave-active
        trans(0.3s)
        .event-fade-enter-from
        //transition all 1s
        transform translateY(10px)
        opacity 0
        .event-fade-leave-to
        transform translateY(-10px)
        opacity 0
         /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                  label\
            font-medium()\
            position absolute\
            top 22px\
                .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
        &:before\
        content ''\
        background linear-gradient(to right, transparent, colorWhite)\
        width 40%\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        right 0\
        z-index 1\
        user-events none\
        pointer-events none\
        &:after\
        content ''\
        background colorWhite\
        width 600px\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        left 100%\
        z-index 10\
                        .event-fade-enter-active\
        trans(0.3s)\
                .event-fade-leave-active\
        trans(0.3s)\
                .event-fade-enter-from\
        //transition all 1s\
        transform translateY(10px)\
        opacity 0\
        .event-fade-leave-to\
        transform translateY(-10px)\
        opacity 0\
                /* 0.5
        //margin-right radio-radius
        display flex
        justify-content space-evenly
        height radio-radius
        width collapsed-width
        &:before
        content ''
        position absolute
        //outline solid
        width 100%
        //height radio-radius
        top -1px
        border-top 2px solid colorPalette1
        z-index -1
        .radio-event
        trans(0.5s)
        opacity 0
        position relative
        height radio-radius
        width radio-radius
        margin-top - (radio-radius * 0.5)
        input
        position relative
        height radio-radius
        width radio-radius
        cursor pointer
        appearance none
        &:before
        trans(0.2s)
        content ''
        position absolute
        top radio-radius * 0.15
        left radio-radius * 0.15
        height radio-radius * 0.7
        width radio-radius * 0.7
        background colorWhite
        border-radius borderRadiusMax
        outline solid 3px colorPalette1
        &:hover
        &:before
        outline solid 4px colorPalette2
        input:checked
        &:before
        top radio-radius * 0.05
        left radio-radius * 0.05
        height radio-radius * 0.9
        width radio-radius * 0.9
        outline solid 4px colorPalette4

        label
        font-medium()
        position absolute
        top 22px

        .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
        content ''
        position absolute
        width 100%
        top -1px
        border-top 2px solid colorPalette1
        &:before
        content ''
        background linear-gradient(to right, transparent, colorWhite)
        width 40%
        height indicator-height
        position absolute
        bottom indicator-height
        right 0
        z-index 1
        user-events none
        pointer-events none
        &:after
        content ''
        background colorWhite
        width 600px
        height indicator-height
        position absolute
        bottom indicator-height
        left 100%
        z-index 10


        .event-fade-enter-active
        trans(0.3s)

        .event-fade-leave-active
        trans(0.3s)

        .event-fade-enter-from
        //transition all 1s
        transform translateY(10px)
        opacity 0
        .event-fade-leave-to
        transform translateY(-10px)
        opacity 0

         /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                  label\
            font-medium()\
            position absolute\
            top 22px\
                .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
        &:before\
        content ''\
        background linear-gradient(to right, transparent, colorWhite)\
        width 40%\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        right 0\
        z-index 1\
        user-events none\
        pointer-events none\
        &:after\
        content ''\
        background colorWhite\
        width 600px\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        left 100%\
        z-index 10\
                        .event-fade-enter-active\
        trans(0.3s)\
                .event-fade-leave-active\
        trans(0.3s)\
                .event-fade-enter-from\
        //transition all 1s\
        transform translateY(10px)\
        opacity 0\
        .event-fade-leave-to\
        transform translateY(-10px)\
        opacity 0\
                /* 0.5
        //margin-right radio-radius
        display flex
        justify-content space-evenly
        height radio-radius
        width collapsed-width
        &:before
        content ''
        position absolute
        //outline solid
        width 100%
        //height radio-radius
        top -1px
        border-top 2px solid colorPalette1
        z-index -1
        .radio-event
        trans(0.5s)
        opacity 0
        position relative
        height radio-radius
        width radio-radius
        margin-top - (radio-radius * 0.5)
        input
        position relative
        height radio-radius
        width radio-radius
        cursor pointer
        appearance none
        &:before
        trans(0.2s)
        content ''
        position absolute
        top radio-radius * 0.15
        left radio-radius * 0.15
        height radio-radius * 0.7
        width radio-radius * 0.7
        background colorWhite
        border-radius borderRadiusMax
        outline solid 3px colorPalette1
        &:hover
        &:before
        outline solid 4px colorPalette2
        input:checked
        &:before
        top radio-radius * 0.05
        left radio-radius * 0.05
        height radio-radius * 0.9
        width radio-radius * 0.9
        outline solid 4px colorPalette4

        label
        font-medium()
        position absolute
        top 22px

        .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
        content ''
        position absolute
        width 100%
        top -1px
        border-top 2px solid colorPalette1
        &:before
        content ''
        background linear-gradient(to right, transparent, colorWhite)
        width 40%
        height indicator-height
        position absolute
        bottom indicator-height
        right 0
        z-index 1
        user-events none
        pointer-events none
        &:after
        content ''
        background colorWhite
        width 600px
        height indicator-height
        position absolute
        bottom indicator-height
        left 100%
        z-index 10


        .event-fade-enter-active
        trans(0.3s)

        .event-fade-leave-active
        trans(0.3s)

        .event-fade-enter-from
        //transition all 1s
        transform translateY(10px)
        opacity 0
        .event-fade-leave-to
        transform translateY(-10px)
        opacity 0

         /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                  label\
            font-medium()\
            position absolute\
            top 22px\
                .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
        &:before\
        content ''\
        background linear-gradient(to right, transparent, colorWhite)\
        width 40%\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        right 0\
        z-index 1\
        user-events none\
        pointer-events none\
        &:after\
        content ''\
        background colorWhite\
        width 600px\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        left 100%\
        z-index 10\
                        .event-fade-enter-active\
        trans(0.3s)\
                .event-fade-leave-active\
        trans(0.3s)\
                .event-fade-enter-from\
        //transition all 1s\
        transform translateY(10px)\
        opacity 0\
        .event-fade-leave-to\
        transform translateY(-10px)\
        opacity 0\
                /* 0.5
        //margin-right radio-radius
        display flex
        justify-content space-evenly
        height radio-radius
        width collapsed-width
        &:before
        content ''
        position absolute
        //outline solid
        width 100%
        //height radio-radius
        top -1px
        border-top 2px solid colorPalette1
        z-index -1
        .radio-event
        trans(0.5s)
        opacity 0
        position relative
        height radio-radius
        width radio-radius
        margin-top - (radio-radius * 0.5)
        input
        position relative
        height radio-radius
        width radio-radius
        cursor pointer
        appearance none
        &:before
        trans(0.2s)
        content ''
        position absolute
        top radio-radius * 0.15
        left radio-radius * 0.15
        height radio-radius * 0.7
        width radio-radius * 0.7
        background colorWhite
        border-radius borderRadiusMax
        outline solid 3px colorPalette1
        &:hover
        &:before
        outline solid 4px colorPalette2
        input:checked
        &:before
        top radio-radius * 0.05
        left radio-radius * 0.05
        height radio-radius * 0.9
        width radio-radius * 0.9
        outline solid 4px colorPalette4

        label
        font-medium()
        position absolute
        top 22px

        .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
        content ''
        position absolute
        width 100%
        top -1px
        border-top 2px solid colorPalette1
        &:before
        content ''
        background linear-gradient(to right, transparent, colorWhite)
        width 40%
        height indicator-height
        position absolute
        bottom indicator-height
        right 0
        z-index 1
        user-events none
        pointer-events none
        &:after
        content ''
        background colorWhite
        width 600px
        height indicator-height
        position absolute
        bottom indicator-height
        left 100%
        z-index 10


        .event-fade-enter-active
        trans(0.3s)

        .event-fade-leave-active
        trans(0.3s)

        .event-fade-enter-from
        //transition all 1s
        transform translateY(10px)
        opacity 0
        .event-fade-leave-to
        transform translateY(-10px)
        opacity 0

         /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                  label\
            font-medium()\
            position absolute\
            top 22px\
                .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
        &:before\
        content ''\
        background linear-gradient(to right, transparent, colorWhite)\
        width 40%\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        right 0\
        z-index 1\
        user-events none\
        pointer-events none\
        &:after\
        content ''\
        background colorWhite\
        width 600px\
        height indicator-height\
        position absolute\
        bottom indicator-height\
        left 100%\
        z-index 10\
                        .event-fade-enter-active\
        trans(0.3s)\
                .event-fade-leave-active\
        trans(0.3s)\
                .event-fade-enter-from\
        //transition all 1s\
        transform translateY(10px)\
        opacity 0\
        .event-fade-leave-to\
        transform translateY(-10px)\
        opacity 0\
                /* 0.5
        //margin-right radio-radius
        display flex
        justify-content space-evenly
        height radio-radius
        width collapsed-width
        &:before
        content ''
        position absolute
        //outline solid
        width 100%
        //height radio-radius
        top -1px
        border-top 2px solid colorPalette1
        z-index -1
        .radio-event
        trans(0.5s)
        opacity 0
        position relative
        height radio-radius
        width radio-radius
        margin-top - (radio-radius * 0.5)
        input
        position relative
        height radio-radius
        width radio-radius
        cursor pointer
        appearance none
        &:before
        trans(0.2s)
        content ''
        position absolute
        top radio-radius * 0.15
        left radio-radius * 0.15
        height radio-radius * 0.7
        width radio-radius * 0.7
        background colorWhite
        border-radius borderRadiusMax
        outline solid 3px colorPalette1
        &:hover
        &:before
        outline solid 4px colorPalette2
        input:checked
        &:before
        top radio-radius * 0.05
        left radio-radius * 0.05
        height radio-radius * 0.9
        width radio-radius * 0.9
        outline solid 4px colorPalette4

        label
        font-medium()
        position absolute
        top 22px

        .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
        content ''
        position absolute
        width 100%
        top -1px
        border-top 2px solid colorPalette1
        &:before
        content ''
        background linear-gradient(to right, transparent, colorWhite)
        width 40%
        height indicator-height
        position absolute
        bottom indicator-height
        right 0
        z-index 1
        user-events none
        pointer-events none
        &:after
        content ''
        background colorWhite
        width 600px
        height indicator-height
        position absolute
        bottom indicator-height
        left 100%
        z-index 10


        .event-fade-enter-active
        trans(0.3s)

        .event-fade-leave-active
        trans(0.3s)

        .event-fade-enter-from
        //transition all 1s
        transform translateY(10px)
        opacity 0
        .event-fade-leave-to
        transform translateY(-10px)
        opacity 0

        /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4
          label
          font-medium()
          position absolute
          top 22px
          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10
          .event-fade-enter-active
          trans(0.3s)
          .event-fade-leave-active
          trans(0.3s)
          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0
           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
          content ''
          position absolute
          //outline solid
          width 100%
          //height radio-radius
          top -1px
          border-top 2px solid colorPalette1
          z-index -1
          .radio-event
          trans(0.5s)
          opacity 0
          position relative
          height radio-radius
          width radio-radius
          margin-top - (radio-radius * 0.5)
          input
          position relative
          height radio-radius
          width radio-radius
          cursor pointer
          appearance none
          &:before
          trans(0.2s)
          content ''
          position absolute
          top radio-radius * 0.15
          left radio-radius * 0.15
          height radio-radius * 0.7
          width radio-radius * 0.7
          background colorWhite
          border-radius borderRadiusMax
          outline solid 3px colorPalette1
          &:hover
          &:before
          outline solid 4px colorPalette2
          input:checked
          &:before
          top radio-radius * 0.05
          left radio-radius * 0.05
          height radio-radius * 0.9
          width radio-radius * 0.9
          outline solid 4px colorPalette4

          label
          font-medium()
          position absolute
          top 22px

          .future
          position relative
          top indicator-height * 0.5
          height radio-radius
          width 1000px
          &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
          &:before
          content ''
          background linear-gradient(to right, transparent, colorWhite)
          width 40%
          height indicator-height
          position absolute
          bottom indicator-height
          right 0
          z-index 1
          user-events none
          pointer-events none
          &:after
          content ''
          background colorWhite
          width 600px
          height indicator-height
          position absolute
          bottom indicator-height
          left 100%
          z-index 10


          .event-fade-enter-active
          trans(0.3s)

          .event-fade-leave-active
          trans(0.3s)

          .event-fade-enter-from
          //transition all 1s
          transform translateY(10px)
          opacity 0
          .event-fade-leave-to
          transform translateY(-10px)
          opacity 0

           /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
                    label\
            font-medium()\
            position absolute\
            top 22px\
                    .future\
          position relative\
          top indicator-height * 0.5\
          height radio-radius\
          width 1000px\
          &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
          &:before\
          content ''\
          background linear-gradient(to right, transparent, colorWhite)\
          width 40%\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          right 0\
          z-index 1\
          user-events none\
          pointer-events none\
          &:after\
          content ''\
          background colorWhite\
          width 600px\
          height indicator-height\
          position absolute\
          bottom indicator-height\
          left 100%\
          z-index 10\
                              .event-fade-enter-active\
          trans(0.3s)\
                    .event-fade-leave-active\
          trans(0.3s)\
                    .event-fade-enter-from\
          //transition all 1s\
          transform translateY(10px)\
          opacity 0\
          .event-fade-leave-to\
          transform translateY(-10px)\
          opacity 0\
                    /* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

  /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4
    label
    font-medium()
    position absolute
    top 22px
    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10
    .event-fade-enter-active
    trans(0.3s)
    .event-fade-leave-active
    trans(0.3s)
    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0
     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

  /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4
    label
    font-medium()
    position absolute
    top 22px
    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10
    .event-fade-enter-active
    trans(0.3s)
    .event-fade-leave-active
    trans(0.3s)
    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0
     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
    //margin-right radio-radius
    display flex
    justify-content space-evenly
    height radio-radius
    width collapsed-width
    &:before
    content ''
    position absolute
    //outline solid
    width 100%
    //height radio-radius
    top -1px
    border-top 2px solid colorPalette1
    z-index -1
    .radio-event
    trans(0.5s)
    opacity 0
    position relative
    height radio-radius
    width radio-radius
    margin-top - (radio-radius * 0.5)
    input
    position relative
    height radio-radius
    width radio-radius
    cursor pointer
    appearance none
    &:before
    trans(0.2s)
    content ''
    position absolute
    top radio-radius * 0.15
    left radio-radius * 0.15
    height radio-radius * 0.7
    width radio-radius * 0.7
    background colorWhite
    border-radius borderRadiusMax
    outline solid 3px colorPalette1
    &:hover
    &:before
    outline solid 4px colorPalette2
    input:checked
    &:before
    top radio-radius * 0.05
    left radio-radius * 0.05
    height radio-radius * 0.9
    width radio-radius * 0.9
    outline solid 4px colorPalette4

    label
    font-medium()
    position absolute
    top 22px

    .future
    position relative
    top indicator-height * 0.5
    height radio-radius
    width 1000px
    &:before
    content ''
    position absolute
    width 100%
    top -1px
    border-top 2px solid colorPalette1
    &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
    &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


    .event-fade-enter-active
    trans(0.3s)

    .event-fade-leave-active
    trans(0.3s)

    .event-fade-enter-from
    //transition all 1s
    transform translateY(10px)
    opacity 0
    .event-fade-leave-to
    transform translateY(-10px)
    opacity 0

     /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
              label\
            font-medium()\
            position absolute\
            top 22px\
          .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
    &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
    &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
            .event-fade-enter-active\
    trans(0.3s)\
        .event-fade-leave-active\
    trans(0.3s)\
        .event-fade-enter-from\
    //transition all 1s\
    transform translateY(10px)\
    opacity 0\
    .event-fade-leave-to\
    transform translateY(-10px)\
    opacity 0\
        /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

  /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

  /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4
  label
  font-medium()
  position absolute
  top 22px
  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10
  .event-fade-enter-active
  trans(0.3s)
  .event-fade-leave-active
  trans(0.3s)
  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0
   /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
\
          label\
            font-medium()\
            position absolute\
            top 22px\
\
      .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
  &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
  &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
\
\
  .event-fade-enter-active\
  trans(0.3s)\
\
  .event-fade-leave-active\
  trans(0.3s)\
\
  .event-fade-enter-from\
  //transition all 1s\
  transform translateY(10px)\
  opacity 0\
  .event-fade-leave-to\
  transform translateY(-10px)\
  opacity 0\
\
  /* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

   /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
\
          label\
            font-medium()\
            position absolute\
            top 22px\
\
      .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
  &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
  &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
\
\
  .event-fade-enter-active\
  trans(0.3s)\
\
  .event-fade-leave-active\
  trans(0.3s)\
\
  .event-fade-enter-from\
  //transition all 1s\
  transform translateY(10px)\
  opacity 0\
  .event-fade-leave-to\
  transform translateY(-10px)\
  opacity 0\
\
  /* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
          //margin-right radio-radius
          display flex
          justify-content space-evenly
          height radio-radius
          width collapsed-width
          &:before
            content ''
            position absolute
            //outline solid
            width 100%
            //height radio-radius
            top -1px
            border-top 2px solid colorPalette1
            z-index -1
          .radio-event
            trans(0.5s)
            opacity 0
            position relative
            height radio-radius
            width radio-radius
            margin-top - (radio-radius * 0.5)
            input
              position relative
              height radio-radius
              width radio-radius
              cursor pointer
              appearance none
              &:before
                trans(0.2s)
                content ''
                position absolute
                top radio-radius * 0.15
                left radio-radius * 0.15
                height radio-radius * 0.7
                width radio-radius * 0.7
                background colorWhite
                border-radius borderRadiusMax
                outline solid 3px colorPalette1
              &:hover
                &:before
                  outline solid 4px colorPalette2
            input:checked
              &:before
                top radio-radius * 0.05
                left radio-radius * 0.05
                height radio-radius * 0.9
                width radio-radius * 0.9
                outline solid 4px colorPalette4

          label
            font-medium()
            position absolute
            top 22px

      .future
        position relative
        top indicator-height * 0.5
        height radio-radius
        width 1000px
        &:before
          content ''
          position absolute
          width 100%
          top -1px
          border-top 2px solid colorPalette1
  &:before
    content ''
    background linear-gradient(to right, transparent, colorWhite)
    width 40%
    height indicator-height
    position absolute
    bottom indicator-height
    right 0
    z-index 1
    user-events none
    pointer-events none
  &:after
    content ''
    background colorWhite
    width 600px
    height indicator-height
    position absolute
    bottom indicator-height
    left 100%
    z-index 10


.event-fade-enter-active
  trans(0.3s)

.event-fade-leave-active
  trans(0.3s)

.event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
.event-fade-leave-to
  transform translateY(-10px)
  opacity 0

/* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4
  label
  font-medium()
  position absolute
  top 22px
  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10
  .event-fade-enter-active
  trans(0.3s)
  .event-fade-leave-active
  trans(0.3s)
  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0
   /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
\
          label\
            font-medium()\
            position absolute\
            top 22px\
\
      .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
  &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
  &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
\
\
  .event-fade-enter-active\
  trans(0.3s)\
\
  .event-fade-leave-active\
  trans(0.3s)\
\
  .event-fade-enter-from\
  //transition all 1s\
  transform translateY(10px)\
  opacity 0\
  .event-fade-leave-to\
  transform translateY(-10px)\
  opacity 0\
\
  /* 0.5
  //margin-right radio-radius
  display flex
  justify-content space-evenly
  height radio-radius
  width collapsed-width
  &:before
  content ''
  position absolute
  //outline solid
  width 100%
  //height radio-radius
  top -1px
  border-top 2px solid colorPalette1
  z-index -1
  .radio-event
  trans(0.5s)
  opacity 0
  position relative
  height radio-radius
  width radio-radius
  margin-top - (radio-radius * 0.5)
  input
  position relative
  height radio-radius
  width radio-radius
  cursor pointer
  appearance none
  &:before
  trans(0.2s)
  content ''
  position absolute
  top radio-radius * 0.15
  left radio-radius * 0.15
  height radio-radius * 0.7
  width radio-radius * 0.7
  background colorWhite
  border-radius borderRadiusMax
  outline solid 3px colorPalette1
  &:hover
  &:before
  outline solid 4px colorPalette2
  input:checked
  &:before
  top radio-radius * 0.05
  left radio-radius * 0.05
  height radio-radius * 0.9
  width radio-radius * 0.9
  outline solid 4px colorPalette4

  label
  font-medium()
  position absolute
  top 22px

  .future
  position relative
  top indicator-height * 0.5
  height radio-radius
  width 1000px
  &:before
  content ''
  position absolute
  width 100%
  top -1px
  border-top 2px solid colorPalette1
  &:before
  content ''
  background linear-gradient(to right, transparent, colorWhite)
  width 40%
  height indicator-height
  position absolute
  bottom indicator-height
  right 0
  z-index 1
  user-events none
  pointer-events none
  &:after
  content ''
  background colorWhite
  width 600px
  height indicator-height
  position absolute
  bottom indicator-height
  left 100%
  z-index 10


  .event-fade-enter-active
  trans(0.3s)

  .event-fade-leave-active
  trans(0.3s)

  .event-fade-enter-from
  //transition all 1s
  transform translateY(10px)
  opacity 0
  .event-fade-leave-to
  transform translateY(-10px)
  opacity 0

   /* 0.5\
          //margin-right radio-radius\
          display flex\
          justify-content space-evenly\
          height radio-radius\
          width collapsed-width\
          &:before\
            content ''\
            position absolute\
            //outline solid\
            width 100%\
            //height radio-radius\
            top -1px\
            border-top 2px solid colorPalette1\
            z-index -1\
          .radio-event\
            trans(0.5s)\
            opacity 0\
            position relative\
            height radio-radius\
            width radio-radius\
            margin-top - (radio-radius * 0.5)\
            input\
              position relative\
              height radio-radius\
              width radio-radius\
              cursor pointer\
              appearance none\
              &:before\
                trans(0.2s)\
                content ''\
                position absolute\
                top radio-radius * 0.15\
                left radio-radius * 0.15\
                height radio-radius * 0.7\
                width radio-radius * 0.7\
                background colorWhite\
                border-radius borderRadiusMax\
                outline solid 3px colorPalette1\
              &:hover\
                &:before\
                  outline solid 4px colorPalette2\
            input:checked\
              &:before\
                top radio-radius * 0.05\
                left radio-radius * 0.05\
                height radio-radius * 0.9\
                width radio-radius * 0.9\
                outline solid 4px colorPalette4\
\
          label\
            font-medium()\
            position absolute\
            top 22px\
\
      .future\
        position relative\
        top indicator-height * 0.5\
        height radio-radius\
        width 1000px\
        &:before\
          content ''\
          position absolute\
          width 100%\
          top -1px\
          border-top 2px solid colorPalette1\
  &:before\
    content ''\
    background linear-gradient(to right, transparent, colorWhite)\
    width 40%\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    right 0\
    z-index 1\
    user-events none\
    pointer-events none\
  &:after\
    content ''\
    background colorWhite\
    width 600px\
    height indicator-height\
    position absolute\
    bottom indicator-height\
    left 100%\
    z-index 10\
\
\
  .event-fade-enter-active\
  trans(0.3s)\
\
  .event-fade-leave-active\
  trans(0.3s)\
\
  .event-fade-enter-from\
  //transition all 1s\
  transform translateY(10px)\
  opacity 0\
  .event-fade-leave-to\
  transform translateY(-10px)\
  opacity 0\
\
  </style>

<template>
  <div class="root-timeline" :key="loading" v-if="loading==false">
    <transition name="event-fade" mode="out-in">
      <div class="event" :key="currentEventIdx">
        <img :src="`/${events[currentEventIdx].media.key}`">
        <span class="title">{{ events[currentEventIdx].title }}</span>
        <span class="info">{{ events[currentEventIdx].prompt }}</span>
        <span class="description">{{ events[currentEventIdx].description }}</span>
      </div>
    </transition>
    <div class="current">{{ months[currentMonthIdx] }}</div>
    <div class="timeline-container" ref="timelineScroll" @wheel="handleScroll">
      <div class="timeline" ref="timeline">
        <div class="month" ref="month" v-for="month in Array.from({length: 12}, (_,index)=>index)">
          <div
            class="month-events-flex"
            ref="monthEventFlex"
          >
            <div
              class="radio-event"
              ref="radioEvent"
              v-for="(event, idx) in selectEventsByMonth(month)"
            >
              <input
                type="radio"
                name="eventSelect"
                ref="eventSelect"
                :checked="event.id==currentEventIdx"
                @input="setEvent(event.id)"
              >
              <label>{{ getShortDate(new Date(event.date)) }}</label>
            </div>
          </div>
          <input
            type="radio"
            ref="monthSelect"
            class="radio-month"
            name="monthSelect"
            :checked="month==currentMonthIdx"
            @click="monthSelect(month)"
          >
          <label for="monthSelect">{{ months[month] }}</label>
        </div>
        <div class="future" />
      </div>
      <div class="gradient" />
    </div>
  </div>
</template>

<script>
import CircleLoading from "~/App.vue";


export default {
  emits: ['delete', 'pin', 'upnin', 'edit'],


  components: {CircleLoading},

  props: {
    //events: [],
  },

  data() {
    return {
      events: [],
      months: [
        "АВГУСТ",
        "СЕНТЯБРЬ",
        "ОКТЯБРЬ",
        "НОЯБРЬ",
        "ДЕКАБРЬ",
        "ЯНВАРЬ",
        "ФЕВРАЛЬ",
        "МАРТ",
        "АПРЕЛЬ",
        "МАЙ",
        "ИЮНЬ",
        "ИЮЛЬ",
      ],
      monthsGenitive: [
        "АВГУСТА",
        "СЕНТЯБРЯ",
        "ОКТЯБРЯ",
        "НОЯБРЯ",
        "ДЕКАБРЯ",
        "ЯНВАРЯ",
        "ФЕВРАЛЯ",
        "МАРТА",
        "АПРЕЛЯ",
        "МАЯ",
        "ИЮНЯ",
        "ИЮЛЯ",
      ],
      currentMonthIdx: 0,
      currentEventIdx: 0,
        // events: [{
        //   id: 0,
        //   title: "ШКОЛА ПЕРЕД ШКОЛОЙ",
        //   info: "300+ базовичков",
        //   imgSrc: "/static/images/shmb.jpg",
        //   description: "Лес кайф костёр палатки +вайб, только людей поменьше",
        //   date: new Date('16 Aug 2024 00:00:00 GMT')
        // },
        // {
        //   id: 1,
        //   title: "ШКОЛА МОЛОДОГО БАУМАНЦА",
        //   info: "1719 первашей",
        //   imgSrc: "/static/images/shmb.jpg",
        //   description: "Лес кайф костёр палатки +вайб. Техподы с лопатами и колунами, штабисты с тушёнкой, кураторы уплетают втихаря доширак, медийщики нервно курят за шатром.",
        //   date: new Date('23 Aug 2024 00:00:00 GMT')
        // },
        // {
        //   id: 2,
        //   title: "СТАРОСТАТ",
        //   info: "Выезд для старост окда",
        //   imgSrc: "/static/images/starostat.jpg",
        //   description: "Старосты старосты старосты",
        //   date: new Date('29 Sept 2024')
        // },
        // {
        //   id: 3,
        //   title: "МИСТЕР МУСКУЛ",
        //   info: "Самые горячие техподы университета",
        //   imgSrc: "/static/images/missPlaceholder.jpg",
        //   description: "Мужественные мужчины спорят кто самый мужественный мужчина",
        //   date: new Date('24 Apr 2024 00:00:00 GMT')
        // },
        // ],
      autoScrolling: false,
      loading: true,
    }
  },

  computed: {
  },

  created() {
    this.getEvents().then(function() {})
    // console.log(this.events)
  },

  mounted() {
    // this.getEvents()
  },

  methods: {
    async getEvents() {
      this.loading = true
      const { data, ok, status } = await this.$api.getEvents()

      if (!ok) {
        this.$popups.error(`Ошибка ${status}`, 'Не удалось получить события')
      }

      this.events = data.events
      for (const eventIdx in this.events) {
        this.events[eventIdx].id = eventIdx
      }

      this.loading = false
    },
    getShortDate(date) {
      return date.getDate() + " " + this.monthsGenitive[(date.getMonth() + 5) % 12]
    },
    getMonthOffset(month) {
      return month * (200 + 14)
    },
    selectEventsByMonth(month) {
      if (this.events) {
        return this.events.filter((event) => ((new Date(event.date)).getMonth() + 5) % 12==month)
      }
      else {
        return []
      }
    },
    expandMonth(month) {
      this.$refs.monthEventFlex[month].style.width = "700px"
      let monthEvents = this.selectEventsByMonth(month)
      if (monthEvents.length > 0) {
        for (const eventIdx in monthEvents) {
          this.$refs.radioEvent[monthEvents[eventIdx].id].style.opacity = "1"
        }
      }
    },
    contractMonth(month) {
      this.$refs.monthEventFlex[month].style.width = "200px"
      let monthEvents = this.selectEventsByMonth(month)
      if (monthEvents.length > 0) {
        for (const eventIdx in monthEvents) {
          this.$refs.radioEvent[monthEvents[eventIdx].id].style.opacity = "0"
        }
      }

    },
    scrollToMonth(month) {
      var target = this.getMonthOffset(month)
      this.$refs.timelineScroll.scrollTo({left: target, behavior: 'smooth'})
      // return new Promise((resolve, reject) => {
      //   const failed = setTimeout(() => {
      //     reject();
      //   }, 2000);

      //   const scrollWaiter = () => {
      //     if (this.$refs.timelineScroll.scrollLeft === target) {
      //       this.$refs.timelineScroll.removeEventListener("scroll", scrollWaiter);
      //       clearTimeout(failed);
      //       resolve();
      //     }
      //   };
      //   if (this.$refs.timelineScroll.scrollLeft === target) {
      //     clearTimeout(failed);
      //     resolve();
      //   } else {
      //     this.$refs.timelineScroll.addEventListener("scroll", scrollWaiter);
      //     //this.$refs.timelineScroll.getBoundingClientRect();
      //   }
      // })
    },
    monthSelect(month) {
      //this.autoScrolling = true
      this.contractMonth(this.currentMonthIdx)
      // await new Promise(r => setTimeout(r, 800));
      this.currentMonthIdx = month
      //this.$refs.timelineScroll.scrollTo({left: month*(200+14), behavior: 'smooth'})
      this.scrollToMonth(month)//.then(() => {
      this.expandMonth(this.currentMonthIdx)
      if (this.selectEventsByMonth(month).length != 0) {
        this.$refs.eventSelect[this.selectEventsByMonth(month)[0].id].checked = true
        this.setEvent(this.selectEventsByMonth(month)[0].id)
      }
      //})
      //while (this.$refs.timelineScroll.offsetLeft != month*(200+14)) {}
      //this.$refs.timelineScroll.scrollTo({left: this.$refs.month[month].offsetLeft+28, behavior: 'smooth'})
    },
    handleScroll(event) {
      event.preventDefault()
      this.$refs.timelineScroll.scrollLeft += event.deltaY*0.5
      // console.log(event.wheelDelta)
      var month = this.currentMonthIdx
      var currentMonthOffset = this.getMonthOffset(this.currentMonthIdx)
      if (this.$refs.timelineScroll.scrollLeft > currentMonthOffset + 200)
        month = this.currentMonthIdx + 1
      if (this.$refs.timelineScroll.scrollLeft < currentMonthOffset - 0)
        month = this.currentMonthIdx - 1
      // console.log(month)
      if (month < 0) month = 0
      if (month > 11) month = 11
      if (this.currentMonthIdx != month) {
        this.monthSelect(month)
        this.$refs.monthSelect[this.currentMonthIdx].checked = true
      }
    },
    setEvent(eventIdx) {
      this.currentEventIdx = eventIdx
      // console.log("event set: " + eventIdx)
    },
  }
};
</script>
