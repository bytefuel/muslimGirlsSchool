<template>
    <div class="services">
        <AppHeader />
        <AppNav />
        <section class="services-section ">
            <div class="container">
                <div class="row ">
                    <div class="col">
                        <h1 class="fs-1">Girls Uniform Information</h1>
                        <ul>
                            <li class="fs-5"><strong>Shirt and Pants:</strong> Navy blue</li>
                            <li class="fs-5"><strong>Tunic:</strong> White, long sleeves</li>
                            <li class="fs-5"><strong>Hijab:</strong> Plain white</li>
                            <li class="fs-5"><strong>Vest and Jacket:</strong> Navy blue (No graphics)</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
        <AppFooter />
    </div>
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'GirlsUniform',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
    // Any script logic for the Home page can go here
}
</script>
  
<style scoped>
.services-section {
    margin: 0 auto;
    padding: 20px;
    background: #EBE3D8;
    position: relative;
    margin-bottom: 150px;
}

h1 {
    color: #700000;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    /* 150% */
    letter-spacing: 0.24px;
}

p {
    color: rgba(0, 0, 0, 0.60);
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.24px;
}


li {
    color: #700000;
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    /* 150% */
    letter-spacing: 0.24px;
}
</style>
  