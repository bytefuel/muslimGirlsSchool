<template>
  <div>
    <vue-easy-lightbox :visible="showLightbox" :urls="images" :index="currentImageIndex"
      @hide="showLightbox = false"></vue-easy-lightbox>
    <AppHeader />
    <AppNav />
    <div class="facilities-container">
      <div class="facilities-start">
        <div class="facilities-text">
          <p>
            We are pleased to announce that we<br> have expanded our facilities to meet the<br> growing needs of our
            students and
            the<br> community. In September 2006,<br> construction of the (approx. 6000 sq. ft)<br> second floor was
            completed, allowing<br> our school to
            accommodate up to 300<br> students.
          </p>
        </div>
        <div class="images-layout">
          <div class="border_1">
            <img class="image_1" src='@/assets/facilities_2.png'>
          </div>
          <div class="border_2">
            <img class="image_2" src='@/assets/facilities_1.png'>
          </div>
        </div>
      </div>
      <div class="main-floor">
        <h2 class="main-floor-title">Main Floor</h2>
        <p>Primary classes, from JK-Grade 5 (Madresatul Atfaal Almuslimeen), are conducted on the main level. The main
          floor facilities include:</p>
        <div class="main-floor-images">
          <img v-for="(src, index) in mainFloorImages" :key="index" :src="src" alt="MainFloor"
            @click="openLightbox(mainFloorImages, index)" />
        </div>
      </div>
      <div class="main-floor">
        <h2 class="main-floor-title">Second Floor</h2>
        <p>Intermediate and secondary classes, from Grades 6-12 (Madresatul Banaat Almuslimaat) are held on the second
          level. The second floor facilities include:</p>
        <div class="second-floor-images">
          <img v-for="(src, index) in secondFloorImages" :key="index" :src="src" alt="SecondFloor"
            @click="openLightbox(secondFloorImages, index)" />
        </div>
      </div>
      <div class="main-floor">
        <h2 class="main-floor-title">Extra Curricular Activites</h2>
        <div class="fair-images">
          <img v-for="(src, index) in extraCurricularImages" :key="index" :src="src" alt="Fairs"
            @click="openLightbox(extraCurricularImages, index)" />
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Facilities',
  components: {
    AppHeader,
    AppNav,
    AppFooter,
    VueEasyLightbox
  },
  data() {
    return {
      mainFloorImages: [
        // eslint-disable-next-line no-undef
        require('@/assets/mainfloor_1.png'),// eslint-disable-next-line no-undef
        require('@/assets/mainfloor_2.png'),// eslint-disable-next-line no-undef
        require('@/assets/mainfloor_3.png'),// eslint-disable-next-line no-undef
        require('@/assets/mainfloor_4.png'),// eslint-disable-next-line no-undef
        require('@/assets/mainfloor_5.png'),// eslint-disable-next-line no-undef
        require('@/assets/mainfloor_6.png'),
      ],
      secondFloorImages: [
        // eslint-disable-next-line no-undef
        require('@/assets/secondfloor_1.png'),// eslint-disable-next-line no-undef
        require('@/assets/secondfloor_2.png'),// eslint-disable-next-line no-undef
        require('@/assets/secondfloor_3.png'),// eslint-disable-next-line no-undef
        require('@/assets/secondfloor_4.png'),// eslint-disable-next-line no-undef
        require('@/assets/secondfloor_5.png'),// eslint-disable-next-line no-undef
        require('@/assets/secondfloor_6.png'),
      ],
      extraCurricularImages: [
        // eslint-disable-next-line no-undef
        require('@/assets/sciencefair_1.png'),// eslint-disable-next-line no-undef
        require('@/assets/sciencefair_2.png'),  // eslint-disable-next-line no-undef
        require('@/assets/sciencefair_3.png'),  // eslint-disable-next-line no-undef
        require('@/assets/sciencefair_4.png'),
      ],
      showLightbox: false,
      images: [],
      currentImageIndex: 0,
    };
  },
  methods: {
    openLightbox(images, index) {
      this.images = images;
      this.currentImageIndex = index;
      this.showLightbox = true;
    },
  }
}
</script>
  
<style scoped>
.facilities-container {
  padding-left: 88px;
  padding-right: 88px;
}

.main-floor {
  margin: 20px;
}

.main-floor p {
  color: #000;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}

.main-floor-title {
  color: #700000;
  font-family: Merriweather;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
}

.main-floor-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Creates 3 columns with equal width */
  gap: 10px;
  cursor: pointer;
}

.fair-images {
  display: inline-flex;
  gap: 10px;
  cursor: pointer;
}

.second-floor-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  cursor: pointer;
}


.images-layout {
  position: relative;
  flex: 1;
  height: 488px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.border_1,
.border_2 {
  position: absolute;
}

.border_1 {
  top: 160px;
  left: 0px;
  z-index: 10;
}

.image_1 {
  width: 384px;
  height: 256px;
  border: 4px solid #700000;
  padding: 5px;
}

.border_2 {
  top: 0;
  right: calc(100% - 716px);
}

.image_2 {
  width: 461px;
  height: 306px;
  border: 4px solid #EBE3D8;
  padding: 5px;
}


.facilities-start {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2em;

}

.facilities-text {
  flex: 1;
  padding-right: 20px;
  padding-top: 30px;
  text-align: left;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.78);
  text-align: center;
  font-family: Merriweather;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}




</style>
  