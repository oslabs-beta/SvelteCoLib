<!-- ************************* Scripts ************************* -->
<script>
  /**
   * Import your Components
  */
  import Button from '../lib/components/Button.svelte';

  /**
   * Global Scripts
  */

</script>

<!-- ************************* HTML ************************* -->

<head>
  <title>svvo11e</title>
  <meta name="description" content="An accessible component library for Svelte.">
</head>
<h1>Welcome to <strong>svvo11e</strong> components</h1>
<p><i>A webpage is only as strong as its weakest component. ... AAUGHRGH - Arnold Schwarzeneggar</i></p>
<fieldset id="buttons">
  <legend>Buttons</legend>
  <Button />
</fieldset>

<!-- ************************* Styles ************************* -->
<style>
  
  * {
    font-family: 'Roboto', sans-serif;
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 1em 2em 1em;
    gap: 2em
  }

  #buttons > * {
    flex-grow: 0
  }

</style>