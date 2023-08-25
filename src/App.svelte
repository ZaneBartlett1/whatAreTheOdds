<script>
  import Form from "./lib/Form.svelte";
  import Notes from "./lib/Notes.svelte";
  import Explainer from "./lib/Explainer.svelte";
</script>

<main>
  <h1>Are you one in a million?</h1>
  <div>
    <Explainer />
  </div>
  <div id="form-container">
    <Form />
  </div>
  <div>
    <Notes />
  </div>
</main>
