<script>
// @ts-nocheck
    import { createEventDispatcher } from 'svelte'
    export let headerTitle;
    export let controls;
    export let buttonID;
    export let customStyles;

    const dispatch = createEventDispatcher();

    let expanded = false;
    const handleHeaderClick = () => {
        expanded = !expanded;
        dispatch('changeState')
    }
</script>

<!-- replace this with accessible Button component -->
<button 
    class='header-button'
    aria-expanded={expanded}
    aria-controls="{controls}"
    id={buttonID}
    on:click={handleHeaderClick}
>
    {headerTitle ? headerTitle : 'Please define header title in options object!'}
</button>

<style>
    .header-button {
        height: 100%;
        width: 100%
    }
</style>