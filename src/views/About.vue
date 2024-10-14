<template>
    <div>
        <AppHeader />
        <AppNav />
        <div class="message">
            <div class="overlay-message">
                <div class="overlay-content">
                    <div class="text-content">
                        Alhamdulillah, Madresatul Banaat Almuslimaat, the first Islamic high school in Toronto, dedicated to
                        providing both the Ontario curriculum and an Islamic education for girls only, was established in
                        1993.<br><br>
                        It began with a vision…to organize an institution for the education of Muslim girls in an Islamic
                        environment. Beginning with a small school with only 4 classrooms, we have expanded over the years
                        to what is now a full facility school with two floors, offering education from JK-Grade 12.<br><br>
                        Alhamdulillah, we are serving a population of ~5, 000 Muslims in the immediate vicinity of the
                        school (Etobicoke). In addition to this, many of our students travel from our neighbouring cities
                        such as Mississauga, Brampton, Richmond Hill, Barrie and Woodbridge to attend our school. Our
                        students come from a diverse array of families and ethnic backgrounds. As a non-profit, charitable
                        organization, we also offer education to orphans and children from single mothers, widows, or less
                        fortunate parents, who are helped through our Zakaat fund.<br><br>
                        Our school facilities are also being used by other members of our community for programs such as
                        Arabic language studies, which are held at our school on the weekends.
                    </div>
                </div>
                <br><br>
            </div>
        </div>
        <AppFooter/>
    </div>
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue'; // Update the import paths as necessary
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
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
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.24px;
    margin-bottom: 1em;
    /* Adjust as needed for spacing between paragraphs */
}



.overlay-content {
    padding: 80px;
    display: flex;
    /* Enable Flexbox */
    justify-content: space-between;
    /* Space between the text and image */
    align-items: flex-start;
    /* Align items to the flex-start of the flex container */
}

.overlay-message {
    width: 1267px;
    height: 830px;
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
    width: 1290px;
    height: 800px;
    border: 4px solid #700000;
    transform: translate(-50%, 5%);
    /* This will center the element */
    margin-bottom: 145px;
}

</style>
  