<script>
  import '../style.css';
  const nav = [['/', 'Home'], ['/about', 'About'], ['/news', 'News'], ['/results', 'Results'], ['/learning-platform', 'Learning Platform'], ['/contact', 'Contact']];
</script>
<header><a class="logo" href="/">NURSE<span>LABS</span></a><nav>{#each nav as n}<a href={n[0]}>{n[1]}</a>{/each}</nav></header>
<slot />
<footer><div><b>NURSE-LABS</b><p>European Erasmus+ KA220-VET Project for chronic vision adherence counselling.</p></div><p>Partners · Privacy Policy · Accessibility · GDPR · Erasmus+ Disclaimer</p></footer>
