<template>
    <div>
        <AppHeader />
        <AppNav />

        <div class="container mb-5 mt-5">
            <div class="row justify-content-center">
                <div class=" col-12  col-md-12 mx-0">
                    <div class="message">
                        <div class="overlay-message">
                            <div class="overlay-content container">
                                <div class="row special">
                                    <div class="col-12 ">
                                        <div class="col-12">
                                            <div class="contact-info mx-3 my-5 fs-4">
                                                <h2 class="fs-2">Contact</h2>
                                                <p>10 Vulcan St., Etobicoke ON M9W 1L2</p>
                                                <p>Tel (416) 244 8600<br>Fax (416) 244 0059</p>
                                                <p>E-mail: info@muslimgirlsschool.com</p>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="contact-map">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2438914137856!2d-79.58100562262858!3d43.705480349046304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a175e55f4e9%3A0x5aecdbf83e7811b4!2s10%20Vulcan%20St%2C%20Toronto%2C%20ON%20M9W%201L2%2C%20Canada!5e0!3m2!1sen!2sus!4v1702249498948!5m2!1sen!2sus"
                                                    width="600" height="450" style="border:0;" allowfullscreen=""
                                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </div>
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
    name: 'Contact',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
}
</script>
  
<style scoped>
.contact-info {
    /* Adjust spacing as needed */
    color: rgba(0, 0, 0, 0.52);
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.24px;

}

.contact-info h2 {
    color: #700000;
    ;
    font-family: Merriweather;
    font-style: normal;
    font-weight: 700;

    letter-spacing: 0.48px;
}


iframe {
    width: 100%;
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

.special{
    width: 100%;
}
.message {
    z-index: 1;
    position: relative;
    left: 50%;
    border: 4px solid #700000;
    transform: translate(-50%, 0%);
}
</style>
  