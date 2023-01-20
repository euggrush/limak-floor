<template>
  <!-- ======= Services Section ======= -->
  <section id="services" class="services">
    <div class="container">
      <div class="section-title">
        <h2>Flooring Services we provide</h2>
        <p>
          The flooring you choose to lay can have an instant impact on the
          aesthetic and feel of your home, it is important to choose the right
          material that will look great and live up to the demand of your
          lifestyle. Our team of experts can help guide you through finding the
          perfect flooring that will not only look great but will hold its
          quality for years to come. From hardwood floors, tiling, carpeting and
          so much more, we ensure you will fall in love with your floors once
          again.
        </p>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="icon-box iconbox-blue item-one">
            <h4><a href="#">Wire Brushed Floors</a></h4>
            <p>
              Solid wood flooring, indeed, has a classic, appealing appearance
              that’s truly one-of-a-kind. While quality hardwood flooring has
              always been in high demand, nowadays, a new style has emerged, and
              it’s quickly become a favorite style!
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="icon-box iconbox-orange item-two">
            <h4><a href="#">Red Oak Hardwood Floors</a></h4>
            <p>
              Red Oak hardwood flooring is one of the most common hardwood
              flooring offerings. Its traditional style looks great with a wide
              variety of home decor. Oak flooring has also gained a new appeal,
              with gray stain options. Distinctive look the wide grain pattern
              is unique and natural.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div class="icon-box iconbox-pink item-three">
            <h4><a href="#">Maple Hardwood Floors</a></h4>
            <p>
              Maple hardwood flooring is a solid hardwood or engineered wood
              floor milled from maple trees. Maple hardwood flooring has a
              distinctive look because its color tends to be creamy white,
              though sometimes it can darken to a light brown. Maple’s clear
              grain is very subtle, almost unnoticeable, without the sharp
              contrasts found in other woods, such as oak.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="icon-box iconbox-yellow item-four">
            <h4><a href="#">Herringbone Floors</a></h4>
            <p>
              Herringbone flooring is anything but boring. It has a flair and
              makes a statement from the moment you walk in the door which is
              perhaps what you are looking for! It’s a unique design element
              that you don’t see every day so it looks custom and high-end while
              giving your home lots of warmth and character.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="icon-box iconbox-red item-five">
            <h4><a href="#">Laminate Floors</a></h4>
            <p>
              If you’re looking for a fake wood floor, laminate flooring is a
              superb option to choose. It gives you all the beauty and elegance
              of a wooden floor at a more affordable cost. In fact, the cost of
              laminate flooring tends to be lower than actual hardwood floors,
              and you can choose from lots of varieties to get the wood effect
              you like the most, such as a cherry laminate floor or oak laminate
              flooring. It is reasonably durable, hygienic (several brands
              contain an antimicrobial resin), and relatively easy to maintain.
            </p>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div class="icon-box iconbox-teal item-six">
            <h4><a href="#">Vinyl Floors</a></h4>
            <p>
              Vinyl flooring is a popular choice for many homeowners who want to
              enjoy the look and feel of wood, stone, or tile at a fraction of
              the cost. Range of vinyl flooring is durable, easy-to-maintain
              that can be installed in any room in your home. Vinyl flooring is
              also a great choice for those with pets or kids as it’s easy to
              clean and stain-resistant. Slip-resistant and easy to clean, our
              lino flooring is perfect for any room and is most commonly used in
              bathrooms and kitchens. Durable, easy to look after and suitable
              for every room in the home, vinyl is the ideal easy to maintain
              flooring for your home or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Services Section -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  // background: #fff;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
}

.services .icon-box .icon i {
  font-size: 36px;
  transition: 0.5s;
  position: relative;
}

.services .icon-box .icon svg {
  position: absolute;
  top: 0;
  left: 0;
}

.services .icon-box .icon svg path {
  transition: 0.5s;
  fill: #f5f5f5;
}

.services .icon-box h4 {
  font-weight: 600;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .icon-box h4 a {
  // color: #222222;
  color: $mainWhite;
  transition: ease-in-out 0.3s;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  color: $mainWhite;
  margin-bottom: 0;
}

.services .icon-box:hover {
  border-color: #fff;
  box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
}

.services .iconbox-blue i {
  color: #47aeff;
}

.services .iconbox-blue:hover .icon i {
  color: #fff;
}

.services .iconbox-blue:hover .icon path {
  fill: #47aeff;
}

.services .iconbox-orange i {
  color: #ffa76e;
}

.services .iconbox-orange:hover .icon i {
  color: #fff;
}

.services .iconbox-orange:hover .icon path {
  fill: #ffa76e;
}

.services .iconbox-pink i {
  color: #e80368;
}

.services .iconbox-pink:hover .icon i {
  color: #fff;
}

.services .iconbox-pink:hover .icon path {
  fill: #e80368;
}

.services .iconbox-yellow i {
  color: #ffbb2c;
}

.services .iconbox-yellow:hover .icon i {
  color: #fff;
}

.services .iconbox-yellow:hover .icon path {
  fill: #ffbb2c;
}

.services .iconbox-red i {
  color: #ff5828;
}

.services .iconbox-red:hover .icon i {
  color: #fff;
}

.services .iconbox-red:hover .icon path {
  fill: #ff5828;
}

.services .iconbox-teal i {
  color: #11dbcf;
}

.services .iconbox-teal:hover .icon i {
  color: #fff;
}

.services .iconbox-teal:hover .icon path {
  fill: #11dbcf;
}

.item-one,
.item-two,
.item-three,
.item-four,
.item-five,
.item-six {
  background-position: center;
  background-repeat: no-repeat;
}

.item-one {
  background-image: url("../../assets/img/services/wire-brushed-floors-min.png");
}

.item-two {
  background-image: url("../../assets/img/services/red-oak-hardwood-floors-min.png");
}

.item-three {
  background-image: url("../../assets/img/services/maple-hardwood-floors-min.jpg");
}

.item-four {
  background-image: url("../../assets/img/services/herringbone-floors-min.jpg");
}

.item-five {
  background-image: url("../../assets/img/services/laminate-floors-min.jpg");
}

.item-six {
  background-image: url("../../assets/img/services/vinyl-floors-min.jpg");
}
</style>