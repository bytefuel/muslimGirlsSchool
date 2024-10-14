<template>
    <div class="about">
        <AppHeader />
        <AppNav />
        <div class="container mb-5 mt-5">
            <div class="row justify-content-center">
                <div class=" col-12 mx-0">
                    <div class="message">
                        <div class="overlay-message">
                            <div class="overlay-content p-4">
                                <div class="text-content fs-5">
                                    Classes at Madresatul Atfaal Almuslimeen (MAA) also begin in September and run until
                                    June of the
                                    following year. Registration begins mid-August and admission is on a first come, first
                                    serve basis,
                                    thus we encourage applicants to register early.
                                    Applications will only be processed upon the completion of the appropriate registration
                                    form and
                                    payment of both the registration fee and the first month’s tuition fee. Additional
                                    documents may be
                                    required (see below).
                                    <br>
                                    First Time?<br>
                                    First time registrants must also bring the following:<br>
                                    <ul>
                                        <li>Copy of the student’s birth certificate</li>
                                        <li>Student’s record of immunization</li>
                                        <li>Information about medical history (allergies, medical conditions, required
                                            medications)</li>
                                        <li>Two passport size photos taken recently</li>
                                        <li>Copy of the student’s last report card from the last school attended</li>
                                    </ul>

                                    <button class="register-form mt-5" @click="goToRegistrationForms">Registration
                                        Forms</button>
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
    name: 'MMARegistration',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
    methods: {
        goToRegistrationForms() {
            this.$router.push('/mba-registration-forms');
        }
    }
}
</script>
  
<style scoped>
.register-form {
    padding: 0 10px 0 10px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #700000;
    color: #EBE3D8;
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.28px;
    cursor: pointer;
}

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
}</style>
  