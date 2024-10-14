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
                                <div class="text-content fs-5 m-3">
                                    <h2 class="fs-1">Employment</h2>
                                    Thank you for your interest in employment at our institution.We are continually looking
                                    for highly
                                    qualified, dedicated staff to join our team. If you are committed to improving student
                                    learning and
                                    making a positive contribution to your community, you are invited to fill in the
                                    application form
                                    online and submit your resumé.
                                    <br><br>
                                    We always retain all resumes and applications on file. Please note, however, that only
                                    those
                                    applicants whose qualifications match our needs will be contacted for an interview when
                                    any
                                    opportunities arise.
                                    <br>
                                    <h3 class="fs-3 mt-5">CURRENT EMPLOYMENT OPPORTUNITIES:</h3>
                                    <div class="opportunities fs-6 m-2 p-3">
                                        For: 2021 / 2022 School Year<br>
                                        Self-motivated and passionate full time female teachers are required.<br>
                                        We are currently hiring teachers for our elementary and secondary school for all
                                        subjects.<br>
                                        Apply by phone: 416-244-8600 (Mon – Fri 8am – 4pm)<br>
                                        or email: muslimgirlsschool@yahoo.com<br>
                                        Please apply ASAP<br>
                                        Qualifications:
                                        <ul>
                                            <li>Bachelor degree from a credited institution</li>
                                            <li>Experience in teaching</li>
                                            <li>Ontario Teaching Certificate an asset</li>
                                            <li>Familiar with the Ontario Curriculum</li>
                                            <li>Fluent in English and French</li>
                                            <li>Excellent classroom management skills</li>
                                            <li>Excellent written and oral communication skills</li>
                                            <li>Basic computer skills</li>
                                            <li>Team player</li>
                                            <li>Strong work ethic</li>
                                            <li>Punctual</li>
                                            <li>Excellent organization and time management skills</li>
                                        </ul>
                                        Main Job Responsibilities:
                                        <ul>
                                            <li>Create and professionally maintain a teacher’s binder for each course
                                                according to
                                                school policies, which will include: course outlines, long-term and daily
                                                lesson plans,
                                                assessment and evaluation, grade records, student profile</li>
                                            <li>Plan, prepare and deliver instructional activities according to Ministry of
                                                Education
                                                and school requirements</li>
                                            <li>Assess and evaluate student performance throughout the year according to the
                                                Ministry of
                                                Education and school requirements</li>
                                            <li>Prepare required reports of student performance</li>
                                            <li>Create a positive learning environment for students</li>
                                            <li>Manage student behavior in class professionally and according to school
                                                policies</li>
                                            <li>Attend staff meetings and professional development sessions</li>
                                            <li>Perform supervision duties when required</li>
                                            <li>Supervise co-curricular activities during and outside school hours as
                                                required (e.g.
                                                field trips, student clubs, graduation)</li>
                                        </ul>
                                        Please send your resume to madresatul@yahoo.com.
                                        <br>
                                        Jazak Allah Khair
                                    </div>
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
    name: 'Employment',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
}
</script>
  
<style scoped>
.opportunities {
    background: #EBE3D8;
    color: rgba(0, 0, 0, 0.52);
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.2px;
}

.text-content h2 {
    color: #700000;
    font-family: Merriweather;
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0.48px;
}

.text-content h3 {
    color: #700000;
    font-family: Merriweather;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.24px;
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
  