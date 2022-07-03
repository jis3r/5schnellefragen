<script>
    import { replace } from 'svelte-spa-router';
    import Question from '../components/Question.svelte';
    import { onMount, createEventDispatcher } from "svelte";
    import { getRandomQuestions, getFilteredQuestions, getNewestQuestions, syncLocalStorage } from '../utils/questions';

    export let params = {};

    let questions = [];
    let pos = 0;
    let show = true;
    let favorised = false;

    onMount(() => {
        let mode = params.mode;
        if(mode === "random") questions = getRandomQuestions();
        if(mode === "filtered") questions = getFilteredQuestions(params.year, params.author);
        if(mode === "newest") questions = getNewestQuestions();
        //console.log(questions);
    }); 

    const next = () => {
        show = false;
        pos = pos + 1;
        show = true;
    }

    const back = () => {
        syncLocalStorage();
        replace('/');
    }

    const fav = () => {
        favorised = true;
    }

    const unfav = () => {
        favorised = false;
    }
</script>

{#if show}
    <Question details={questions[pos]} current={pos + 1} amount={questions.length}/>
{/if}
<div class="box-low u-center">
    {#if pos === questions.length-1}
    <button class="button u-pull-left" style="margin-left: 44px" on:click={back}>fertig</button>
    {:else if questions.length === 0}
    <button class="button u-pull-left" style="margin-left: 44px" on:click={back}>zurück</button>
    {:else}
    <button class="button u-pull-left" style="margin-left: 44px" on:click={next}>nächste frage</button>
    {/if}

    {#if favorised}
    <img src="img/star-filled.svg" alt="Unfav" style="margin: 2px 0 0 1rem; cursor: pointer; float:left; cursor: pointer;" on:click={unfav}>
    {:else}
    <img src="img/star.svg" alt="Fav" style="margin: 2px 0 0 1rem; cursor: pointer; float:left; cursor: pointer;" on:click={fav}>
    {/if}
</div>

