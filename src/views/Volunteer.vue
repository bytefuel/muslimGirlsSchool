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
                                <div class="text-content fs-5 p-3">
                                    <h2 class="fs-2">Volunteer</h2>
                                    Thank you for your interest in volunteering at our institution.
                                    We are continuously looking for volunteers to share their talents and experiences at our
                                    institution.<br>
                                    We have several volunteer positions available in the following areas:
                                    <ul class="fs-6">
                                        <li>Administration (office help)</li>
                                        <li>Teaching (teaching assistant)</li>
                                        <li>General (general help)</li>
                                        <li>School maintenance (plumbing, woodwork, painting)</li>
                                    </ul>
                                    If you are able to make a commitment and are interested in any one or more of the
                                    following:
                                    <ul class="fs-6">
                                        <li>Gaining valuable experience</li>
                                        <li>Improving your skills</li>
                                        <li>Contributing to your community</li>
                                    </ul>
                                    please fill in the application form online and submit your resume if you have one. Insha
                                    Allah, we will contact you if your interests and goals match with our needs.
                                </div>
                            </div>
                            <br><br>
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
    name: 'Volunteer',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
}
</script>
  
<style scoped>
.text-content h2 {
    color: #700000;
    font-family: Merriweather;
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    /* 208.333% */
    letter-spacing: 0.48px;
}

.text-content {

    /* Styles for the program descriptions */
    color: rgba(0, 0, 0, 0.78);
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    /* 150% */
    letter-spacing: 0.24px;
    /* Adjust as needed for spacing between paragraphs */
}

.text-content ul li {
    color: #700000;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.24px;
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
}</style>
  