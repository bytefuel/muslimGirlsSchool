<template>
  <footer class="app-footer">
    <div class="footer-section hadith-of-the-day">
  <h4>Hadith of the Day</h4>
  <p v-if="hadithOfTheDay">
    {{ hadithOfTheDay.text }} ({{ hadithOfTheDay.by }}) -  Sahih al-Bukhari
  </p>
  <p v-else>Loading Hadith of the Day...</p>
</div>

    <div class="footer-section notice-contact">
      <h4>Contact Us</h4>
      <p>Muslim Girls School 10 Vulcan St., Etobicoke ON M9W 1L2 Timings Monday to Friday 8:00am to 4:00pm</p>
      <p><font-awesome-icon icon="bullhorn" /> Notice: JOB OPENINGS!</p>
      <p><font-awesome-icon icon="envelope" /> muslimgirlsschool@yahoo.com</p>
      <p><font-awesome-icon icon="phone" /> tel:4162448600</p>
    </div>
    <div class="footer-section quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li><router-link to="/employment" @click="scrollToTop">Job Opportunities</router-link></li>
        <li><router-link to="/mba-registration" @click="scrollToTop">Download Forms</router-link></li>
        <li><router-link to="/facilities" @click="scrollToTop">Picture Gallery</router-link></li>
      </ul>
    </div>
    <div class="footer-section quote-of-the-day">
      <h4>Ayah of the Day</h4>
      <p v-if="ayahDetails">{{ ayahDetails.text }} - {{ ayahDetails.englishName }} ({{ ayahDetails.numberInSurah }})</p>
      <p v-else>Loading Ayah of the Day...</p>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBullhorn, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import hadithData from '@/assets/hadiths.json'; // Adjust the path as necessary

library.add(faBullhorn, faEnvelope, faPhone);

export default {
  name: 'AppFooter',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      hadithOfTheDay: null, 
      ayahDetails: null, // Initially, no Ayah data
    };
  },
  mounted() {
    this.loadHadithAndAyah();
    this.startAutoRefresh(); // Start checking for daily refresh
  },
  methods: {
    loadHadithAndAyah() {
      const lastUpdateDate = localStorage.getItem('lastUpdateDate');
      const currentDate = new Date().toDateString(); // Get current date as string (e.g., 'Mon Oct 24 2024')

      if (lastUpdateDate === currentDate) {
        // If the stored date is the same as the current date, load from localStorage
        this.hadithOfTheDay = JSON.parse(localStorage.getItem('hadithOfTheDay'));
        this.ayahDetails = JSON.parse(localStorage.getItem('ayahDetails'));
      } else {
        // If the date has changed or no data exists, fetch new Hadith and Ayah
        this.selectRandomHadith();
        this.fetchAyah();
        localStorage.setItem('lastUpdateDate', currentDate); // Save the new date
      }
    },
    selectRandomHadith() {
      const allHadiths = [];
      hadithData.forEach(volume => {
        volume.books.forEach(book => {
          book.hadiths.forEach(hadith => {
            allHadiths.push({
              text: hadith.text,
              by: hadith.by,
              bookName: book.name
            });
          });
        });
      });
      if (allHadiths.length > 0) {
        const randomIndex = Math.floor(Math.random() * allHadiths.length);
        this.hadithOfTheDay = allHadiths[randomIndex];
        localStorage.setItem('hadithOfTheDay', JSON.stringify(this.hadithOfTheDay)); // Save to localStorage
      }
    },
    fetchAyah() {
      const randomAyahNumber = Math.floor(Math.random() * (6236 - 5 + 1)) + 5;
      const url = `https://api.alquran.cloud/v1/ayah/${randomAyahNumber}/en.asad`;
      axios.get(url)
        .then(response => {
          const data = response.data.data;
          this.ayahDetails = {
            text: data.text,
            englishName: data.surah.englishName,
            numberInSurah: data.numberInSurah
          };
          localStorage.setItem('ayahDetails', JSON.stringify(this.ayahDetails)); // Save to localStorage
        })
        .catch(error => console.error('Error fetching Ayah:', error));
    },
    startAutoRefresh() {
      setInterval(() => {
        const currentDate = new Date().toDateString(); // Get current date as string (e.g., 'Mon Oct 24 2024')
        const lastUpdateDate = localStorage.getItem('lastUpdateDate');

        if (!lastUpdateDate || lastUpdateDate !== currentDate) {
          // If the date has changed, fetch new Hadith and Ayah
          this.selectRandomHadith();
          this.fetchAyah();
          localStorage.setItem('lastUpdateDate', currentDate); // Update the date
        }
      }, 1000 * 60 * 60); // Check every hour (1000 ms * 60 seconds * 60 minutes)
    },
    // The new scrollToTop method
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

  },
};
</script>


<style scoped>
.app-footer {
  background-color: #7b0a2a;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-section {
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-family: 'Raleway', sans-serif;
  font-family: Raleway;
font-weight: 700;
letter-spacing: 0.01em;
}
.hadith-of-the-day{
  border: 2px solid #FFFFFF;
  padding:20px;
  margin-top: 20px;
}
.footer-section ul {
  list-style-type: none; 
  padding-left: 0; 
}
.notice-contact {
    padding-left: 20px;
  }

.footer-section ul li a {
  color: white; 
  text-decoration: underline;
  cursor: pointer; 
  font-family: 'Raleway', sans-serif;
letter-spacing: 0.01em;
}
.footer-section p{
  font-family: 'Raleway', sans-serif;
letter-spacing: 0.01em;
}
.footer-section.notice-contact,.footer-section.quick-links,.footer-section.quote-of-the-day{
    padding-top: 20px;
  }
@media (min-width: 992px) {
  .app-footer {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .hadith-of-the-day, .notice-contact {
    flex-basis: 50%; 
  }
  
  .quick-links, .quote-of-the-day {
    flex-basis: 25%; 
  }
  .quick-links, .quote-of-the-day, .contact-info {
    text-align: center;
    align-items: flex-start;
  }
  
}
</style>