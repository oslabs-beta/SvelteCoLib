<script>
  
  const handleClick = (event) => {
    alert(`Some event or action has been activated by button (id: ${event.target.id}).`)
  }

</script>

<div>
  Using HTML Button element
  <button 
    id="DemoBtn" 
    aria-label="Demo button" 
    on:click={(e) => handleClick(e)}
  >
  I am a button
  </button>
</div>

<div>
  Using an input with type button
  <input
    id="DemoInputBtn"
    type="button"
    aria-label="Demo input element as a button"
    value="I am an input with type Button"
  >
</div>


<!-- uncomment below if using an HTML element other than a <button> or <input type="button">-->
<!-- <div role='button' on:click={(e) => handleClick(e)}>Descriptive content</div> -->

<style>

  button, input {
    font-size: 14px;
    font-weight: 600;
    background-color: #eee;
    color: rgb(29, 29, 29);
    padding: .5em 1em;
    border: 2px solid rgb(29, 29, 29);
    border-radius: .5em
  }
</style>