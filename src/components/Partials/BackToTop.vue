<template>
  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script>
export default {
  mounted() {
    this.backToTop();
  },
  methods: {
    backToTop() {
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };

      /**
       * Back to top button
       */
      let backtotop = document.querySelector(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: $logoGreen;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: $logoGreenHover;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

</style>