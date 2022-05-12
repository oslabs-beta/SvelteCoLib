<!-- Standard Button Component -->

<!-- ************************* SCRIPTS ************************* -->

<script>

  const eventOrAction = (event) => {
    alert(`Some event or action has been activated by button (id: ${event.target.id}).`)
  }
  
  const handleClick = (event) => eventOrAction(event);

  const options = {}

</script>


<!-- ************************* HTML ************************* -->

<!-- using an HTML <button> element -->
<div>
  <label for="DemoBtn">Using HTML button element</label>
  <button 
    id="DemoBtn" 
    aria-label="Demo button" 
    on:click={(e) => handleClick(e)}
  >
  Descriptive content
  </button>
</div>

<!-- using an HTML <input> element with type="button" -->
<div>
  <label for="DemoInputBtn">Using an input with type="button"</label>
  
  <input
    id="DemoInputBtn"
    type="button"
    aria-label="Demo input element as a button"
    on:click={(e) => handleClick(e)}
    value="Descriptive content"
  >
</div>


<!-- using another HTML element with role="button" -->
<div>
  <label for="DemoSpanBtn">Using another HTML element with role="button"</label>
  
  <span 
    id="DemoSpanBtn"
    role="button" 
    tabindex=0
    on:click={(e) => handleClick(e)}
  >
    Descriptive content
  </span>
</div>


<!-- ************************* STYLES ************************* -->

<style>
  
  button, input, span[role="button"] {
    font-size: 18px;
    font-weight: 600;
    background-color: #eee;
    color: rgb(29, 29, 29);
    padding: .75em 1.25em;
    border: 1.5px solid rgb(29, 29, 29);
    width: fit-content;
  }

  *:hover {

  }

  *:focus {
    /* border: none; */
    background-color: rgb(29, 29, 29);
    color: #eee;
    cursor: pointer;
  }

</style>