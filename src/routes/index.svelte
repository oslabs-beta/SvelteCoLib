<script>
  import Button from '../lib/components/Button.svelte';
</script>

<h1>Welcome to svvo11e components</h1>
<p><i>A webpage is only as strong as its weakest component. ... AAUGHRGH - Arnold Schwarzeneggar</i></p>
<fieldset id="buttons">
  <legend>Buttons</legend>
  <Button />
</fieldset>


<style>
  * {
    font-family: 'Roboto', sans-serif;
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em
  }

</style>