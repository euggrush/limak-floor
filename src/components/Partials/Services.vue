<template>
  <!-- ======= Featured Services Section ======= -->
  <section id="featured-services" class="featured-services section-bg">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-lg-4 col-md-6">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="title">Quality Materials</h4>
            <p class="description">
              Rest assured we use only the best materials for your project. You
              can stand on the premium materials we use for your floors for
              years to come, that's a guarantee.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-hand-thumbs-up-fill"></i></div>
            <h4 class="title">Professional Service</h4>
            <p class="description">
              We take every project seriously and treat our customers with
              respect and professionalism. Limak Floor Service is known for our
              quick work and professional customer service.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-briefcase-fill"></i></div>
            <h4 class="title">Expert Craftsmanship</h4>
            <p class="description">
              We deliver on time and to perfection, maintaining the highest
              quality, assessed against our exacting standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Featured Services Section -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Featured Services
--------------------------------------------------------------*/
.featured-services {
  padding: 20px 0;
}

.featured-services .icon-box {
  padding: 20px;
}

.featured-services .icon-box-bg {
  background-image: linear-gradient(
    0deg,
    #222222 0%,
    #2f2f2f 50%,
    #222222 100%
  );
}

.featured-services .icon {
  margin-bottom: 15px;
}

.featured-services .icon i {
  color: $logoBlue;
  font-size: 42px;
}

.featured-services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.featured-services .title a {
  color: #222222;
  transition: 0.3s;
}

.featured-services .icon-box:hover .title a {
  color: $logoBlue;
}

.featured-services .description {
  line-height: 24px;
  font-size: 14px;
}
</style>