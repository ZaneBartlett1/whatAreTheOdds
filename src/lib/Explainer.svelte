<script>
  let showDetails = false;
</script>

<div class="explainer">
  <h2>
    How to use
    <button
      class="toggle-details"
      on:click={() => (showDetails = !showDetails)}
    >
      {showDetails ? "▲" : "▼"}
    </button>
  </h2>
  {#if showDetails}
    <div class="details">
      <p>
        For <strong>yourself</strong>: Select the choice or range that you fall
        into as specifically as you can.
      </p>
      <p>
        For people you're <strong>interested in</strong>: Select the best choice
        or largest range for each category.
      </p>
    </div>
  {/if}
</div>

<style>
  .explainer {
    margin-bottom: 2em;
  }

  .explainer h2 {
    font-size: 1.25em;
    margin: 0;
    display: inline-block;
    align-items: center;
  }

  .toggle-details {
    background: none;
    border: none;
    font-size: 1em;
    cursor: pointer;
    padding: 0;
  }
</style>
