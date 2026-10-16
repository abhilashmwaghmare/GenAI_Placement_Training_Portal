(() => {
  'use strict';
  const resourcesHTML = () => `
    <section class="page-head">
      <span class="tag">CAREER PROFILE STUDIO</span>
      <h2>Realistic Resume + Naukri + LinkedIn Templates</h2>
      <p>Canva-inspired, recruiter-friendly examples for GenAI fresher and experienced candidates. Open, edit the sample content and replace it with truthful candidate information.</p>
      <div class="sample-warning">⚠ TRAINING TEMPLATE — Names, contacts, links, experience and metrics are sample data. Never copy claims you cannot prove.</div>
    </section>
    <section class="resource-section">
      <div class="resource-title"><span class="eyebrow">01 · RESUME STUDIO</span><h3>Choose a resume template</h3><p>Use a visual Canva-style layout for presentation, then keep the content ATS-friendly and factual.</p></div>
      <div class="template-grid">
        <article class="template-card featured"><div class="template-preview dark-preview"><div class="mini-side"><b>AARAV</b><small>GENAI ENGINEER</small></div><div><strong>Modern GenAI Fresher</strong><span>Two-column · skills · projects · education</span></div></div><div class="template-body"><span class="template-badge">FRESHER · MODERN</span><h4>Modern Canva-style</h4><p>Strong visual hierarchy for a fresher with projects and technical skills.</p><a href="./assets/resumes/fresher-modern-canva.html" target="_blank" class="primary resource-link">Open Template →</a></div></article>
        <article class="template-card"><div class="template-preview clean-preview"><strong>AARAV SHARMA</strong><span>GENAI ENGINEER | RAG | LLM</span><i></i><small>Profile · Projects · Skills · Education</small></div><div class="template-body"><span class="template-badge">FRESHER · MINIMAL</span><h4>Minimal Canva-style</h4><p>Clean one-page layout designed for quick recruiter scanning.</p><a href="./assets/resumes/fresher-minimal-canva.html" target="_blank" class="primary resource-link">Open Template →</a></div></article>
        <article class="template-card"><div class="template-preview exec-preview"><strong>RIYA MEHTA</strong><span>SENIOR GENAI / LLM ENGINEER</span><div>4+ YEARS · RAG · AGENTS · FASTAPI</div></div><div class="template-body"><span class="template-badge">EXPERIENCED · EXECUTIVE</span><h4>Executive Canva-style</h4><p>Leadership-oriented format for experienced GenAI engineers.</p><a href="./assets/resumes/experienced-executive-canva.html" target="_blank" class="primary resource-link">Open Template →</a></div></article>
        <article class="template-card"><div class="template-preview ats-preview"><strong>RIYA MEHTA</strong><span>GENAI ENGINEER | LLM | RAG | AGENTIC AI</span><div>SUMMARY · SKILLS · EXPERIENCE · PROJECTS</div></div><div class="template-body"><span class="template-badge">EXPERIENCED · ATS</span><h4>ATS + Canva-style</h4><p>More conservative structure for ATS-heavy applications.</p><a href="./assets/resumes/experienced-ats-canva.html" target="_blank" class="primary resource-link">Open Template →</a></div></article>
      </div>
    </section>
    <section class="resource-section">
      <div class="resource-title"><span class="eyebrow">02 · NAUKRI PROFILE</span><h3>100% Naukri profile blueprint</h3><p>Complete the profile in the same order used during the placement training workflow.</p></div>
      <div class="profile-studio"><div class="profile-meter"><b>100%</b><span>Profile completion target</span><div><i></i></div></div><div class="profile-points"><span>✓ Basic details</span><span>✓ Headline</span><span>✓ Summary</span><span>✓ Key skills</span><span>✓ Projects</span><span>✓ Education</span><span>✓ Resume</span><span>✓ Job preferences</span><span>✓ Links</span><span>✓ Contact details</span><span>✓ Profile visibility</span><span>✓ Final consistency check</span></div><a href="./assets/profiles/naukri-100-percent.html" target="_blank" class="primary resource-link">Open Full Naukri 100% Profile →</a></div>
    </section>
    <section class="resource-section">
      <div class="resource-title"><span class="eyebrow">03 · LINKEDIN PROFILE</span><h3>100% LinkedIn profile blueprint</h3><p>Build a recruiter-readable profile where headline, About, Experience, Featured, Education and Skills tell one consistent story.</p></div>
      <div class="profile-studio linkedin-studio"><div class="profile-points"><span>✓ Professional photo</span><span>✓ Headline</span><span>✓ About</span><span>✓ Experience</span><span>✓ Education</span><span>✓ Skills</span><span>✓ Featured projects</span><span>✓ Contact info</span><span>✓ Open-to-work preferences</span><span>✓ Custom URL</span><span>✓ Project links</span><span>✓ Resume consistency</span></div><a href="./assets/profiles/linkedin-100-percent.html" target="_blank" class="primary resource-link">Open Full LinkedIn 100% Profile →</a></div>
    </section>
    <section class="resource-section">
      <div class="resource-title"><span class="eyebrow">04 · PROFILE ALIGNMENT</span><h3>One candidate story across all platforms</h3></div>
      <div class="alignment"><div><b>01</b><strong>Resume</strong><span>Role title, skills, projects, dates and links are truthful.</span></div><div><b>02</b><strong>Naukri</strong><span>Same target role, keywords, project names and availability.</span></div><div><b>03</b><strong>LinkedIn</strong><span>Same positioning with stronger story and project proof.</span></div><div><b>04</b><strong>Trainer Review</strong><span>Candidate can explain every keyword and project in an interview.</span></div></div>
    </section>`;
  const enhance = () => {
    const content = document.querySelector('.content');
    if (!content || document.body.dataset.resourcesEnhanced === '1') return;
    const text = content.textContent || '';
    const active = document.querySelector('.nav.active');
    if (!active || active.dataset.view !== 'resources' || !text.includes('Career Profile')) return;
    content.innerHTML = resourcesHTML();
    document.body.dataset.resourcesEnhanced = '1';
  };
  const resetOnNavigation = () => { document.body.dataset.resourcesEnhanced = '0'; setTimeout(enhance, 20); };
  new MutationObserver(() => { if (document.querySelector('.nav.active[data-view="resources"]')) enhance(); else document.body.dataset.resourcesEnhanced = '0'; }).observe(document.getElementById('app'), {subtree:true, childList:true});
  document.addEventListener('click', e => { if (e.target.closest('[data-view]')) resetOnNavigation(); });
  setTimeout(enhance, 250);
})();
