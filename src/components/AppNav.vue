<template>
  <div class="full-height-container position-relative vh-85 img-fluid">
    <div class="dark-overlay position-absolute top-0 start-0 end-0 bottom-0"></div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="Muslim Girls School Logo" class="nav-logo img-fluid" />
        </a>
        <button class="navbar-toggler" type="button" @click="navbarCollapsed = !navbarCollapsed"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span :class="{ 'navbar-toggler-icon': navbarCollapsed, 'toggler-icon-open': !navbarCollapsed }"></span>
        </button>
        <div class="collapse navbar-collapse" :class="!navbarCollapsed ? 'show' : ''" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-link">
              <router-link to="/" class="nav-link fs-6">Home</router-link>
            </li>
            <li class="nav-link dropdown">
              <a class="nav-link" href="#" id="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About <font-awesome-icon icon="chevron-down" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="about">
                <li>
                  <router-link to="/about-us" class="nav-link dropdown-item fs-6">About Us</router-link>
                </li>
                <li class="dropdown-submenu">
                  <a class="nav-link dropdown-item d-flex justify-content-between align-items-center"
                    @click="toggleDropdown">
                    Aims And Objectives
                    <font-awesome-icon :icon="isAimsDropdownOpen ? 'chevron-down' : 'chevron-right'
          " />
                  </a>
                  <ul class="dropdown-menu" :class="{ show: isAimsDropdownOpen }">
                    <li>
                      <router-link to="/services" class="nav-link dropdown-item fs-6">Our Services</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/governing-body">Governing Body</router-link>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/achievements-and-awards">Achievements and
                    Awards</router-link>
                </li>
                <li class="dropdown-submenu">
                  <a class="nav-link dropdown-item d-flex justify-content-between align-items-center p-2"
                    @click="toggleDropdown2">
                    Uniform
                    <font-awesome-icon :icon="isUniformDropdownOpen ? 'chevron-down' : 'chevron-right'
          " />
                  </a>
                  <ul class="dropdown-menu" :class="{ show: isUniformDropdownOpen }">
                    <li>
                      <router-link class="nav-link dropdown-item fs-6" to="/girls-uniform">Girls Uniform
                        Information</router-link>
                    </li>
                    <li>
                      <router-link class="nav-link dropdown-item fs-6" to="/children-uniform">Children Uniform
                        Information</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/curriculum">Curriculum</router-link>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/about-us">Upcoming Events</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-link dropdown">
              <a class="nav-link" href="#" id="registration" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Registration
                <font-awesome-icon class="icon-down" icon="chevron-down" /></a>
              <ul class="dropdown-menu" aria-labelledby="registration">
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/mba-registration">MBA Registration
                    Information</router-link>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item fs-6" to="/maa-registration">MAA Registration
                    Information</router-link>
                </li>
                <li>
                  <a class="nav-link dropdown-item fs-6" href="/mba-registration-form.pdf" download>MBA Registration Form</a>
                </li>
                <li>
                  <a class="nav-link dropdown-item fs-6" href="/maa-registration-form.pdf" download>MAA Registration Form</a>
                </li>
              </ul>
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/facilities">Facilities</router-link>
            </li>
            <li class="nav-link dropdown">
              <a class="nav-link" href="#" id="opportunities" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Opportunities
                <font-awesome-icon class="icon-down" icon="chevron-down" /></a>
              <ul class="dropdown-menu" aria-labelledby="opportunities">
                <li>
                  <router-link class="nav-link dropdown-item" to="/employment">Employment</router-link>
                </li>
                <li>
                  <router-link class="nav-link dropdown-item" to="/volunteer">Volunteer</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/donate">Donate</router-link>
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/accessibility-policies">Accessibility Policies</router-link>
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="position-absolute top-50 start-50 text-light translate-middle text-center py-5 z-3">
      <h1 class="title display-1">{{ pageTitles.title }}</h1>
      <h2 class="sub-title" v-if="pageTitles.subTitle">{{ pageTitles.subTitle }}</h2>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);
