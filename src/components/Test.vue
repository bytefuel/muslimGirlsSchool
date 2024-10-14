<template>
    <div class="full-height-container">
      <div class="dark-overlay"></div>
      <nav class="navbar">
        <div class="nav-logo">
          <img src="@/assets/logo.png" alt="Muslim Girls School Logo" class="nav-logo" />
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li class="dropdown">
            <router-link to="/about">About <font-awesome-icon class="icon-down" icon="chevron-down" /></router-link>
            <ul class="dropdown-content">
              <li><router-link to="/about-us">About Us</router-link></li>
              <li class="dropdown-submenu">
                <a href="#">Aims And Objectives <font-awesome-icon class="icon-right" icon="chevron-right" style="float:right"/></a>
                <ul class="dropdown-submenu-content">
                  <li><router-link to="/services">Our services</router-link></li>
                </ul>
              </li>
              <li><router-link to="/governing-body">Governing Body</router-link></li>
              <li><router-link to="/achievements-and-awards">Achievements and Awards</router-link></li>
              <li class="dropdown-submenu">
                <a href="#">Uniform <font-awesome-icon class="icon-right" icon="chevron-right" style="float:right"/></a>
                <ul class="dropdown-submenu-content">
                  <li><router-link to="/girls-uniform">Girls Uniform Information</router-link></li>
                  <li><router-link to="/children-uniform">Children Uniform Information</router-link></li>
                </ul>
              </li>
              <li><router-link to="/curriculum">Curriculum</router-link></li>
              <li><router-link to="/about-us">Upcoming Events</router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Registration <font-awesome-icon class="icon-down" icon="chevron-down"/></a>
            <ul class="dropdown-content">
              <li><router-link to="/mba-registration">MBA Registration Information</router-link></li>
              <li><router-link to="/mma-registration">MAA Registration Information</router-link></li>
              <li><router-link to="/about-us">MBA Registration Form</router-link></li>
              <li><router-link to="/about-us">MAA Registration Form</router-link></li>
            </ul>
          </li>
          <li><router-link to="/facilities">Facilities</router-link></li>
          <li class="dropdown">
            <a href="#">Opportunities <font-awesome-icon class="icon-down" icon="chevron-down"/></a>
            <ul class="dropdown-content">
              <li><router-link to="/employment">Employment</router-link></li>
              <li><router-link to="/volunteer">Volunteer</router-link></li>
            </ul>
          </li>
          <li><router-link to="/donate">Donate</router-link></li>
          <li><router-link to="/accessibility-policies">Accessibility Policies</router-link></li>
          <!-- <li><router-link to="/covid19">Covid 19</router-link></li> -->
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <!-- You can add more content here that will be part of the full-height background -->
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
  /* Show the dropdown menu on hover and focus */
  .nav-links .dropdown:hover .dropdown-content,
  .nav-links .dropdown:focus-within .dropdown-content {
    display: block;
  }
  
  /* Dropdown menu base styles */
  .nav-links .dropdown {
    position: relative;
  }
  
  .nav-links .dropdown .dropdown-content {
    display: none;
    position: absolute;
    background: linear-gradient(180deg, rgb(255 255 255 / 71%) 70.71%, rgb(255 255 255 / 92%) 93.35%);
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 70%; /* Align with the bottom of the navbar item */
    left: 0;
    list-style: none;
    text-align: left;
    padding: 0;
  }
  
  /* Style adjustments for dropdown menu items */
  .nav-links .dropdown-content > li {
    position: relative; /* This makes the positioning context for the submenu */
  }
  .nav-links li {
    padding-right: 10px;
  }
  /* Dropdown submenu base styles */
  .nav-links .dropdown-submenu .dropdown-submenu-content {
    display: none;
    position: absolute;
    left: 100%; /* Positions the submenu to the right of the parent item */
    top: 0; /* Aligns the submenu with the top of the parent item */
    z-index: 1;
    background: linear-gradient(180deg, rgb(255 255 255 / 71%) 70.71%, rgb(255 255 255 / 92%) 93.35%); /* Match the background to the main dropdown if needed */
    padding: 0;
  }
  
  /* Show the submenu on hover of the dropdown item */
  .nav-links .dropdown-content > li:hover .dropdown-submenu-content {
    display: block;
    list-style: none;
  }
  
  /* Font Awesome arrow adjustments */
  .icon-down, .icon-right {
    width: 12px; /* Adjust width as needed */
  }
  
  /* Add some padding and prevent text wrapping */
  .nav-links .dropdown-content li a,
  .nav-links .dropdown-submenu-content li a {
    padding: 10px;
    display: block;
    text-decoration: none;
    color: black;
    white-space: nowrap;
    line-height: 20px;
  }
  
  /* Style adjustments for when the dropdown content or submenu content is being hovered over */
  .nav-links .dropdown-content li:hover,
  .nav-links .dropdown-submenu-content li:hover {
    background-color: #f1f1f1;
  }
  
  /* Font Awesome arrow adjustments */
  .icon-down, .icon-right {
    width: 12px; /* Adjust spacing to the right of the menu text */
  }
  
  
  .full-height-container {
    position: relative;
    height: 85vh;
    /* Full height of the viewport */
    background-image: url('@/assets/background.png');
    background-size: cover;  background-position: center;
    background-repeat: no-repeat;
  
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    position: relative;
    /* Needed for absolute positioning of pseudo-element */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 70.71%, rgba(255, 255, 255, 0.02) 93.35%);
    z-index: 20;
  }
  
  
  .nav-logo {
    height: 90px;
    /* Adjust the size as needed */
    margin-left: 1rem;
    /* Add some space between the logo and the nav links */
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    /* Space between navigation links */
  }
  
  
  
  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.29);
    /* Black with 50% opacity */
    z-index: 1;
    /* Ensures the overlay is above the background image but below the content */
  }
  
  .nav-links li a {
    color: rgba(0, 0, 0, 0.78);
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 90px;
    letter-spacing: 0.16px;
  }
  
  .nav-links li a.router-link-active {
    color: black;
    /* Highlight color for active link */
    text-decoration: underline;
    font-weight: bolder;
  }
  
  /* Responsive design adjustments can be added with media queries */
  @media (max-width: 768px) {
    /* Responsive design adjustments */
    .nav-links {
      flex-direction: column;
      /* Hide or show with JavaScript based on menu state (not shown) */
    }
  }
  
  </style>
    