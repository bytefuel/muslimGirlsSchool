<template>
  <div>
    <vue-easy-lightbox :visible="showLightbox" :imgs="images" :index="currentImageIndex"
      @hide="showLightbox = false"></vue-easy-lightbox>
    <AppHeader />
    <AppNav />
    <div class="facilities-container container">
      <div class="row facilities-start">
        
        <div class="col-12 col-md-6 facilities-text">
          <p>
            We are pleased to announce that we<br> have expanded our facilities to meet the<br> growing needs of our
            students and the<br> community. In September 2006,<br> construction of the (approx. 6000 sq. ft)<br> second
            floor was completed, allowing<br> our school to accommodate up to 300<br> students.
          </p>
        </div>

        
        <div class="col-12 col-md-6 images-layout">
          <div class="row">
         
            <div class="col-12 col-md-6 mb-3">
              <img class="image_1 img-fluid" src='@/assets/facilities_2.png' alt="Facilities 2">
            </div>

            <div class="col-12 col-md-6 mb-3">
              <img class="image_2 img-fluid" src='@/assets/facilities_1.png' alt="Facilities 1">
            </div>
          </div>
        </div>
      </div>

    
      <div class="main-floor">
        <h2 class="main-floor-title">Main Floor</h2>
        <p>Primary classes, from JK-Grade 5 (Madresatul Atfaal Almuslimeen), are conducted on the main level. The main
          floor facilities include:</p>
        <div class="main-floor-images row">
          
          <img v-for="(src, index) in mainFloorImages" :key="index" :src="src" alt="MainFloor"
            @click="openLightbox(mainFloorImages, index)" class="col-12 col-sm-6 col-md-4 mb-3 img-fluid" />
        </div>
      </div>

      <div class="main-floor">
        <h2 class="main-floor-title">Second Floor</h2>
        <p>Intermediate and secondary classes, from Grades 6-12 (Madresatul Banaat Almuslimaat) are held on the second
          level. The second floor facilities include:</p>
        <div class="second-floor-images row">
          
          <img v-for="(src, index) in secondFloorImages" :key="index" :src="src" alt="SecondFloor"
            @click="openLightbox(secondFloorImages, index)" class="col-12 col-sm-6 col-md-4 mb-3 img-fluid" />
        </div>
      </div>

   
      <div class="main-floor">
        <h2 class="main-floor-title">Extra Curricular Activities</h2>
        <div class="fair-images row">
          <!-- Adjusted size for Extra Curricular Activities images -->
          <img v-for="(src, index) in extraCurricularImages" :key="index" :src="src" alt="Fairs"
            @click="openLightbox(extraCurricularImages, index)" class="col-12 col-sm-6 col-md-3 col-lg-2 mb-3 img-fluid" />
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

export default {
  name: 'FacilitiesPage',
  components: {
    AppHeader,
    AppNav,
    AppFooter,
    VueEasyLightbox
  },
  data() {
    return {
      mainFloorImages: [
        require('@/assets/mainfloor_1.png'),
        require('@/assets/mainfloor_2.png'),
        require('@/assets/mainfloor_3.png'),
        require('@/assets/mainfloor_4.png'),
        require('@/assets/mainfloor_5.png'),
        require('@/assets/mainfloor_6.png'),
      ],
      secondFloorImages: [
        require('@/assets/secondfloor_1.png'),
        require('@/assets/secondfloor_2.png'),
        require('@/assets/secondfloor_3.png'),
        require('@/assets/secondfloor_4.png'),
        require('@/assets/secondfloor_5.png'),
        require('@/assets/secondfloor_6.png'),
      ],
      extraCurricularImages: [
        require('@/assets/sciencefair_1.png'),
        require('@/assets/sciencefair_2.png'),
        require('@/assets/sciencefair_3.png'),
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
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
}

.main-floor {
  margin: 20px 0;
}

.main-floor p {
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}

.main-floor-title {
  color: #700000;
  font-family: Merriweather, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
}

.images-layout {
  position: relative;
}

.border_1,
.border_2 {
  position: absolute;
}

.image_1 {
  width: 100%;
  border: 4px solid #700000;
  padding: 5px;
}

.image_2 {
  width: 100%;
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
  text-align: center;
  font-family: Merriweather, sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}


.fair-images img {
  width: 100%;
  height: auto;
}


.fair-images .col-md-3 {
  flex: 0 0 25%; 
}

.fair-images .col-lg-2 {
  flex: 0 0 16.6667%; 
}
</style>
