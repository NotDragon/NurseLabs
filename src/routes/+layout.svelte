<script>
  import '../style.css';
  import { project, moodleUrl } from '$lib/content.js';

  const nav = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/news', 'News'],
    ['/results', 'Results'],
    ['/learning-platform', 'Learning Platform'],
    ['/contact', 'Contact']
  ];
</script>
<header>
  <a class="brand" href="/" aria-label="NURSE-LABS home">
    <img src="/logo-header.png" alt="" width="144" height="96" decoding="async" />
    <span>NURSE-LABS</span>
  </a>
  <nav aria-label="Main navigation">
    {#each nav as n}
      <a href={n[0]}>{n[1]}</a>
    {/each}
  </nav>
</header>
<slot />
<footer>
  <div class="footer-grid">
    <div>
      <b>{project.name}</b>
      <p>Project No. {project.number}</p>
      <p>Coordinator: OFTHALMOLOGIKO KENTRO PANTHEO LTD</p>
      <p>{project.fundingDisclaimer}</p>
    </div>
    <div>
      <b>Links</b>
      <a href="/privacy">Privacy Policy</a>
      <a href="/gdpr-cookie">Cookie / GDPR information</a>
      <a href="/accessibility">Accessibility Statement</a>
      <a href={moodleUrl}>Learning Platform</a>
    </div>
  </div>
  <p class="copyright">Copyright &copy; NURSE-LABS consortium. All rights reserved.</p>
</footer>
