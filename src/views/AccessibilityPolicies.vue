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
                <div class="text-content p-4">
                  <div class="content">
                    <section v-for="(mainSection, mainIndex) in contentSections" :key="mainIndex" class="main-section">
                      <h1 class="fs-1 mt-5">{{ mainSection.mainHeading }}</h1>
                      <article v-for="(subSection, subIndex) in mainSection.subSections" :key="subIndex"
                        class="sub-section">
                        <h2 class="fs-3 m-3">{{ subSection.heading }}</h2>
                        <p class="fs-6 mx-5 my-3" v-for="(paragraph, pIndex) in subSection.paragraphs" :key="`p-${pIndex}`">{{ paragraph }}</p>
                      </article>
                    </section>
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
  name: 'AccessibilityPolicies',
  components: {
    AppHeader,
    AppNav,
    AppFooter
  },
  data() {
    return {
      contentSections: [
        {
          mainHeading: 'Objectives',
          subSections: [
            {
              heading: '',
              paragraphs: [
                'Our objective is to establish procedures that will welcome all members of the school and general community to our institution, including people with disabilities, to the extent which our facilities allow. Our institution is committed to improving accessibility. We will put the following policies intopractice as required by the Accessibility for Ontarians with Disabilities Act',
              ]
            },
            {
              heading: 'General',
              paragraphs: [
                'Madresatul Banaat Almuslimaat is committed to training staff on Ontario’s accessibility laws and on accessibility aspects of the Human Rights Code that apply to persons with disabilities. Training will be provided in a way that best suits the duties of employees, volunteers and other staff members.',
              ]
            },
            {
              heading: 'Customer Service',
              paragraphs: [
                'Madresatul Banaat Almuslimaat is committed to providing services to students, parents/guardians, and the public that are free of barriers and biases. We will make reasonable efforts to ensure that all policies, practices and procedures are consistent with the principles of independence, dignity, integration, and equal opportunity.',
              ]
            },
          ]
        },
        {
          mainHeading: 'Information & Communications',
          subSections: [
            {
              heading: '',
              paragraphs: [
                'Madresatul Banaat Almuslimaat is committed to meeting the communication needs of people with disabilities. When requested, we will provide information and communications materials in accessible formats or with communication supports. This includes publicly available information about our goods, services and facilities, as well as publicly available emergency information.',
              ]
            },
            {
              heading: 'Employment',
              paragraphs: [
                'Madresatul Banaat Almuslimaat will notify the public and staff that, when requested, we will accommodate disabilities during recruitment and assessment processes and when people are hired. If needed, we will provide customized workplace emergency information to employeeswho have a disability. If using performance management, career development and redeployment processes, we will take into account the accessibility needs of employees with disabilities.',
                'For information on accommodations during the application process at MBA, please contact us at madresatul@yahoo.com for further support.'
              ]
            },
          ]
        },
        {
          mainHeading: 'Transportation',
          subSections: [
            {
              heading: '',
              paragraphs: [
                'Every school year, Madresatul Banaat Almuslimaat transports students on field trips.We will provide integrated accessible school transportation, where possible, or alternative accessible transportation services for students with disabilities, consulting with parents/guardians of students with disabilities.',
              ]
            },
            {
              heading: 'Design of Public Spaces',
              paragraphs: [
                'Madresatul Banaat Almuslimaat will meet the Accessibility Standards for the Design of Public Spaces when building or making major modifications to public spaces such as parking facilities, outdoor pedestrian walkways, and outdoor play areas. There will also be access to accessible washrooms. Any of our policies that do not respect and promote the dignity and independence of people with disabilities will be modified or removed.',

              ]
            },
          ]
        },
      ]
    };
  },
}
</script>
  
<style scoped>
.main-section h1 {
  color: #700000;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0.32px;
}


.sub-section h2 {
  color: #700000;
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.24px;
}

.sub-section p {
  color: rgba(0, 0, 0, 0.78);
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
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
  