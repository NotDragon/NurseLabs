<script>
  import { facts, moodleUrl, news, objectives, partners, project, projectResults } from '$lib/content.js';

  const visualOptions = [
    {
      label: 'A',
      title: 'Blue + gold + white',
      text: 'Bright clinical base with gold accents and a high-clarity eye and retina image.',
      className: 'option-a'
    },
    {
      label: 'B',
      title: 'Blue + cyan + yellow',
      text: 'More digital and contemporary, with cyan visual pathways and soft yellow signal points.',
      className: 'option-b'
    },
    {
      label: 'C',
      title: 'Navy + aqua + warm gold',
      text: 'More institutional and European, retaining depth while reducing the previous dark-blue dominance.',
      className: 'option-c'
    }
  ];
</script>
<section class="hero">
  <div class="hero-copy">
    <p>{project.programme}</p>
    <h1>{project.name}</h1>
    <h2>{project.subtitle}</h2>
    <p class="hero-statement">{project.hero}</p>
    <p class="hero-support">{project.supporting}</p>
    <dl class="project-meta">
      <div><dt>Action</dt><dd>{project.action}</dd></div>
      <div><dt>Project No.</dt><dd>{project.number}</dd></div>
      <div><dt>Duration</dt><dd>{project.duration}</dd></div>
      <div><dt>EU Contribution</dt><dd>{project.contribution}</dd></div>
    </dl>
    <div>
      <a class="btn" href="/about">Learn About the Project</a>
      <a class="btn ghost" href="/learning-platform">Access Learning Platform</a>
    </div>
  </div>
  <aside class="hero-visual" aria-label="Ophthalmology-inspired digital vision artwork">
    <span>Eye, retina, OCT and digital vision pathways</span>
  </aside>
</section>

<section class="visual-directions" aria-labelledby="visual-directions-title">
  <div class="section-heading">
    <p>Visual identity options</p>
    <h2 id="visual-directions-title">Homepage hero variations for review</h2>
  </div>
  <div class="variation-grid">
    {#each visualOptions as option}
      <article class={`variation-card ${option.className}`}>
        <div class="variation-preview">
          <span>{option.label}</span>
        </div>
        <h3>{option.title}</h3>
        <p>{option.text}</p>
      </article>
    {/each}
  </div>
</section>
<section class="intro">
  <h2>About the Project</h2>
  <p>{project.about}</p>
  <a href="/about">Read more</a>
</section>
<section class="metrics" aria-label="Project at a glance">
  {#each facts as f}
    <article>
      <b>{f.n}</b>
      <span>{f.l}</span>
    </article>
  {/each}
</section>

<section>
  <h2>Project Objectives</h2>
  <div class="objectives">
    {#each objectives as o, i}
      <article>
        <span class="objective-icon" aria-hidden="true">{i + 1}</span>
        <h3>{o.title}</h3>
        <p>{o.text}</p>
      </article>
    {/each}
  </div>
</section>

<section class="deliverables-home">
  <div class="section-heading">
    <p>Deliverables / Project Results</p>
    <h2>Public project outputs</h2>
  </div>
  <div class="result-strip">
    {#each projectResults.slice(0, 4) as result}
      <details>
        <summary>
          <span>{result.title}</span>
          <strong>{result.status}</strong>
        </summary>
        <p>{result.description}</p>
        <dl>
          <div><dt>Work Package</dt><dd>{result.workPackage}</dd></div>
          <div><dt>Publication date</dt><dd>{result.publicationDate}</dd></div>
        </dl>
        {#if result.downloadUrl}
          <a class="btn small download" href={result.downloadUrl} download>Download</a>
        {:else}
          <button class="btn small download" type="button" disabled>Forthcoming</button>
        {/if}
      </details>
    {/each}
  </div>
  <a class="btn ghost" href="/results">View All Results</a>
</section>

<section class="cta">
  <h2>NURSE-LABS Digital Learning Platform</h2>
  <p>The LMS is being prepared for approved project access. Public access will be provided when the platform is ready.</p>
  <a class="btn" href={moodleUrl}>Coming Soon</a>
</section>

<section>
  <h2>News</h2>
  {#if news.length}
    <div class="news">
      {#each news.slice(0, 3) as n}
        <article>
          <p>{n.date}</p>
          <h3>{n.title}</h3>
          <span>{n.summary}</span>
        </article>
      {/each}
    </div>
  {:else}
    <p class="empty-state">No public project news has been published yet. Only approved activities from the official project period will appear here.</p>
  {/if}
  <a class="btn ghost" href="/news">View News Archive</a>
</section>

<section>
  <h2>Partners</h2>
  <div class="partners">
    {#each partners as p}
      <article class="partner-card">
        {#if p.url}
          <a href={p.url} target="_blank" rel="noreferrer">
            <span class="logo-block">Logo</span>
            <b>{p.name}</b>
            <small>{p.country}{p.role ? ` - ${p.role}` : ''}</small>
          </a>
        {:else}
          <span class="logo-block">Logo</span>
          <b>{p.name}</b>
          <small>{p.country} - official website to be confirmed</small>
        {/if}
      </article>
    {/each}
  </div>
</section>
