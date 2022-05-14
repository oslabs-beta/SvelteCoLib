<script>
// @ts-nocheck

    import AccordionButton from "./AccordionButton.svelte";
    export let headerLevel = 3;
    export let headerTitle;
    export let controls = '';
    export let buttonID
    export let style;
    export let textToRead;



</script>

<div 
    class='accordion-header' 
    aria-level={headerLevel} 
    role='heading'
    {style}
>
    <AccordionButton 
        on:changeState
        on:updatePanelStates
        {textToRead}
        {headerTitle} 
        {controls} 
        {buttonID} 
        {style}
    />
</div>

<style>
    .accordion-header {
        height: 30px;
        width: 100%;
    }
</style>