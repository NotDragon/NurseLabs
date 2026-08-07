<script>
  import { partners, targetGroups, workPackages } from '$lib/content.js';
</script>

<section class="page">
  <p>About</p>
  <h1>Project Overview</h1>
</section>

<section class="intro">
  <h2>Project Overview</h2>
  <p>NURSE-LABS is an Erasmus+ Cooperation Partnership in Vocational Education and Training focused on strengthening nurses' capacity to provide structured counselling and adherence support in chronic vision care. The project responds to the absence of a validated European competence architecture linking clinical evidence, measurable learning outcomes, digital simulation and professional development in this field.</p>
</section>

<section>
  <h2>Why the Project Matters</h2>
  <p class="wide-text">Chronic conditions such as glaucoma, age-related macular degeneration and diabetic retinopathy require sustained patient engagement, follow-up and understanding of treatment pathways. Nurses are often central to patient education and continuity of care, yet training in adherence counselling and chronic vision communication remains fragmented. NURSE-LABS addresses this gap by moving from knowledge-based education toward observable, assessable professional competence.</p>
</section>

<section>
  <h2>Target Groups</h2>
  <ul class="pill-list">
    {#each targetGroups as group}
      <li>{group}</li>
    {/each}
  </ul>
</section>

<section>
  <h2>Work Packages</h2>
  <div class="downloads">
    {#each workPackages as wp}
      <article>
        <h3>{wp.title}</h3>
        <p>{wp.text}</p>
      </article>
    {/each}
  </div>
</section>

<section>
  <h2>Consortium</h2>
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
