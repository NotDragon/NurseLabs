<script>
  import { projectResults } from '$lib/content.js';
</script>

<section class="page">
  <p>Results</p>
  <h1>Deliverables and public project results.</h1>
</section>

<section class="repository">
  <h2>Expandable Repository</h2>
  <p class="wide-text">Approved public outputs will be added here throughout the project lifecycle. Download links will only appear once each deliverable or result has been cleared for public dissemination.</p>
  {#each projectResults as result}
    <details>
      <summary>
        <span>{result.title}</span>
        <strong>{result.status}</strong>
      </summary>
      <p>{result.description}</p>
      <div class="download-card forthcoming">
        <h3>{result.title}</h3>
        <dl>
          <div><dt>Output title</dt><dd>{result.title}</dd></div>
          <div><dt>Work Package</dt><dd>{result.workPackage}</dd></div>
          <div><dt>Status</dt><dd>{result.status}</dd></div>
          <div><dt>Publication date</dt><dd>{result.publicationDate}</dd></div>
          <div><dt>Output type</dt><dd>{result.type}</dd></div>
        </dl>
        {#if result.downloadUrl}
          <a class="btn download" href={result.downloadUrl} download>Download</a>
        {:else}
          <button class="btn download" type="button" disabled>Download forthcoming</button>
        {/if}
      </div>
    </details>
  {/each}
</section>
