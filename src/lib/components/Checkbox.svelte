<script>
	let checkedOne = false;
	let checkedTwo = false;
	let checkedThree = false;
</script>

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

<br />
<!------------------------------------------------------------------- Check Three ------------------------------------------------------------------->

<input
	aria-label="Check Box Option Three"
	id="checkBoxThree"
	type="checkbox"
	bind:checked={checkedThree}
/>
<label for="checkBoxThree">BIG THREE</label>

<br />

<!------------------------------------------------------------------- Check Four ------------------------------------------------------------------->
<style>
</style>
