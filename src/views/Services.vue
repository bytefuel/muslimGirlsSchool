<template>
    <div class="services">
        <AppHeader />
        <AppNav />
        <section class="services-section py-5">
            <div class="container ">
                <h1 class="fs-1">Our Services</h1>
                <p class="fs-3">Our Services include and are not confined to:</p>
                <ul class="list-unstyled ">
                    <li class="fs-5">Daily Prayers</li>
                    <li class="fs-5">Fulltime school for boys and girls from JK till Grade 12</li>
                    <li class="fs-5">Funeral Services</li>
                    <li class="fs-5">Matrimonial Services</li>
                    <li class="fs-5">Outsourcing Imams/chaplains, Teachers and Volunteers</li>
                    <li class="fs-5">Counselling</li>
                    <li class="fs-5">Spiritual Guidance</li>
                    <li class="fs-5">Islamic Jurisprudence</li>
                    <li class="fs-5">Working as a liaison between the Muslim community and all three of government.</li>
                </ul>
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
    name: 'Services',
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
    height: fit-content;
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
    font-family: 'Merriweather';
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0.48px;
}

.services p {
    color: rgba(0, 0, 0, 0.60);
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.24px;
}

.services ul {
    list-style-type: none;
    padding-left: 0;
    margin-left: 1em;
}

.services li {
    margin-bottom: 10px;
    text-align: left;
    position: relative;
    padding-left: 1.2em;
    color: rgba(0, 0, 0, 0.60);
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
}

.services li::before {
    content: '•';
    color: rgba(0, 0, 0, 0.60);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    position: absolute;
    left: 0;
}
</style>
  