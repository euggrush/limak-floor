<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contact Limak Floor Service</h2>
        <p>
          {{
            `At Limak Floor Service, we're dedicated to providing the highest level
          of customer service. If you have any questions or need assistance with
          your flooring needs, please don't hesitate to reach out to us. You can
          call us at ${corpData.phoneNumbers.roman} or email us at ${corpData.email}, 
          and one of our team members will get
          back to you as soon as possible. We're here to help you create the
          perfect floors for your home or office.`
          }}
        </p>
      </div>

      <div class="row">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <a :href="corpData.locationPinShort" target="_blank">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{{ corpData.address }}</p>
              </a>
            </div>

            <div class="email">
              <a
                :href="`mailto:${corpData.email}?subject=${corpData.supportEmailData.supportEmailSubject}&body=${corpData.supportEmailData.supportEmailBody}`"
              >
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{{ corpData.email }}</p>
              </a>
            </div>

            <div class="phone">
              <a :href="`tel:${corpData.phoneNumbers.roman}`">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{{ corpData.phoneNumbers.roman }}</p>
              </a>
            </div>

            <iframe
              :src="corpData.locationPin"
              frameborder="0"
              style="border: 0; width: 100%; height: 290px"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form
            role="form"
            class="php-email-form"
            @submit.prevent="sendRequest"
          >
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  required
                  v-model="customerName"
                />
              </div>
              <div class="form-group col-md-6 mt-3 mt-md-0">
                <label for="name">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  required
                  v-model="customerEmail"
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <label for="name">Subject</label>
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                required
                v-model="customerSubject"
              />
            </div>
            <div class="form-group mt-3">
              <label for="name">Message</label>
              <textarea
                class="form-control"
                name="message"
                rows="10"
                required
                v-model="customerMsg"
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<script>
import { CORPORATE_DATA } from "../../constants";
export default {
  data() {
    return {
      corpData: CORPORATE_DATA,
      customerName: ``,
      customerEmail: ``,
      customerSubject: ``,
      customerMsg: ``,
      isMsgLoading: false,
      isMsgSent: false,
      isMsgError: false,
    };
  },
  methods: {
    sendRequest() {
      this.$store
        .dispatch(`SEND_FORM_REQUEST`, {
          email: this.customerEmail,
          name: this.customerName,
          message: this.customerMsg,
        })
        .then((result) => {
          console.log(result);
          this.customerEmail = ``;
          this.customerName = ``;
          this.customerSubject = ``;
          this.customerMsg = ``;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  border-top: 3px solid $logoBlue;
  border-bottom: 3px solid $logoBlue;
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .info i {
  font-size: 20px;
  color: $logoBlue;
  float: left;
  width: 44px;
  height: 44px;
  background: #eaf6ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #222222;
}

.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555555;
}

.contact .info .social-links {
  padding-left: 60px;
}

.contact .info .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  margin-right: 10px;
}

.contact .info .social-links a:hover {
  background: $logoBlue;
  color: #fff;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: $logoBlue;
  color: #fff;
}

.contact .php-email-form {
  width: 100%;
  border-top: 3px solid $logoBlue;
  border-bottom: 3px solid $logoBlue;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 4px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: $logoBlue;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type="submit"] {
  background: $logoBlue;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type="submit"]:hover {
  background: $logoBlueHover;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>