(() => {
  const app = document.getElementById('app');
  if (!app) return;
  const base = './assets/';
  const style = document.createElement('style');
  style.textContent = `
    .resource-link{display:inline-block!important;text-decoration:none;margin-top:12px}
    .sample-note{margin:18px 0;padding:14px 16px;border:1px solid #fed7aa;border-left:4px solid #f97316;border-radius:10px;background:#fff7ed;color:#7c2d12;font-size:13px}
    .career-flow{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:20px 0}.career-step{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:18px;position:relative}.career-step strong{display:block;color:#f97316;font-size:12px;letter-spacing:.08em}.career-step h4{margin:8px 0 5px}.career-step p{margin:0;color:#667085;font-size:12px;line-height:1.5}.career-step:not(:last-child):after{content:'→';position:absolute;right:-13px;top:43%;z-index:2;color:#f97316;font-weight:800}
    .resource-grid article{position:relative}.resource-grid article .resource-link{min-height:18px}
    .compare-table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}.compare-table th,.compare-table td{padding:13px 15px;text-align:left;border-bottom:1px solid #eef0f3;font-size:13px;vertical-align:top}.compare-table th{background:#111827;color:#fff}.compare-table tr:last-child td{border-bottom:0}
    .checklist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.check-item{display:flex;gap:10px;align-items:flex-start;padding:14px;background:#fff;border:1px solid #e5e7eb;border-radius:12px}.check-item input{accent-color:#f97316;margin-top:3px}.check-item b{display:block}.check-item span{display:block;color:#667085;font-size:12px;margin-top:3px}
    .screenshot-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.shot{display:block;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:10px;color:inherit;text-decoration:none;box-shadow:0 8px 25px #0000000b;cursor:zoom-in}.shot img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:9px;background:#f3f4f6}.shot b{display:block;margin:12px 4px 4px}.shot span{display:block;margin:0 4px 5px;color:#667085;font-size:12px}
    .lightbox{position:fixed;inset:0;background:#111827eF;display:none;align-items:center;justify-content:center;padding:25px;z-index:9999}.lightbox.open{display:flex}.lightbox img{max-width:95vw;max-height:88vh;background:white;border-radius:12px;box-shadow:0 20px 60px #0008}.lightbox button{position:fixed;right:24px;top:18px;background:#f97316;color:#fff;border:0;border-radius:9px;padding:10px 14px;font-weight:800;cursor:pointer}
    .resume-actions{display:flex;gap:8px;flex-wrap:wrap}.secondary-link{display:inline-block;padding:10px 14px;border:1px solid #e5e7eb;border-radius:9px;text-decoration:none;color:inherit;font-weight:700;font-size:12px}
    @media(max-width:900px){.career-flow{grid-template-columns:1fr 1fr}.career-step:not(:last-child):after{display:none}.screenshot-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.checklist{grid-template-columns:1fr}}
    @media(max-width:600px){.career-flow,.screenshot-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const checklist = [
    ['Resume', 'Name, contact details, summary, skills, projects and links are accurate.'],
    ['ATS Keywords', 'Use only GenAI keywords you can explain in an interview.'],
    ['LinkedIn', 'Headline, About, Experience, Projects and Skills match the resume.'],
    ['Naukri', 'Latest resume, headline, skills, projects, preferences and availability are updated.'],
    ['GitHub', 'Projects have a clean README, architecture, setup steps and working links.'],
    ['Consistency', 'Role title, technologies, project names and experience claims match everywhere.'],
    ['Interview', 'You can explain every skill and project without reading the resume.'],
    ['Trainer Review', 'Complete trainer review before marking the profile placement-ready.']
  ];

  const html = `
  <section class="page-head"><span class="tag">PLACEMENT RESOURCES</span><h2>GenAI Career Profile & Sample Library</h2><p>CloudBlitz training references for resumes, Naukri and LinkedIn. Follow the workflow: <b>See Example → Build → Check → Trainer Review</b>.</p></section>
  <div class="sample-note"><b>TRAINING SAMPLES — DO NOT COPY PERSONAL DETAILS.</b><br>Replace every placeholder with truthful information. Add only skills, experience and projects that the candidate can confidently explain in an interview.</div>

  <section class="section"><div class="section-head"><div><span class="eyebrow">DAY 2 PRACTICAL WORKFLOW</span><h3>Build Your Placement Profile</h3></div></div><div class="career-flow">
    <div class="career-step"><strong>01</strong><h4>Resume</h4><p>Choose Fresher or Experienced format and create your ATS-ready resume.</p></div>
    <div class="career-step"><strong>02</strong><h4>LinkedIn</h4><p>Align headline, About, Experience, Featured Projects and Skills.</p></div>
    <div class="career-step"><strong>03</strong><h4>Naukri</h4><p>Update resume, headline, skills, projects and job preferences.</p></div>
    <div class="career-step"><strong>04</strong><h4>Consistency</h4><p>Compare Resume → LinkedIn → Naukri → GitHub before submission.</p></div>
    <div class="career-step"><strong>05</strong><h4>Review</h4><p>Trainer checks profile quality and placement readiness.</p></div>
  </div></section>

  <section class="section"><div class="section-head"><div><span class="eyebrow">RESUME LIBRARY</span><h3>Sample GenAI Resumes</h3><p>Use the correct example based on candidate experience level.</p></div></div><div class="resource-grid">
    <article><span class="resource-icon">CV</span><b>FRESHER</b><h3>Sample GenAI Fresher Resume</h3><p>ATS-friendly sample covering LLM, RAG, LangChain, LangGraph, FastAPI, Vector DB and project work.</p><div class="resume-actions"><a class="primary resource-link" href="${base}resumes/fresher-resume.html" target="_blank">View Resume →</a><a class="secondary-link" href="${base}resumes/fresher-resume.html" target="_blank">Print / Save PDF</a></div></article>
    <article><span class="resource-icon">CV</span><b>EXPERIENCED</b><h3>Sample GenAI Experienced Resume</h3><p>Professional profile example with production-oriented responsibilities, GenAI experience and selected projects.</p><div class="resume-actions"><a class="primary resource-link" href="${base}resumes/experienced-resume.html" target="_blank">View Resume →</a><a class="secondary-link" href="${base}resumes/experienced-resume.html" target="_blank">Print / Save PDF</a></div></article>
  </div></section>

  <section class="section"><div class="section-head"><div><span class="eyebrow">PROFILE EXAMPLES</span><h3>Naukri & LinkedIn Samples</h3><p>Open the complete visual sample before creating the student's real profile.</p></div></div><div class="resource-grid">
    <article><span class="resource-icon">N</span><b>NAUKRI</b><h3>Sample Naukri Profile</h3><p>Headline, profile completion, key skills, summary, projects, notice period and preferred locations.</p><a class="primary resource-link" href="${base}profiles/naukri-sample.html" target="_blank">Open Naukri Sample →</a></article>
    <article><span class="resource-icon">in</span><b>LINKEDIN</b><h3>Sample LinkedIn Profile</h3><p>Headline, About, Experience, Featured project, Skills and professional profile checklist.</p><a class="primary resource-link" href="${base}profiles/linkedin-sample.html" target="_blank">Open LinkedIn Sample →</a></article>
  </div></section>

  <section class="section"><div class="section-head"><div><span class="eyebrow">FRESHER VS EXPERIENCED</span><h3>Resume Positioning Guide</h3></div></div><table class="compare-table"><thead><tr><th>Area</th><th>Fresher</th><th>Experienced</th></tr></thead><tbody>
    <tr><td><b>Summary</b></td><td>Training, projects, technical foundation and target GenAI role.</td><td>Years of experience, production ownership, impact and GenAI specialization.</td></tr>
    <tr><td><b>Experience</b></td><td>Internships, academic work and relevant project experience.</td><td>Professional roles with responsibilities, outcomes and measurable impact.</td></tr>
    <tr><td><b>Projects</b></td><td>Show hands-on GenAI implementation and GitHub evidence.</td><td>Show architecture, scale, reliability, optimization and business impact where truthful.</td></tr>
    <tr><td><b>Keywords</b></td><td>LLM, RAG, LangChain, LangGraph, FastAPI, Vector DB, Prompt Engineering, MCP.</td><td>Same core skills plus relevant production, system design, evaluation and deployment experience.</td></tr>
  </tbody></table></section>

  <section class="section"><div class="section-head"><div><span class="eyebrow">SCREENSHOT REFERENCE LIBRARY</span><h3>Sample Naukri & LinkedIn Screenshots</h3><p>Click any screenshot to open a larger classroom view.</p></div></div><div class="screenshot-grid">
    <a class="shot" data-shot="${base}screenshots/naukri-header.svg"><img src="${base}screenshots/naukri-header.svg" alt="Sample Naukri profile header"><b>Naukri · Profile Header</b><span>Headline · location · completion</span></a>
    <a class="shot" data-shot="${base}screenshots/naukri-skills.svg"><img src="${base}screenshots/naukri-skills.svg" alt="Sample Naukri skills"><b>Naukri · Key Skills</b><span>GenAI keyword skills</span></a>
    <a class="shot" data-shot="${base}screenshots/naukri-projects.svg"><img src="${base}screenshots/naukri-projects.svg" alt="Sample Naukri projects"><b>Naukri · Projects</b><span>Project descriptions</span></a>
    <a class="shot" data-shot="${base}screenshots/linkedin-profile.svg"><img src="${base}screenshots/linkedin-profile.svg" alt="Sample LinkedIn profile"><b>LinkedIn · Profile Overview</b><span>Headline · About · Experience</span></a>
    <a class="shot" data-shot="${base}screenshots/linkedin-featured.svg"><img src="${base}screenshots/linkedin-featured.svg" alt="Sample LinkedIn featured"><b>LinkedIn · Featured & Skills</b><span>Project showcase · skills</span></a>
  </div></section>

  <section class="section"><div class="section-head"><div><span class="eyebrow">PLACEMENT-READY CHECKLIST</span><h3>Complete Before Trainer Review</h3><p>Checklist is saved in this browser for the current student/trainer session.</p></div></div><div class="checklist">${checklist.map((x,i)=>`<label class="check-item"><input type="checkbox" data-profile-check="${i}"><div><b>${x[0]}</b><span>${x[1]}</span></div></label>`).join('')}</div></section>

  <div class="lightbox" id="resource-lightbox" role="dialog" aria-modal="true" aria-label="Screenshot preview"><button id="close-lightbox">Close ✕</button><img id="lightbox-img" alt="Expanded training screenshot"></div>`;

  function enhance(){
    const active=app.querySelector('.nav.active');
    if(active && active.dataset.view==='resources'){
      const content=app.querySelector('.content');
      if(content && !content.dataset.enhanced){
        content.innerHTML=html;
        content.dataset.enhanced='true';
        const box=content.querySelector('#resource-lightbox'), img=content.querySelector('#lightbox-img');
        content.querySelectorAll('[data-shot]').forEach(card=>card.addEventListener('click',e=>{e.preventDefault();img.src=card.dataset.shot;box.classList.add('open');}));
        content.querySelector('#close-lightbox').addEventListener('click',()=>box.classList.remove('open'));
        box.addEventListener('click',e=>{if(e.target===box)box.classList.remove('open');});
        const key='cloudblitz-genai-profile-check-v1'; let saved={}; try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch{}
        content.querySelectorAll('[data-profile-check]').forEach(c=>{const k=c.dataset.profileCheck;c.checked=!!saved[k];c.addEventListener('change',()=>{saved[k]=c.checked;localStorage.setItem(key,JSON.stringify(saved));});});
      }
    }
  }
  new MutationObserver(enhance).observe(app,{childList:true,subtree:true});
  setTimeout(enhance,0);
})();