export default {
  name: "NavigationBar",
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
  data() {
    return {
      isAimsDropdownOpen: false,
      isUniformDropdownOpen: false,
      navbarCollapsed: true,
    };
  },
  computed: {
    pageTitles() {
      let titles = {
        title: "",
        subTitle: "",
      };

      switch (this.$route.name) {
        case "Home":
          titles.title = "Muslim Girls School";
          titles.subTitle = "Serving The Ummah Since: 1993";
          break;
        case "About":
          titles.title = "About";
          break;
        case "AboutUs":
          titles.title = "About Us";
          break;
        case "Curriculum":
          titles.title = "Curriculum";
          break;
        case "AccessibilityPolicies":
          titles.title = "Almuslimaat Accessibility Policies";
          break;
        case "Achievements&Awards":
          titles.title = "Achievements and Awards";
          break;
        case "ChildrenUniform":
          titles.title = "Children Uniform Information";
          break;
        case "Contact":
          titles.title = "Contact";
          break;
        case "Donate":
          titles.title = "Donate";
          break;
        case "Employment":
          titles.title = "Employment";
          break;
        case "FacilitiesPage":
          titles.title = "Facilities";
          break;
        case "GirlsUniform":
          titles.title = "Girls Uniform Information";
          break;
        case "GoverningBody":
          titles.title = "Governing Body";
          break;
        case "MBARegistration":
          titles.title = "MBA Registration Information";
          break;
        case "MAARegistration":
          titles.title = "MAA Registration Information";
          break;
        case "Volunteer":
          titles.title = "Volunteer";
          break;
        case "Covid19":
          titles.title = "Covid-19";
          break;
        case "Services":
          titles.title = "Our Services";
          break;
        default:
          titles.title = "Welcome";
      }

      return titles;
    },
  },
  methods: {
    toggleDropdown(event) {
      event.stopPropagation(); // Stop event from propagating to Bootstrap's collapse handler

      this.isAimsDropdownOpen = !this.isAimsDropdownOpen;
      let submenu = event.currentTarget.nextElementSibling;
      if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
      } else {
        submenu.classList.add("show");
      }
    },
    toggleDropdown2(event) {
      event.stopPropagation(); // Stop event from propagating to Bootstrap's collapse handler

      this.isUniformDropdownOpen = !this.isUniformDropdownOpen;
      let submenu = event.currentTarget.nextElementSibling;
      if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
      } else {
        submenu.classList.add("show");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.2) 70.71%,
      rgba(255, 255, 255, 0.02) 93.35%);
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 12;
}

.dropdown-submenu {
  position: relative;
}

.toggler-icon-open {
    display: flex;
    position: relative;
    width: 30px;
    height: 2px;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.toggler-icon-open::before {
    transform: rotate(45deg);
    text-align: center;
    align-items: center;
}
.toggler-icon-open::after {
    top: 0px;
    transform: rotate(-45deg);
}
.navbar-toggler {
    padding: 0.25rem 0.75rem;
    height: 50px;
    border: none;
}

.toggler-icon-open::before, .toggler-icon-open::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  transition: all 0.3s;
}

.title {
  color: #ebe3d8;
  text-align: center;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0.96px;
}

.sub-title {
  color: #fff;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 100px;
}

.full-height-container {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  height: 85vh;
}

.dark-overlay {
  background-color: rgba(0, 0, 0, 0.29);
  z-index: 1;
}

.navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.78);
  font-weight: 500;
}

.navbar-nav .nav-link.router-link-active {
  color: #000;
  text-decoration: underline;
  font-weight: bolder;
}

.dropdown-menu {
  background: linear-gradient(180deg,
      rgb(255 255 255 / 71%) 70.71%,
      rgb(255 255 255 / 92%) 93.35%);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-item {
  color: black;
}

.dropdown-submenu {
  position: relative;
}

.nav-link.dropdown:hover>ul {
  display: block;
}

@media (min-width: 991px) {
  .dropdown-submenu:hover>.dropdown-menu {
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    padding: 0;
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    text-align: center;
  }

  .dropdown-menu {
    position: static;
    text-align: center;
    padding: 10px;
  }

  .dropdown-submenu .dropdown-menu {
    position: static;
    margin-left: 0;
    padding-left: 0;
  }

  .dropdown-menu.show {
    display: block;
  }
}
</style>
