<template>
  <div class="body">
    <AppHeader />
    <AppNav />
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class=" col-12 mx-0 p-5 fs-5">
          <div class="head-office-info">
            <p>Many of our graduates each year have been (and continue to be) granted admission to various universities in
              Canada such as York University, University of Toronto, University of Waterloo and McMaster University.
              Several
              of
              our former graduates have also been granted admission to universities abroad, such as medical colleges in
              Saudi
              Arabia, the U.S. and Pakistan.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">

        <div class=" col-12 mx-0">

        <div class="awards-section p-5">
          <h2 class="awards-title fs-1">Awards:</h2>
          <p class="awards-description fs-5">
            Every year many of our graduates are also awarded prestigious scholarships from
            universities and the government such as the following:
          </p>
          <div class="awards-container">
            <div class="award" v-for="(award, index) in awards" :key="index">
              <div class="award-text fs-6">{{ award.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
</div></template>
  
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Achievements&Awards',
  components: {
    AppHeader,
    AppNav,
    AppFooter
  },
  data() {
    return {
      awards: [
        { name: 'Ontario Aiming for the Top Scholarship' },
        { name: 'Queen Elizabeth II Aiming for the Top Scholarship' },
        { name: 'Governor General\'s Bronze Academic Medal Award' },
        { name: 'Lieutenant Governor\'s Community Volunteer Award' },
        { name: 'Ontario Scholar Award' }
      ]
    };
  }
  // Any script logic for the Home page can go here
}
</script>
  
<style scoped>
.awards-section {
  text-align: center;

  background: #EBE3D8;
}

.awards-title {
  color: #700000;
  text-align: center;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
}

.awards-description {

  color: rgba(0, 0, 0, 0.78);
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
}

.awards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.award {
  flex-basis: calc(50% - 20px);
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid #700000;
}

.award::before,
.award::after {
  content: '';
  position: absolute;
  border-style: solid;
  border-color: #700000 transparent transparent #700000;
}

.award::before {
  top: -10px;
  /* Half of the border width to sit outside of the box */
  left: -10px;
  width: 20px;
  /* The width of the triangle */
  height: 20px;
  /* The height of the triangle */
  border-width: 10px;
  /* Half of the width/height of the triangle */
}

.award::after {
  bottom: -10px;
  /* Half of the border width to sit outside of the box */
  right: -10px;
  width: 20px;
  /* The width of the triangle */
  height: 20px;
  /* The height of the triangle */
  border-width: 10px;
  /* Half of the width/height of the triangle */
}

.award-text {
  position: relative;
  z-index: 1;
}

.award:last-child {
  flex-basis: 100%;
}

@media (max-width: 768px) {
  .award {
    flex-basis: 100%;
  }
}

.head-office-info p {
  color: rgba(0, 0, 0, 0.78);
  text-align: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
}
</style>
  