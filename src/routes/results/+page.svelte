<script>import { downloads } from '$lib/content.js';</script>
<section class="page"><p>Results</p><h1>Downloads, videos and public project outputs.</h1></section>
<section class="downloads">{#each downloads as d}<article><h2>{d}</h2><p>{d.includes('Deliverables') || d.includes('Policy') || d.includes('Brochure') ? 'Download placeholder' : 'Available upon request.'}</p></article>{/each}</section>
