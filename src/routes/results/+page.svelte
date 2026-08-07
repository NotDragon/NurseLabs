<script>
  import { resultCategories } from '$lib/content.js';
</script>

<section class="page">
  <p>Results</p>
  <h1>Public project repository.</h1>
</section>

<section class="repository">
  <h2>Expandable Repository</h2>
  {#each resultCategories as result}
    <details>
      <summary>
        <span>{result.title}</span>
        <strong>{result.status}</strong>
      </summary>
      <p>{result.description}</p>
      <div class="download-card forthcoming">
        <h3>Public outputs</h3>
        <dl>
          <div><dt>Output title</dt><dd>Forthcoming</dd></div>
          <div><dt>Work Package</dt><dd>Forthcoming</dd></div>
          <div><dt>Publication date</dt><dd>Forthcoming</dd></div>
          <div><dt>Language</dt><dd>Forthcoming</dd></div>
          <div><dt>File type</dt><dd>Forthcoming</dd></div>
        </dl>
        <button class="btn" type="button" disabled>Download unavailable</button>
      </div>
    </details>
  {/each}
</section>
