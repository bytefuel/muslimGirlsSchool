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
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.main-floor {
  margin: 20px;
}

.main-floor p {
  color: #000;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}

.main-floor-title {
  color: #700000;
  font-family: Merriweather;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
}

.main-floor-images,
.second-floor-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  cursor: pointer;
}

.fair-images {
  display: flex; /* Change to flex for better alignment */
  flex-wrap: wrap; /* Allow wrapping */
  gap: 10px; /* Space between images */
  justify-content: center; /* Center images */
  cursor: pointer;
}

.fair-image {
  flex: 1 1 calc(25% - 10px); /* Adjust width for four images in a row */
  height: auto; /* Maintain aspect ratio */
  max-width: 150px; /* Max width for the images */
  border: 2px solid #700000; /* Optional border for clarity */
  padding: 5px;
}

.images-layout {
  position: relative;
  flex: 1;
  height: 488px; /* Adjust height as needed */
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
  width: 100%; /* Full width for responsiveness */
  height: auto; /* Maintain aspect ratio */
  border: 4px solid #700000;
  padding: 5px;
}

.border_2 {
  top: 0;
  right: calc(100% - 716px);
}

.image_2 {
  width: 100%; /* Full width for responsiveness */
  height: auto; /* Maintain aspect ratio */
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
  text-align: center;
  font-family: Merriweather;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.24px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .facilities-container {
    padding-left: 16px; /* Reduced padding */
    padding-right: 16px; /* Reduced padding */
  }

  .facilities-start {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .main-floor {
    margin: 10px 0;
  }

  .main-floor-title {
    font-size: 30px; /* Reduced font size for smaller screens */
  }

  .main-floor p {
    font-size: 18px; /* Adjusted paragraph font size */
  }

  .main-floor-images,
  .second-floor-images {
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  .fair-images {
    justify-content: center; /* Center images */
  }

  .fair-image {
    flex: 1 1 calc(50% - 10px); /* Adjust width for two images in a row */
  }

  .image_1,
  .image_2 {
    width: 100%; /* Full width for images */
    height: auto; /* Maintain aspect ratio */
    border: 4px solid #700000; /* Maintain border for consistent look */
    padding: 5px; /* Consistent padding */
  }

  .images-layout {
    height: auto; /* Allow height to adjust for smaller screens */
  }

  .border_1,
  .border_2 {
    position: static; /* Remove absolute positioning for better layout */
  }
}

@media (max-width: 480px) {
  .main-floor-title {
    font-size: 24px; /* Further reduced font size */
  }

  .main-floor p {
    font-size: 16px; /* Further adjusted paragraph font size */
  }

  .main-floor-images,
  .second-floor-images {
    grid-template-columns: 1fr; /* Single column layout for very small screens */
  }

  .facilities-text {
    font-size: 20px; /* Adjusted text size for mobile */
  }

  .fair-image {
    flex: 1 1 100%; /* Full width for images on mobile */
    max-width: 100%; /* Ensure they don't exceed the container width */
  }
}
</style>