<template>
  <div class="about">
    <AppHeader />
    <AppNav />
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-12 col-12 mx-auto">
          <div class="message my-5">
            <div class="overlay-message">
              <div class="overlay-content p-4">
                <div class="col-lg-6 col-md-5 col-9 mx-auto">
                  <div class="text-content fs-6">
                    Alhamdulillah, Madresatul Banaat Almuslimaat, the first Islamic high school in Toronto, dedicated to
                    providing
                    both the Ontario curriculum and an Islamic education for girls only, was established in 1993.
                    It began with a vision…to organize an institution for the education of Muslim girls in an Islamic
                    environment.
                    Beginning with a small school with only 4 classrooms, we have expanded over the years to what is now a
                    full
                    facility school with two floors, offering education from JK-Grade 12.<br>
                    Alhamdulillah, we are serving a population of ~5, 000 Muslims in the immediate vicinity of the school
                    (Etobicoke). In addition to this, many of our students travel from our neighbouring cities such as
                    Mississauga, Brampton, Richmond Hill, Barrie and Woodbridge to attend our school. Our students come
                    from
                    a
                    diverse array of families and ethnic backgrounds. As a non-profit, charitable organization, we also
                    offer
                    education to orphans and children from single mothers, widows, or less fortunate parents, who are
                    helped
                    through our Zakaat fund. <br>
                    Our school facilities are also being used by other members of our community for programs such as
                    Arabic
                    language studies, which are held at our school on the weekends.
                  </div>
                </div>
                <div class="col-lg-5 col-md-7 col-9 mx-auto">
                  <img src="@/assets/fair.png" class="img-fluid rounded mx-auto d-block">
                </div>

              </div>

              <br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'; // Update the import paths as necessary
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';
import { onMounted, onUnmounted } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AboutUs',
  components: {
    AppHeader,
    AppNav,
    AppFooter
  },
  setup() {
    onMounted(() => {
      document.title = 'About – Muslim Girls School';
    });

    onUnmounted(() => {
      document.title = 'About – Muslim Girls School';
    });
  },
}
</script>

<style scoped>
.text-content {

  color: rgba(0, 0, 0, 0.78);
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.24px;
  margin-bottom: 1em;
}

.right-side-image {
  flex-shrink: 1;
  /* Prevent the image from shrinking */
}

.overlay-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .overlay-content {
    flex-direction: column;
    align-items: center;
    /* Center align the items for smaller screens */
  }

  .text-content,
  img {
    margin-bottom: 1em;
    /* Add some space between the text and the image */
  }
}

.overlay-message {
  border: 4px solid #EBE3D8;
  position: relative;
  z-index: 2;
  top: -18px;
  left: 8px;
}

.message {
  z-index: 1;
  position: relative;
  left: 50%;
  border: 4px solid #700000;
  transform: translate(-50%, 0%);
}

.title {
  color: #EBE3D8;
  text-align: center;
  font-family: 'Merriweather';
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0.96px;
}



.header-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}
</style>
