<template>
  <!-- ======= Cta Section ======= -->
  <section id="cta" class="cta">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3>Get a Free Estimate Today!</h3>
          <p>
            Ready to transform your space with new flooring? Let the experts at
            Limak Floor Service help you choose the perfect option for your home
            or office. Email or give us a call to schedule a free estimate
            today. Our team will work with you to find the best solution for
            your needs and budget. Don't wait, take the first step to beautiful
            new floors with Limak Floor Service!
          </p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
          <a
            class="cta-btn align-middle"
            :href="`mailto:${corporateData.email}?subject=${corporateData.supportEmailData.supportEmailSubject}&body=${corporateData.supportEmailData.supportEmailBody}`"
            >Email us</a
          >
        </div>
      </div>
    </div>
  </section>
  <!-- End Cta Section -->
</template>

<script>
import { CORPORATE_DATA } from "../../constants";

export default {
  data() {
    return {
      corporateData: CORPORATE_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Cta
--------------------------------------------------------------*/
.cta {
  background: $logoBlue;
  padding: 80px 0;
}

.cta h3 {
  color: $mainWhite;
  font-size: 28px;
  font-weight: 700;
}

.cta p {
  color: $mainWhite;
}

.cta .cta-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 2px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid $mainWhite;
  color: $mainWhite;
  border-radius: 4px;
}

.cta .cta-btn:hover {
  background: $mainWhite;
  color: #5cb874;
}

@media (max-width: 1024px) {
  .cta {
    background-attachment: scroll;
  }
}

@media (min-width: 769px) {
  .cta .cta-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>