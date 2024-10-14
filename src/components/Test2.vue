<template>
    <div class="full-height-container position-relative vh-85">
      <div class="dark-overlay position-absolute top-0 start-0 end-0 bottom-0"></div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="Muslim Girls School Logo" class="nav-logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About <font-awesome-icon icon="chevron-down" />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link to="/about-us" class="nav-link dropdown-item">About Us</router-link></li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="#">Aims And Objectives</a>
                    <ul class="dropdown-menu">
                      <li><router-link to="/services" class="nav-link dropdown-item">Our Services</router-link></li>
                    </ul>
                  </li>
                  <li><router-link class="nav-link dropdown-item" to="/governing-body">Governing Body</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/achievements-and-awards">Achievements and Awards</router-link></li>
                <li class="dropdown-submenu">
                  <a class="nav-link dropdown-item" href="#">Uniform <font-awesome-icon class="icon-right" icon="chevron-right" style="float:right"/></a>
                  <ul class="dropdown-menu">
                    <li><router-link class="nav-link dropdown-item" to="/girls-uniform">Girls Uniform Information</router-link></li>
                    <li><router-link class="nav-link dropdown-item" to="/children-uniform">Children Uniform Information</router-link></li>
                  </ul>
                </li>
                <li><router-link class="nav-link dropdown-item" to="/curriculum">Curriculum</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/about-us">Upcoming Events</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link" href="#">Registration <font-awesome-icon class="icon-down" icon="chevron-down"/></a>
              <ul class="dropdown-menu">
                <li><router-link class="nav-link dropdown-item" to="/mba-registration">MBA Registration Information</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/mma-registration">MAA Registration Information</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/about-us">MBA Registration Form</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/about-us">MAA Registration Form</router-link></li>
              </ul>
            </li>
            <li><router-link class="nav-link" to="/facilities">Facilities</router-link></li>
            <li class="nav-item dropdown">
              <a class="nav-link " href="#">Opportunities <font-awesome-icon class="icon-down" icon="chevron-down"/></a>
              <ul class="dropdown-menu">
                <li><router-link class="nav-link dropdown-item" to="/employment">Employment</router-link></li>
                <li><router-link class="nav-link dropdown-item" to="/volunteer">Volunteer</router-link></li>
              </ul>
            </li>
            <li><router-link class="nav-link" to="/donate">Donate</router-link></li>
            <li><router-link class="nav-link" to="/accessibility-policies">Accessibility Policies</router-link></li>
            <li><router-link class="nav-link" to="/covid19">Covid 19</router-link></li>
            <li><router-link class="nav-link" to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';
  
  library.add(fas);
  export default {
    name: 'NavigationBar',
    components: {
      'font-awesome-icon': FontAwesomeIcon
    }
  }
  </script>
    
  <style scoped>
  .navbar{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 70.71%, rgba(255, 255, 255, 0.02) 93.35%);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
  }
  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
  }
  .nav-item li:hover {
    text-decoration: underline;
  }
  .dropdown-submenu:hover .dropdown-menu {
    display: block;
  }
  .full-height-container {
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-position: center;
    height: 85vh;
  }
  
  .dark-overlay {
    background-color: rgba(0, 0, 0, 0.29);
    z-index: 1;
  }
  
  .nav-logo {
    height: 60px; /* Adjust the logo size as needed */
  }
  
  .navbar {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    z-index: 12;
  }
  
  .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.78);
    font-size: 16px;
    font-weight: 500;
  }
  
  .navbar-nav .nav-link.router-link-active {
    color: #000;
    text-decoration: underline;
    font-weight: bolder;
  }
  
  .dropdown-menu {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 70.71%, rgba(255, 255, 255, 0.9) 93.35%);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
  
  .dropdown-item {
    color: black;
  }
  
  .dropdown-submenu {
    position: relative;
  }
  
  .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%; /* Position the submenu to the right */
  }
  
  @media (max-width: 991px) {
    .navbar-nav {
      flex-direction: column;
      align-items: center;
    }
  
    .dropdown-menu {
      position: static;
    }
  
    .dropdown-submenu .dropdown-menu {
      position: static;
      margin-left: 20px; /* Indent submenus in mobile view */
    }
  }
  </style>
  
  