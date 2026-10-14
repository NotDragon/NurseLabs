<script>
  import { news, newsCategories, pressReleases } from '$lib/content.js';
</script>

<section class="page">
  <p>News</p>
  <h1>Project news and public updates.</h1>
</section>

<section>
  <h2>Archive Categories</h2>
  <ul class="pill-list">
    {#each newsCategories as category}
      <li>{category}</li>
    {/each}
  </ul>
</section>

<section class="press-releases">
  <div class="section-heading">
    <p>Press releases</p>
    <h2>Official project announcements</h2>
    <p>Download the available Word document press releases prepared by project partners.</p>
  </div>
  <div class="press-grid">
    {#each pressReleases as release}
      <article>
        <p class="tag">{release.country}</p>
        <h3>{release.title}</h3>
        <p>{release.partner}</p>
        <a class="btn small download" href={release.file} download>Download Word Document</a>
      </article>
    {/each}
  </div>
</section>

<section class="timeline">
  <h2>News Archive</h2>
  {#if news.length}
    {#each news as n}
      <article>
        <time>{n.date}</time>
        <p class="tag">{n.category}</p>
        <h3>{n.title}</h3>
        <p>{n.summary}</p>
        <p>{n.text}</p>
        <p><b>Related WP/result:</b> {n.related}</p>
        <a class="btn ghost" href={n.url}>Read more</a>
      </article>
    {/each}
  {:else}
    <article>
      <h3>No approved public news yet</h3>
      <p>Sample news dated before the official project start date has been removed. Approved NURSE-LABS activities from 1 September 2026 onward will be published here in reverse chronological order.</p>
    </article>
  {/if}
</section>
