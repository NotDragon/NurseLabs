<script>
  import { Eye, MonitorPlay, ShieldCheck, Network, BookOpen, Landmark } from '@lucide/svelte';
  import { facts, objectives, news, partners, moodleUrl } from '$lib/content.js';
  const icons=[Eye,ShieldCheck,BookOpen,MonitorPlay,Network,Landmark];
</script>
<section class="hero"><div class="hero-copy"><p>European Erasmus+ KA220-VET Project</p><h1>Strengthening clinical counselling through digital simulation.</h1><div><a class="btn" href="/about">Learn More</a><a class="btn ghost" href={moodleUrl}>Access Learning Platform</a></div></div><aside><span>NURSE-LABS</span></aside></section>
<section class="intro"><h2>About the Project</h2><p>NURSE-LABS was developed to support nurses working with chronic vision care, where adherence, counselling and patient confidence directly affect outcomes. The project is supported by Erasmus+ and delivered by a seven-partner consortium across Cyprus, Greece, Italy and Poland. It combines ophthalmology expertise, European vocational education, digital learning design and simulation-based training to create a practical, evidence-informed programme for nurses.</p><a href="/about">Read more →</a></section>
<section class="metrics">{#each facts as f}<article><b>{f.n}</b><span>{f.l}</span></article>{/each}</section>
<section><h2>Project Objectives</h2><div class="objectives">{#each objectives as o,i}<article><svelte:component this={icons[i]} /><h3>{o}</h3></article>{/each}</div></section>
<section class="cta"><h2>Access the LMS</h2><p>The online training programme is delivered through the STEMFREAK Moodle Learning Management System.</p><a class="btn" href={moodleUrl}>Go to Moodle</a></section>
<section><h2>Latest News</h2><div class="news">{#each news.slice(0,3) as n}<article><p>{n.date}</p><h3>{n.title}</h3><span>{n.summary}</span></article>{/each}</div><a class="btn ghost" href="/news">View All News</a></section>
<section><h2>Partners</h2><div class="partners">{#each partners as p}<span>{p}</span>{/each}</div></section>
