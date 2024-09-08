// Declare html2pdf for TypeScript
declare var html2pdf: any;




// Get form elements and resume fields
let resumeForm = document.getElementById('resume-form') as HTMLFormElement;
let  resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumePhone = document.getElementById('resume-phone') as HTMLElement;
const resumeEducation = document.getElementById('resume-education-content') as HTMLElement;
const resumeWorkExperience = document.getElementById('resume-work-experience-content') as HTMLElement;
const resumeSkillsList = document.getElementById('resume-skills-list') as HTMLElement;

const shareLinkContainer = document.getElementById('share-link-container') as HTMLElement;
const shareLink = document.getElementById('share-link') as HTMLElement;
const copyLinkButton = document.getElementById('copy-link') as HTMLButtonElement;
const downloadResumeButton = document.getElementById('download-resume') as HTMLButtonElement;

// Form submission listener
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from reloading the page

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;

    // Update resume with the new form values
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;

    // Update skills list
    const skillsArray = skills.split(',').map(skill => skill.trim());
    resumeSkillsList.innerHTML = '';  // Clear the current list
    skillsArray.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });

//     // Generate a unique URL based on username
     const uniqueUrl = `https://${username}.vercel.app/resume`;
     shareLink.textContent = uniqueUrl;

//     // Display the share link and download button
     shareLinkContainer.style.display = 'block';
     downloadResumeButton.style.display = 'block';
 });

// // Copy the shareable link to clipboard
    copyLinkButton.addEventListener('click', () => {
    const tempInput = document.createElement('input');
     document.body.appendChild(tempInput);
     tempInput.value = shareLink.textContent!;
     tempInput.select();
     document.execCommand('copy');
     document.body.removeChild(tempInput);
     alert('Link copied to clipboard!');
 });

// Download the resume as a PDF
downloadResumeButton.addEventListener('click', () => {
    const element = document.getElementById('resume-preview')!;
    html2pdf(element, {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
})



