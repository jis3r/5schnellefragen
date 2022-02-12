<script>
    import { scale } from "svelte/transition";
    import Select_Element from '../components/Select_Element.svelte';
    import Bottom from '../components/Bottom.svelte';
    import { getNewestEpisode } from '../utils/questions';
    import { push } from 'svelte-spa-router';


    let filter = false;
    let years = ["Alle", "2022", "2021", "2020", "2019", "2018", "2017"];
    let authors = ["Allen", "Felix", "Tommi"];
    let selectedYear = "Alle";
    let selectedAuthor = "Allen";


    const startNewest = () => {
        push('/game/newest');
    }

    const startFiltered = () => {
        push('/game/filtered/' + selectedYear + '/' + selectedAuthor);
    }
    
    const startRandom = () => {
        push('/game/random');
    }
    
    const showFilter = () => {
        filter = !filter;
    }

    const selectYear = (e) => {
        selectedYear = e.detail;
    }

    const selectAuthor = (e) => {
        selectedAuthor = e.detail;
    }
</script>


<div class="row landing">
    {#if filter}
        <div class="three columns"> <p></p> </div>
        <div class="six columns" in:scale>
            <div class="card">
                <h4>Wähle aus!</h4>
                <div class="custom-select u-pull-left">
                    <label for="">Jahr</label>
                    <p>
                        {#each years as year}
                        <Select_Element value={year} current={selectedYear} on:changeSelected={selectYear}/>
                        {/each}
                    </p>
                </div>
                <div class="custom-select u-pull-left">
                    <label for="">Von</label>
                    <p>
                        {#each authors as author}
                        <Select_Element value={author} current={selectedAuthor} on:changeSelected={selectAuthor}/>
                        {/each}
                    </p>
                </div>

                <img src="img/arrow-left.svg" alt="Zurück" style="float: left; margin-bottom: 0%; cursor: pointer;" on:click={showFilter}>
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
        <Bottom/>
    {/if}
</div>


<style>
    .landing {
        margin-top: 15%;
    }
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
        width: 100%;
    }
</style>