<script>
    import Question from './Question.svelte';
    import { onMount, createEventDispatcher } from "svelte";
    import { getRandomQuestions, getFilteredQuestions, getNewestQuestions, synchLocalStorage } from '../utils/questions';

    export let mode;
    export let filter;

    const dispatch = createEventDispatcher();

    let questions = [];
    let pos = 0;
    let show = true;

    onMount(() => {
        if(mode === "random") questions = getRandomQuestions();
        if(mode === "filtered") questions = getFilteredQuestions(filter[0], filter[1]);
        if(mode === "newest") questions = getNewestQuestions();
        console.log(questions);
    }); 

    const next = () => {
        show = false;
        pos = pos + 1;
        show = true;
    }

    const back = () => {
        dispatch("back");
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

<style>
    .button-low {
        position: fixed;
	    bottom: .5rem;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>