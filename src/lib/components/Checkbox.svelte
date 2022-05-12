<script>
	let checkedOne = false;
	let checkedTwo = false;
	let checkedThree = false;
</script>

<fieldset>
	<legend> Check Box</legend>
	<!------------------------------------------------------------------- Check One ------------------------------------------------------------------->
	<label id="checkBoxOne" aria-label="checkbox">
		<input aria-label="Check Box Option One" type="checkbox" bind:checked={checkedOne} />
		BIG ONE
	</label>

	<br />

	<!------------------------------------------------------------------- Check Two ------------------------------------------------------------------->
	<input
		aria-label="Check Box Option Two"
		id="checkBoxTwo"
		type="checkbox"
		bind:checked={checkedTwo}
	/>
	<label for="checkBoxTwo">BIG TWO</label>
</fieldset>

<style>
</style>
