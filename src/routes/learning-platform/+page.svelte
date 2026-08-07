<script>
  import { moodleUrl, platformFeatures } from '$lib/content.js';
</script>

<section class="page">
  <p>Learning Platform</p>
  <h1>NURSE-LABS Digital Learning Platform</h1>
  <a class="btn" href={moodleUrl}>Coming Soon</a>
</section>

<section class="platform">
  <div>
    <h2>Platform Overview</h2>
    <p>The NURSE-LABS training programme is delivered through a dedicated Learning Management System. The platform translates the validated European Competence Framework into structured digital learning, simulation-based practice, assessment and competence tracking.</p>
    <a class="btn" href={moodleUrl}>Access the Learning Platform</a>
  </div>
  <figure>
    <span>LMS access will be enabled through the approved login or landing page when ready.</span>
  </figure>
</section>

<section>
  <h2>Features</h2>
  <ul class="pill-list">
    {#each platformFeatures as feature}
      <li>{feature}</li>
    {/each}
  </ul>
</section>
