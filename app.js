"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function generateResume() {
    const username = document.getElementById('username').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const profilePic = document.getElementById('profilePic').files?.[0];
    const maritalStatus = document.getElementById('maritalStatus').value;
    const nationality = document.getElementById('nationality').value;
    const religion = document.getElementById('religion').value;
    const cellphone = document.getElementById('cellphone').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;
    if (!username || !fullName || !profilePic) {
        alert('Please fill all required fields');
        return;
    }
    const uniqueUrl = `https://${username}.vercel.app/resume`;
    const resumeLinkElement = document.getElementById('resumeLink');
    const resumeUrlElement = document.getElementById('resumeUrl');
    resumeUrlElement.href = uniqueUrl;
    resumeUrlElement.textContent = uniqueUrl;
    resumeLinkElement.style.display = 'block';
    const resumeData = await fetchResumeData(username);
    console.log('Resume data fetched:', resumeData);
    // Save resume to a server (mockup example, implement saving logic)
    // await saveResumeToServer(resumeData);
}
async function fetchResumeData(username) {
    try {
        const response = await fetch(`https://api.example.com/resumes/${username}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching resume data:', error);
        return null;
    }
}
function downloadPDF() {
    const resumeContent = document.getElementById('resumeForm');
    const pdfWindow = window.open('', '_blank');
    pdfWindow?.document.write('<html><head><title>Resume PDF</title></head><body>');
    pdfWindow?.document.write(resumeContent.innerHTML);
    pdfWindow?.document.write('</body></html>');
    pdfWindow?.print();
}
