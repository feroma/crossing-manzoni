import _ from "lodash"

const OFFSET = 350
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
export default {
  data () {
    return {
      scrollPosition: 0,
      lmS: null
    }
  },
  watch: {
    $route () {
      console.log("route changed: ", this.$route)
      this.lmS.update()
    }
  },
  mounted () {

    this.$nextTick(
      function () {

        this.lmS = new this.locomotiveScroll({
          el: document.querySelector("#js-scroll"),
          smooth: true, /* if false disable overflow: hidden on html, body */
          getSpeed: true,
          getDirection: true,
          reloadOnContextChange:true,
          inertia: 0.5,
        })
        //console.log("mounted");

        this.lmS.on("scroll", () => {
            _.throttle(this.onLmsScroll, 150)
          }
        )
        window.addEventListener(
          "resize",
          _.debounce(this.onLmsResize.bind(this), 100)
        )
        // this.$nextTick(() => {
        //   this.animate();
        // })
        setTimeout(() => {
          console.log("update")
          this.lmS.update()

        }, 3000)



      }.bind(this)
    )


  },
  destroyed () {
    console.log("destroy")
    this.lmS.destroy()
    window.removeEventListener("resize", this.onLmsResize)
  },

  methods: {
    animate () {
      const this_lms = this.lmS

      ScrollTrigger.scrollerProxy("#js-scroll", {
        scrollTop (value) {
          return arguments.length ?
            this_lms.scrollTo(value, {duration: 0, disableLerp: true}) :
            this_lms.scroll.instance.scroll.y
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect () {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#js-scroll").style.transform ? "transform" : "fixed"
      })

      ScrollTrigger.addEventListener("refresh", () => this_lms.update())
      //ScrollTrigger.defaults({scroller: "#js-scroll"})
      let h2 = gsap.utils.toArray("h2");
     // let h1 = gsap.utils.toArray("h1");
      let p = gsap.utils.toArray("p");
      let headings = [ ...h2, ...p];


      console.log(headings)
      //gsap.set('.head-anim', {opacity: 0})
      headings.forEach((heading, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 75%",
            end: 'top 26%',
            //markers: true,
            toggleActions: "restart reverse restart reverse",
            scrub: true,
            scroller: "#js-scroll"
          }
        })
        tl.fromTo(heading,{opacity: 0}, {  opacity: 1, duration:4})
      })


      // let headings = gsap.utils.toArray("h2");
      // gsap.set(headings, {opacity: 0})
      //
      //
      // headings.forEach((heading, i) => {
      //     console.log(heading)
      //     let tl = gsap.timeline({
      //       scrollTrigger: {
      //         trigger: 'body',
      //         start: "top center",
      //         end:'bottom 10%',
      //         markers: true,
      //         scrub: true
      //       }
      //     })
      //     tl.to(heading, {  opacity: 1})
      // });
      // headings.forEach((heading, i) => {
      //   // let anim = gsap.timeline({
      //   //   scrollTrigger: {
      //   //     trigger: '#catalog',
      //   //     // markers: true,
      //   //     start: "top bottom"
      //   //     // end: "bottom top",
      //   //     // toggleActions: "restart reverse restart reverse"
      //   //   }
      //   // })
      //
      //   let tl = gsap.timeline({
      //     scrollTrigger: {
      //       // trigger: heading,
      //       start: "top center",
      //       end:'bottom 10%',
      //       markers: true,
      //       scrub: true
      //     }
      //   })
      //
      //  //  tl.to(heading, {  opacity: 1})
      //   //   .to(heading, { yPercent: -200, opacity: 0}, "+=1")
      // });
    },
    onLmsScroll (obj) {
      this.scrollPosition = obj["scroll"]["y"]
      // console.log("scrollPosition + na", this.scrollPosition);
    },
    onLmsResize () {
      this.lmS.update()
    }
  }
}
