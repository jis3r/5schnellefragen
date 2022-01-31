<script>
    import { replace } from 'svelte-spa-router';
    import Question from '../components/Question.svelte';
    import { onMount, createEventDispatcher } from "svelte";
    import { getRandomQuestions, getFilteredQuestions, getNewestQuestions, syncLocalStorage } from '../utils/questions';

    export let params = {};

    let questions = [];
    let pos = 0;
    let show = true;

    onMount(() => {
        let mode = params.mode;
        if(mode === "random") questions = getRandomQuestions();
        if(mode === "filtered") questions = getFilteredQuestions(params.year, params.author);
        if(mode === "newest") questions = getNewestQuestions();
        console.log(questions);
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
</script>

{#if show}
    <Question details={questions[pos]} current={pos + 1} amount={questions.length}/>
{/if}
{#if pos === questions.length-1}
    <button class="button button-low" on:click={back}>fertig</button>
{:else if questions.length === 0}
    <button class="button button-low" on:click={back}>zurück</button>
{:else}
    <button class="button button-low" on:click={next}>nächste frage</button>
{/if}