<template>
    <div class="services">
        <AppHeader />
        <AppNav />
        <section class="services-section">
            <div class="services-content">
                <h1>Children Uniform Information</h1>
                <p>No update yet.</p>
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
    name: 'ChildrenUniform',
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
    height: 311px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
    background: #EBE3D8;
    position: relative;
    margin-bottom: 150px;
}

.services-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.services h1 {
    color: #700000;
font-family: Raleway;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
letter-spacing: 0.24px;
}

.services p {
    color: rgba(0, 0, 0, 0.60);
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.24px;
}


.services li {
    color: #700000;
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
letter-spacing: 0.24px;
}


</style>
  