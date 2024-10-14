<template>
    <div >
        <AppHeader />
        <AppNav />
        <div class="container">
            <div class="row">
                <div class="col mx-auto">
                    <div class="message">
            <div class="overlay-message">
                <div class="overlay-content p-4">
                    <div class="text-content fs-4">
                        All of our students, from Junior Kindergarten to grade 12, are taught the complete syllabus of the
                        Ontario curriculum as required by the Ontario Ministry of Education. Our students gain knowledge in
                        a variety of subjects such as math, science, computers, English and the arts; we give importance to
                        teaching these subjects within an Islamic context, where possible.
                        More importantly, we emphasize imparting religious education to our students in addition to the
                        approved curriculum of the Ontario Ministry of Education. Our students obtain sound religious
                        education mainly through daily taleem, and through our formal Islamic studies curriculum which
                        includes the study of Arabic, the Quran and various areas of Islam such as:
                        <ul>
                            <li>Islamic Tadhib and Akhlaq (Etiquette)</li>
                            <li>Seerah [Biography of the Prophet Muhammad (SAW)]</li>
                            <li>Fiqh (Islamic jurisprudence)</li>
                            <li>Tafseer of the Quran (Translation and commentary of the Quran)</li>
                            <li>Ahadith [(sayings of the Prophet Muhammad (SAW)] and</li>
                        </ul>
                        Also, our students and staff collectively offer Zuhr and Jumu’ah prayers in our gymnasium on a
                        regular basis.
                        In addition to the core curriculum mentioned above, we also offer the following specialized programs
                        and activities at our institution:
                        <div class="program" v-for="program in programs" :key="program.name">
                            <h2>{{ program.name }}</h2>
                            <p v-for="(paragraph, index) in program.descriptions" :key="index">{{ paragraph }}</p>
                        </div>

                        Each year, our students also participate in the following:
                        <ul>
                            <li>Educational field trips</li>
                            <li>Eid activities (assemblies, contests and more)</li>
                            <li>School science fair</li>
                            <li>Contests (such as Spelling, Islamic Trivia, Colouring, Math)</li>
                            <li>Inter-Islamic school competitions and more</li>
                        </ul>
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
import AppHeader from '@/components/AppHeader.vue'; 
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Covid19',
    components: {
        AppHeader,
        AppNav,
        AppFooter
    },
    data() {
        return {
            programs: [
                {
                    name: 'Quran Program',
                    descriptions: [
                        'Students are taught to read the Quran with Tajweed rules in Nazarul Quran classes in the elementary school program. With daily reading, it is our aim to encourage students to finish the Nazarul Quran within 2-3 years, often by the time they are in grade 4.',
                    ]
                },
                {
                    name: 'Hifz Program',
                    descriptions: [
                        'Established since 2001. We also have a Hifz program that is aimed for students to memorize the entire Glorious Quran. Students enrolled in this program also concurrently study English, math and science each year. Admission to this program at an early age is encouraged.'
                    ]
                },
                {
                    name: 'Summer School Program',
                    descriptions: [
                        'We also offer summer school to boys 5-10 years of age and girls 5 years and up, from July to mid August. Junior students can take Quran and Hifz classes, as well Arabic, English and math. It is also an opportunity for high school students to take remedial courses if needed.'
                    ]
                },
                {
                    name: 'Co-Curricular Activities',
                    descriptions: [
                        'The experience at Madresatul Banaat Almuslimaat is not only centred in the classroom or limited to academics. Over the years, a united student body (student council) has been established which is responsible for organizing social events at the school such as hot lunches and assemblies.'
                    ]
                },
            ]
        };
    },
}
</script>
  
<style scoped>
.program h2 {
    color: #700000;
    font-family: Merriweather;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.24px;
}

.text-content {
    color: rgba(0, 0, 0, 0.78);
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.24px;
    margin-bottom: 1em;
}

.overlay-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
    transform: translate(-50%, 5%);
   
    margin-bottom: 145px;
}


</style>
  