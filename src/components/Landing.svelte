<script>
    import { createEventDispatcher } from "svelte";
    import { scale } from "svelte/transition";
    import Select_Element from './Select_Element.svelte';
    import { getNewestEpisode } from '../utils/questions';

    const dispatch = createEventDispatcher();
    let filter = false;
    let years = ["2017", "2018", "2019", "2020", "2021", "2022", "Alle"];
    let authors = ["Felix", "Tommi", "Allen"];
    let selectedYear = "Alle";
    let selectedAuthor = "Allen";



    const startNewest = () => {
        dispatch("startNewest");
    }

    const startFiltered = () => {
        dispatch("startFiltered", [selectedYear, selectedAuthor]);
    }
    
    const startRandom = () => {
        dispatch("startRandom");
    }
    
    const showFilter = () => {
        filter = true;
    }

    const selectYear = (e) => {
        selectedYear = e.detail;
    }

    const selectAuthor = (e) => {
        selectedAuthor = e.detail;
    }

</script>


<div class="row" style="margin-top: 15%">
    {#if filter}
        <div class="three columns"> <p></p> </div>
        <div class="six columns" in:scale>
            <div class="card">
                <h4>Wähle aus!</h4>
                <div class="custom-select">
                    <label for="">Jahr</label>
                    {#each years as year}
                    <Select_Element value={year} current={selectedYear} on:changeSelected={selectYear}/>
                    {/each}
                </div>
                <div class="custom-select">
                    <label for="">Von</label>
                    {#each authors as author}
                    <Select_Element value={author} current={selectedAuthor} on:changeSelected={selectAuthor}/>
                    {/each}
                </div>

                <button class="button button-card" on:click={startFiltered}>Los!</button>
            </div>
        </div>
        <div class="three columns"> <p></p> </div>
    {:else}
        <div class="four columns" in:scale>
            <div class="card u-full-width">
                <h4>Die Neuesten</h4>
                <p>Starte mit den Fragen aus der neuesten Folge #{getNewestEpisode()}.</p>
                <button class="button button-card" on:click={startNewest}>Gib mir 5!</button>
            </div>
        </div>
        <div class="four columns" in:scale>
            <div class="card u-full-width">
                <h4>Ganz Bestimmte</h4>
                <p>Bestimme selbst, welche Fragen drankommen.</p>
                <button class="button button-card" on:click={showFilter}>Gib mir 5!</button>
            </div>
        </div>
        <div class="four columns" in:scale>
            <div class="card u-full-width">
                <h4>Oder Zufällige</h4>
                <p>Überrasche dich mit zufälligen Fragen aus allen Folgen.</p>
                <button class="button button-card" on:click={startRandom}>Gib mir 5!</button>
            </div>
        </div>
    {/if}
</div>

<style>
    .card {
        box-sizing: border-box;
        padding: 1.8rem;
        border-radius: 1rem;
        box-shadow: 0 2px 7px 0 rgb(0 0 0 / 20%);
        min-height: 0px;
        text-align: left;
        margin-bottom: 2rem;
        overflow: hidden;
    }
    h4 { 
        margin-bottom: 15px;
    }
    p { 
        margin-bottom: 10px;
    }
    .button-card {
        float: right;    
        margin-bottom: 0%;
    }

    .custom-select {
        margin-right: 2rem;
        margin-bottom: 1rem;

    }
</style>