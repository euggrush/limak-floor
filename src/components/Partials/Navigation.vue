<template>
  <section class="p-0">
    <!-- ======= Top Bar ======= -->
    <section id="topbar" class="d-flex align-items-center">
      <div
        class="
          container
          d-flex
          justify-content-center justify-content-md-between
        "
      >
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope-fill"></i
          ><a
            :href="`mailto:${corporateData.email}?subject=${corporateData.supportEmailData.supportEmailSubject}&body=${corporateData.supportEmailData.supportEmailBody}`"
            >Email us</a
          >
          <i class="bi bi-phone-fill phone-icon"></i>
          <a :href="`tel:${corporateData.phoneNumbers.roman}`">Call us</a>
        </div>
        <div class="social-links d-none d-md-block">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a :href="corporateData.facebookLink" class="facebook"
            ><i class="bi bi-facebook"></i
          ></a>
          <a :href="corporateData.instagrammLink" class="instagram"
            ><i class="bi bi-instagram"></i
          ></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <a href="index.html" class="logo me-auto"
          ><img
            src="../../assets/img/logo.png"
            class="limak-logo me-auto"
            alt="logo"
            width="100"
        /></a>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li>
              <a class="nav-link scrollto" href="#portfolio">Portfolio</a>
            </li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <li>
              <a class="getstarted scrollto" href="#about">Get Started</a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
  </section>
</template>

<script>
import { CORPORATE_DATA } from "../../constants";
export default {
  data() {
    return {
      corporateData: CORPORATE_DATA,
    };
  },
  mounted() {
    this.getMenuWork();
  },
  methods: {
    getMenuWork() {
      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
          if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
          } else {
            selectEl.addEventListener(type, listener);
          }
        }
      };

      /**
       * Easy on scroll event listener
       */
      const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
      };

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select("#navbar .scrollto", true);
      const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        });
      };
      window.addEventListener("load", navbarlinksActive);
      onscroll(document, navbarlinksActive);

      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select("#header");
        let offset = header.offsetHeight;

        if (!header.classList.contains("header-scrolled")) {
          offset -= 16;
        }

        let elementPos = select(el).offsetTop;
        window.scrollTo({
          top: elementPos - offset,
          behavior: "smooth",
        });
      };

      /**
       * Header fixed top on scroll
       */
      let selectHeader = select("#header");
      if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        // let nextElement = selectHeader.nextElementSibling
        const headerFixed = () => {
          if (headerOffset - window.scrollY <= 0) {
            selectHeader.classList.add("fixed-top");
            // nextElement.classList.add('scrolled-offset')
          } else {
            selectHeader.classList.remove("fixed-top");
            // nextElement.classList.remove('scrolled-offset')
          }
        };
        window.addEventListener("load", headerFixed);
        onscroll(document, headerFixed);
      }

      /**
       * Mobile nav toggle
       */
      // eslint-disable-next-line no-unused-vars
      on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
      });

      /**
       * Mobile nav dropdowns activate
       */
      on(
        "click",
        ".navbar .dropdown > a",
        function (e) {
          if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
          }
        },
        true
      );

      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on(
        "click",
        ".scrollto",
        function (e) {
          if (select(this.hash)) {
            e.preventDefault();

            let navbar = select("#navbar");
            if (navbar.classList.contains("navbar-mobile")) {
              navbar.classList.remove("navbar-mobile");
              let navbarToggle = select(".mobile-nav-toggle");
              navbarToggle.classList.toggle("bi-list");
              navbarToggle.classList.toggle("bi-x");
            }
            scrollto(this.hash);
          }
        },
        true
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.limak-logo {
  width: 120px;
  height: 50px;
  object-fit: cover;
  @include media-breakpoint-up(md) {
    width: 150px;
  }
  @include media-breakpoint-up(lg) {
    width: 170px;
  }
}

/*--------------------------------------------------------------
# Top Bar
--------------------------------------------------------------*/
#topbar {
  background: #fbfbfb;
  font-size: 15px;
  height: 40px;
  padding: 0;
}

#topbar .contact-info a {
  line-height: 0;
  color: #444444;
  transition: 0.3s;
}

#topbar .contact-info a:hover {
  color: $logoGreen;
}

#topbar .contact-info i {
  color: $logoGreen;
  line-height: 0;
  margin-right: 5px;
}

#topbar .contact-info .phone-icon {
  margin-left: 15px;
}

#topbar .social-links a {
  color: #6f6f6f;
  padding: 4px 12px;
  display: inline-block;
  line-height: 1px;
  transition: 0.3s;
}

#topbar .social-links a:hover {
  color: $logoGreen;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background: $logoBlue;
  transition: all 0.5s;
  z-index: 997;
  height: 70px;
}

#header.header-scrolled {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#header .logo a {
  color: $logoGreen;
}

#header .logo img {
  max-height: 40px;
}

.scrolled-offset {
  margin-top: 70px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  color: $mainWhite;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: $logoGreen;
}

.navbar .getstarted,
.navbar .getstarted:focus {
  color: $logoGreen;
  padding: 8px 25px;
  margin-left: 30px;
  border-radius: 4px;
  border: 2px solid $logoGreen;
  transition: 0.3s;
  font-size: 14px;
}

.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
  background: $logoGreen;
  color: #fff;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  text-transform: none;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: $logoGreen;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation
*/
.mobile-nav-toggle {
  color: #222222;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(9, 9, 9, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #222222;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
  color: $logoGreen;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
  color: $logoGreen;
}

.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}
</style>