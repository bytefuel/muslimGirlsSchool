<template>
  <div>
    <vue-easy-lightbox :visible="showLightbox" :imgs="images" :index="currentImageIndex"
      @hide="showLightbox = false"></vue-easy-lightbox>
    <AppHeader />
    <AppNav />
    <div class="facilities-container container">
      <div class="row facilities-start">
        
        <!-- Text Section - Col adjustment for responsive layout -->
        <div class="col-12 col-lg-6 facilities-text">
          <p>
            We are pleased to announce that we<br> have expanded our facilities to meet the<br> growing needs of our
            students and the<br> community. In September 2006,<br> construction of the (approx. 6000 sq. ft)<br> second
            floor was completed, allowing<br> our school to accommodate up to 300<br> students.
          </p>
        </div>

        <!-- Image Collage Section - Using responsive columns for image layout -->
        <div class="col-12 col-lg-6 images-layout">
          <div class="collage-container d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- Images stack vertically on small screens and side by side on medium+ screens -->
            <img class="collage-image collage-image-1 img-fluid" src="@/assets/facilities_2.png" alt="Facilities 2" />
            <img class="collage-image collage-image-2 img-fluid" src="@/assets/facilities_1.png" alt="Facilities 1" />
          </div>
        </div>
      </div>

      <!-- Main Floor Section -->
      <div class="main-floor">
        <h2 class="main-floor-title">Main Floor</h2>
        <p>Primary classes, from JK-Grade 5 (Madresatul Atfaal Almuslimeen), are conducted on the main level. The main
          floor facilities include:</p>
        <div class="main-floor-images row">
          <img v-for="(src, index) in mainFloorImages" :key="index" :src="src" alt="MainFloor"
            @click="openLightbox(mainFloorImages, index)" class="col-12 col-sm-6 col-md-4 mb-3 img-fluid" />
        </div>
      </div>

      <!-- Second Floor Section -->
      <div class="main-floor">
        <h2 class="main-floor-title">Second Floor</h2>
        <p>Intermediate and secondary classes, from Grades 6-12 (Madresatul Banaat Almuslimaat) are held on the second
          level. The second floor facilities include:</p>
        <div class="second-floor-images row">
          <img v-for="(src, index) in secondFloorImages" :key="index" :src="src" alt="SecondFloor"
            @click="openLightbox(secondFloorImages, index)" class="col-12 col-sm-6 col-md-4 mb-3 img-fluid" />
        </div>
      </div>

      <!-- Extra Curricular Activities Section -->
      <div class="main-floor">
        <h2 class="main-floor-title">Extra Curricular Activities</h2>
        <div class="fair-images row">
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
}

.main-floor {
  margin: 20px 0;
}

.main-floor p {
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: 300;
}

.main-floor-title {
  color: #700000;
  font-family: Merriweather, serif;
  font-size: 40px;
  font-weight: 700;
}

.facilities-start {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2em;
  padding-bottom: 20px;
}

.facilities-text {
  text-align: center;
  font-family: Merriweather, sans-serif;
  font-size: 24px;
  font-weight: 300;
}

.collage-container {
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.collage-image {
  width: 100%;
  max-width: 290px;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  
}

.collage-image-1 {
  border: 4px solid #700000;
  transform: rotate(-5deg);
  padding: 5px;
}

.collage-image-2 {
  border: 4px solid #ebe3d8;
  transform: rotate(5deg);
  padding: 5px;
}

.collage-image:hover {
  transform: scale(1.05);
}


.main-floor-images img,
.second-floor-images img {
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
}


.main-floor-images img:hover,
.second-floor-images img:hover {
  transform: scale(1.05);
}

.fair-images img {
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
  
}

.fair-images img:hover {
  transform: scale(1.05);
}


/* Responsive adjustments */
@media (max-width: 992px) {
  .collage-container {
    max-width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  .facilities-start {
    flex-direction: column;
    text-align: center;
  }
  .collage-image {
    max-width: 300px;
    transform: none;
  }
}
</style>