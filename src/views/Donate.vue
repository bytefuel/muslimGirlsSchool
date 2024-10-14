<template>
    <div>
        <AppHeader />
        <AppNav />

        <div class="container mb-5 mt-5">
            <div class="row justify-content-center">
                <div class=" col-12 mx-0">
                    <div class="message">
                        <div class="overlay-message">
                            <div class="overlay-content">
                                <div class="text-content fs-5 p-4">
                                    Dear Brothers and Sisters,
                                    ﺍﻠﺴﻼﻢ ﻋﻠﻴﻜﻢ ﻮﺭﺤﻤﺔ ﺍﻠﻠﻪ ﻮﺒﺮﻜﺎﺘﻪAsalaam Alaikum Warahmatullaahi Wabarakaatuh
                                    We are a non-profit private institute with no government funding. We have a deficit
                                    because we are imparting education to orphans and children of single mothers. It is our
                                    collective responsibility to help the children of the less fortunate families.
                                    It is therefore, our humble request to you to help these children from your Zakaat fund
                                    and donate generously. This will be, Insha Allah, a Sadaqa Jaaria for you and your
                                    family.<br>
                                    Thanking you sincerely, Syed A. QadriKhadim-Al-Madressa<br>
                                    Please Give your donations via E-Transfer at: madresatul@yahoo.com<br>
                                    Or send a cheque at: 10 Vulcan Street, Etobicoke, Ontario M9W1L2
                                </div>
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
import AppHeader from '@/components/AppHeader.vue'; // Update the import paths as necessary
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Donate',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
}
</script>
  
<style scoped>
.text-content {

    /* Styles for the program descriptions */
    color: rgba(0, 0, 0, 0.78);
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.24px;
    /* Adjust as needed for spacing between paragraphs */
}



.overlay-content {
    display: flex;
    /* Enable Flexbox */
    justify-content: space-between;
    /* Space between the text and image */
    align-items: flex-start;
    /* Align items to the flex-start of the flex container */
}

.overlay-message {
    border: 4px solid #EBE3D8;
    position: relative;
    z-index: 2;
    top: -18px;
    left: 8px;
}

.message {
    z-index: 1;
    position: relative;
    left: 50%;
    border: 4px solid #700000;
    transform: translate(-50%, 0%);
}
</style>
  