<template>
    <div class="body">
        <AppHeader />
        <AppNav />
        <div class="head-office-info mb-5">
            <p>Our Head Office is located at 10 Vulcan Street, Etobicoke, Ontario, Canada. <br>The following are the
                members, Directors, and administrative staff.</p>
        </div>
        <div class="container ">
            <div class="row justify-content-center">
                <div class=" col-12 mx-0">
                    <div class="staff mb-5">
                        <div class="overlay-staff">
                            <div class="staff-listing">


                                <ul>
                                    <li class="row mt-5">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">Dr. Q.S. Sanaullah</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center"><span class="title">Chairman</span></div>
                                    </li>
                                    <li class="row">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">B. Ataullah S. Qadri</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="title">President/Principal</span></div>
                                    </li>
                                    <li class="row">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">S. Soad Nour</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="title">Vice Principal</span></div>
                                    </li>
                                    <li class="row">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">B. ali Rakkie</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="title">Head Counselor</span></div>
                                    </li>
                                    <li class="row">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">Maulana Syed Abdul<br>Aziz Qadri</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center"><span class="title">Treasurer / Director of Religious Affair</span></div>
                                        </li>
                                    <li class="row">
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center text-nowrap"><span class="name">S. Tahseen Qadri</span></div>
                                        <div class=" col-lg-6 col-md-6 col-md-12 mx-0 display-6 text-center"><span class="title">Accounting / Payroll</span></div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
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

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'GoverningBody',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
    // Any script logic for the Home page can go here
}
</script>
  
<style scoped>
.staff-listing {
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;

}

.overlay-staff {
    border: 4px solid #EBE3D8;
    position: relative;
    z-index: 2;
    top: -18px;
    left: 8px;
}

.staff {
    z-index: 1;
    position: relative;
    left: 50%;
    border: 4px solid #700000;
    transform: translate(-50%, 0%);
}

.head-office-info p {
    color: #700000;
    text-align: center;
    font-family: 'Raleway';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.24px;
    margin-top: 50px;
}

.staff-listing ul {
    list-style: none;
    padding: 0;
}

.staff-listing li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #700000;

}

.name {
    color: #700000;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.32px;
    line-height: 72px;
}

.title {
    color: rgba(0, 0, 0, 0.52);
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.32px;
    line-height: 72px;
}
</style>
  