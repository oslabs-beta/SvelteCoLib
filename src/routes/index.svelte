<script>
// @ts-nocheck

    
    import AccordionItem from "../lib/components/Accordion/AccordionItem.svelte";
    
    import Accordion from '../lib/components/Accordion/Accordion.svelte'


    const options = {
        headerLevel: 4,
        panelInfo: [
            {
                id: 'panel1',
                buttonID: 'button1',
                panelContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
                headerTitle: 'First Section'
            },
            {
                id: 'panel2',
                buttonID: 'button2',
                panelContent: 'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
                headerTitle: 'Second Section'
            },
            {
                id: 'panel3',
                buttonID: 'button3',
                panelContent: 'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.',
                headerTitle: 'Third Section'
            }
        ]
    }

    const customStyles = [
        {
            stylesFor: 'header',
            height: '50px',
            width: '80%',
            backgroundColor: 'coral'
        }
    ]
</script>

<div class='main-contanier'>
    <img src="src/logo.png" alt='Svvolle'/>
    <p>"Your website is only as strong as your weakest component!"<em>-Arnold Schwarzenegger</em></p>
</div>

<Accordion>
    {#each options.panelInfo as info }
    <AccordionItem options={info} headerLevel={options.headerLevel} customStyles={customStyles}/>
    {/each}
</Accordion>


<style>
    .main-contanier {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<!-- headerLevel={options.headerLevel} -->