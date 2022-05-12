<script>
// @ts-nocheck

    import AccordionPanel from './AccordionPanel.svelte'
    import AccordionHeader from "./AccordionHeader.svelte";

    export let options = {};
    export let headerLevel = 2
    export let customStyles;

    let state = 'closed'
    let isOpen = false

    const changeState = () => {
        state === 'open' ? state = 'closed' : state = 'open'
        isOpen = !isOpen
    }

</script>


<div 
class="accordion-item"
data-state={state}
>
    <AccordionHeader 
        on:changeState={changeState} 
        headerTitle={options.headerTitle} 
        {headerLevel} 
        controls={options.id} 
        buttonID={options.buttonID}
        customStyles={customStyles[0]}
    />
    <AccordionPanel 
        panelContent={options.panelContent} 
        {isOpen} 
        panelID={options.id} 
        labeledBy={options.buttonID}
    />
</div>

<style>
    .accordion-item {
        width: 50%;
        height: auto;
    }
</style>