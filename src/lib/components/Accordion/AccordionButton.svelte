<script>
// @ts-nocheck
    import { createEventDispatcher } from 'svelte'
    export let headerTitle;
    export let controls;
    export let buttonID;
    export let style;
    export let textToRead;

    const dispatch = createEventDispatcher();

    let expanded = false;
    const handleHeaderClick = (event) => {
        expanded = !expanded;
        dispatch('changeState')
        dispatch('updatePanelStates', {
            target: event.target.id
        })
    }
</script>

<!-- replace this with accessible Button component -->
<button 
    class='header-button'
    aria-expanded={expanded}
    aria-controls="{controls}"
    aria-label={expanded ? textToRead : ''}
    id={buttonID}
    on:click={(event) => handleHeaderClick(event)}
    {style}
>
    {headerTitle ? headerTitle : 'Please define header title in options object!'}
</button>

<style>
    .header-button {
        height: 100%;
        width: 100%
    }
</style>