<script>import { news } from '$lib/content.js';</script>
<section class="page"><p>News & Events</p><h1>Chronological updates from the consortium.</h1></section>
<section class="timeline">{#each news as n}<article><time>{n.date}</time><h2>{n.title}</h2><p>{n.summary}</p></article>{/each}</section>
