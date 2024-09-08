"use strict";
// Get form elements and resume fields
var resumeForm = document.getElementById('resume-form');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumePhone = document.getElementById('resume-phone');
var resumeEducation = document.getElementById('resume-education-content');
var resumeWorkExperience = document.getElementById('resume-work-experience-content');
var resumeSkillsList = document.getElementById('resume-skills-list');
var shareLinkContainer = document.getElementById('share-link-container');
var shareLink = document.getElementById('share-link');
var copyLinkButton = document.getElementById('copy-link');
var downloadResumeButton = document.getElementById('download-resume');
// Form submission listener
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var username = document.getElementById('username').value;
    // Update resume with the new form values
    resumeName.textContent = name;
    resumeEmail.textContent = "Email: ".concat(email);
    resumePhone.textContent = "Phone: ".concat(phone);
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;
    // Update skills list
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    resumeSkillsList.innerHTML = ''; // Clear the current list
    skillsArray.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });
    //     // Generate a unique URL based on username
    var uniqueUrl = "https://".concat(username, ".vercel.app/resume");
    shareLink.textContent = uniqueUrl;
    //     // Display the share link and download button
    shareLinkContainer.style.display = 'block';
    downloadResumeButton.style.display = 'block';
});
// // Copy the shareable link to clipboard
copyLinkButton.addEventListener('click', function () {
    var tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = shareLink.textContent;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Link copied to clipboard!');
});
// Download the resume as a PDF
downloadResumeButton.addEventListener('click', function () {
    var element = document.getElementById('resume-preview');
    html2pdf(element, {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});
