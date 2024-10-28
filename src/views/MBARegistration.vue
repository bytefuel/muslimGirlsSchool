<template>
    <div class="about">
      <AppHeader />
      <AppNav />
  
      <div class="container mb-5 mt-5">
        <div class="row justify-content-center">
          <div class="col-12 mx-0">
            <div class="message">
              <div class="overlay-message">
                <div class="overlay-content p-4">
                  <div class="text-content fs-5">
                    Classes at Madresatul Banaat Almuslimaat (MBA) begin in September and run until June of the following year.
                    Registration begins mid-August and admission is on a first come, first serve basis, thus we encourage applicants to register early.
                    Applications will only be processed upon the completion of the appropriate registration form and payment of both the registration fee and the first month’s tuition fee. Additional documents may be required (see below).
                    <br />
                    First Time?<br />
                    First time registrants must also bring the following:<br />
                    <ul>
                      <li>Copy of the student’s birth certificate</li>
                      <li>Student’s record of immunization</li>
                      <li>Information about medical history (allergies, medical conditions, required medications)</li>
                      <li>Two passport size photos taken recently</li>
                      <li>Copy of the student’s last report card from the last school attended (Gr. 6-8 students)</li>
                      <li>Copy of the latest transcript from the last school attended (Gr.9-12 students only)</li>
                    </ul>
  
                    <button class="register-form mt-5" @click="downloadRegistrationForm">Registration Forms</button>
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
    name: 'MBARegistration',
    components: {
      AppHeader,
      AppNav,
      AppFooter,
    },
    methods: {
      downloadRegistrationForm() {
        // URL to the PDF form file
        const pdfUrl = '/mba-registration-form.pdf'; // Make sure to set the correct path to your PDF
  
        // Create an anchor element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'MBA_RegistrationForm.pdf'); // Specify the name of the file to be downloaded
  
        // Append the anchor to the body
        document.body.appendChild(link);
  
        // Trigger the download by simulating a click event
        link.click();
  
        // Remove the anchor element after the download
        document.body.removeChild(link);
      }
    }
  };
  </script>
  
  <style scoped>
  .register-form {
    padding: 0 10px;
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
    color: rgba(0, 0, 0, 0.78);
    font-family: Raleway;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.24px;
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
    transform: translate(-50%, 0%);
  }
  </style>
  