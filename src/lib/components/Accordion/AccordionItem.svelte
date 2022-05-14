<script>
// @ts-nocheck

    import AccordionPanel from './AccordionPanel.svelte'
    import AccordionHeader from "./AccordionHeader.svelte";

    export let options = {};
    export let headerLevel = 2
    export let customStyles;
    export let isOpen;

    let state = 'closed'
    // let isOpen = false

    const changeState = () => {
        state === 'open' ? state = 'closed' : state = 'open'
        // isOpen = !isOpen
    }

</script>


<div 
class="accordion-item"
data-state={state}
>
    <AccordionHeader 
        on:changeState={changeState}
        on:updatePanelStates
        headerTitle={options.headerTitle} 
        {headerLevel} 
        controls={`panel${options.id}`} 
        buttonID={`button${options.id}`}
        textToRead={options.panelContent}
        style={customStyles[0]}
    />
    <AccordionPanel 
        panelContent={options.panelContent} 
        {isOpen} 
        panelID={`panel${options.id}`}
        labeledBy={`button${options.id}`}
        style={customStyles[1]}
    />
</div>

<style>
    .accordion-item {
        width: 50%;
        height: auto;
    }
</style>