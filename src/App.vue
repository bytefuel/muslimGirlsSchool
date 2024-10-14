<template>
  <div id="app">
    <!-- The <router-view> will display the component based on the route -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
  // No need to import Home because Vue Router handles that
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Raleway:wght@300;400;500&display=swap');
/* Global styles can go here

/* width */
::-webkit-scrollbar {
  width: 10px;
 
}

/* Track */
::-webkit-scrollbar-track {

  border-radius: 10px;
  background-color: white;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #700000;  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
