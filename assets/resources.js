(() => {
  const app = document.getElementById('app');
  if (!app) return;
  const base = './assets/';
  const html = `
  <section class="page-head"><span class="tag">PLACEMENT RESOURCES</span><h2>GenAI Career Profile & Sample Library</h2><p>CloudBlitz training references for resumes, Naukri and LinkedIn. These are sample profiles with placeholder contact details; students should replace them with truthful information.</p></section>
  <div class="resource-grid">
    <article><span class="resource-icon">CV</span><b>FRESHER RESUME</b><h3>Sample GenAI Fresher Resume</h3><p>ATS-friendly sample covering LLM, RAG, LangChain, LangGraph, FastAPI, Vector DB and projects.</p><a class="primary resource-link" href="${base}resumes/fresher-resume.html" target="_blank">View Resume →</a></article>
    <article><span class="resource-icon">CV</span><b>EXPERIENCED RESUME</b><h3>Sample GenAI Experienced Resume</h3><p>Experienced profile example with professional summary, production-oriented responsibilities and GenAI project work.</p><a class="primary resource-link" href="${base}resumes/experienced-resume.html" target="_blank">View Resume →</a></article>
    <article><span class="resource-icon">N</span><b>NAUKRI PROFILE</b><h3>Sample Naukri Profile</h3><p>Profile headline, key skills, summary, projects, preferences and completion example.</p><a class="primary resource-link" href="${base}profiles/naukri-sample.html" target="_blank">Open Naukri Sample →</a></article>
    <article><span class="resource-icon">in</span><b>LINKEDIN PROFILE</b><h3>Sample LinkedIn Profile</h3><p>Headline, About, Experience, Featured, Skills and profile checklist for a GenAI candidate.</p><a class="primary resource-link" href="${base}profiles/linkedin-sample.html" target="_blank">Open LinkedIn Sample →</a></article>
  </div>
  <section class="section"><div class="section-head"><div><span class="eyebrow">SCREENSHOT REFERENCE LIBRARY</span><h3>Sample Naukri & LinkedIn Screenshots</h3><p>Use these mock screenshots as visual references while students complete their real profiles.</p></div></div>
  <div class="screenshot-grid">
    <a class="shot" href="${base}screenshots/naukri-header.svg" target="_blank"><img src="${base}screenshots/naukri-header.svg" alt="Sample Naukri profile header"><b>Naukri · Profile Header</b><span>Headline · location · completion</span></a>
    <a class="shot" href="${base}screenshots/naukri-skills.svg" target="_blank"><img src="${base}screenshots/naukri-skills.svg" alt="Sample Naukri skills"><b>Naukri · Key Skills</b><span>GenAI keyword skills</span></a>
    <a class="shot" href="${base}screenshots/naukri-projects.svg" target="_blank"><img src="${base}screenshots/naukri-projects.svg" alt="Sample Naukri projects"><b>Naukri · Projects</b><span>Project descriptions</span></a>
    <a class="shot" href="${base}screenshots/linkedin-profile.svg" target="_blank"><img src="${base}screenshots/linkedin-profile.svg" alt="Sample LinkedIn profile"><b>LinkedIn · Profile Overview</b><span>Headline · About · Experience</span></a>
    <a class="shot" href="${base}screenshots/linkedin-featured.svg" target="_blank"><img src="${base}screenshots/linkedin-featured.svg" alt="Sample LinkedIn featured"><b>LinkedIn · Featured & Skills</b><span>Project showcase · skills</span></a>
  </div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">FINAL CHECK</span><h3>Profile Alignment</h3></div></div><div class="quick"><div class="quick-card light"><span>RESUME</span><h3>Truthful & ATS-friendly</h3><p>Contact details, summary, skills, projects, education, certifications, GitHub and LinkedIn are aligned.</p></div><div class="quick-card orange"><span>NAUKRI</span><h3>100% complete</h3><p>Latest resume, role keywords, skills, projects, preferences, notice period and availability are accurate.</p></div><div class="quick-card dark"><span>LINKEDIN</span><h3>Professional & consistent</h3><p>Headline, About, Experience, Projects, Skills, Certifications, GitHub and resume remain consistent.</p></div></div></section>`;
  function enhance(){ const active=app.querySelector('.nav.active'); if(active && active.dataset.view==='resources'){ const content=app.querySelector('.content'); if(content && !content.dataset.enhanced){content.innerHTML=html;content.dataset.enhanced='true';}} }
  new MutationObserver(enhance).observe(app,{childList:true,subtree:true});
  setTimeout(enhance,0);
})();