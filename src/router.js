import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import About from './views/About.vue'
import Services from './views/Services.vue';
import GoverningBody from './views/GoverningBody.vue';
import Achievements from './views/Achievements&Awards.vue';
import GirlsUniform from './views/GirlsUniform.vue';
import Curriculum from './views/Curriculum.vue';
import MBARegistration from './views/MBARegistration.vue';
import MAARegistration from './views/MAARegistration.vue';
import AccessibilityPolicies from './views/AccessibilityPolicies.vue';
import Contact from './views/Contact.vue';
import Volunteer from './views/Volunteer.vue';
import Employment from './views/Employment.vue';
import FacilitiesPage from './views/FacilitiesPage.vue';
import Donate from './views/Donate.vue';
import ChildrenUniform from './views/ChildrenUniform.vue';

// Define your route records
const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About', component: About },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/services', name: 'Services', component: Services },
  { path: '/governing-body', name: 'GoverningBody', component: GoverningBody },
  { path: '/achievements-and-awards', name: 'Achievements&Awards', component: Achievements },
  { path: '/girls-uniform', name: 'GirlsUniform', component: GirlsUniform },
  { path: '/children-uniform', name: 'ChildrenUniform', component: ChildrenUniform },
  { path: '/curriculum', name: 'Curriculum', component: Curriculum },
  { path: '/mba-registration', name: 'MBARegistration', component: MBARegistration },
  { path: '/maa-registration', name: 'MAARegistration', component: MAARegistration },
  { path: '/accessibility-policies', name: 'AccessibilityPolicies', component: AccessibilityPolicies },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/volunteer', name: 'Volunteer', component: Volunteer },
  { path: '/employment', name: 'Employment', component: Employment },
  { path: '/facilities', name: 'FacilitiesPage', component: FacilitiesPage },
  { path: '/donate', name: 'Donate', component: Donate }
];

// Create the router instance
const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
