<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <h3>{{ corpData.companyTitle }}</h3>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a :href="corpData.facebookLink" class="facebook"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a :href="corpData.instagrammLink" class="instagram"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy; Copyright
        <strong
          ><span>{{ corpData.copyrightTitle }}</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="#">{{ corpData.copyrightTitle }}</a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
import { CORPORATE_DATA } from "../../constants";
export default {
  data() {
    return {
      corpData: CORPORATE_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #090909;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: $logoGreen;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: $logoGreenHover;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
}

#footer .credits {
  font-size: 13px;
}
</style>