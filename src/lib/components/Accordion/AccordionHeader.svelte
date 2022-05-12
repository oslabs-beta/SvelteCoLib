<script>
// @ts-nocheck

    import AccordionButton from "./AccordionButton.svelte";
    export let headerLevel = 3;
    export let headerTitle;
    export let controls = '';
    export let buttonID
    export let customStyles;

</script>

<div 
    class='accordion-header' 
    aria-level={headerLevel} 
    role='heading'
>
    <AccordionButton 
        on:changeState 
        {headerTitle} 
        {controls} 
        {buttonID} 
        {customStyles}
    />
</div>

<style>
    .accordion-header {
        height: 30px;
        width: 100%;
    }
</style>