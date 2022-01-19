<script>
    import Question from './Question.svelte';
    import { onMount, createEventDispatcher } from "svelte";
    import { getRandomQuestions, getNewestQuestions } from '../utils/data';

    export let mode;

    const dispatch = createEventDispatcher();

    let questions = [];
    let pos = 0;

    onMount(() => {
        console.log(mode);
        if(mode === "random") questions = getRandomQuestions();
        if(mode === "newest") questions = getNewestQuestions();
        console.log(questions);
    }); 

    const next = () => {
        if(pos === 4) dispatch("back")
        pos = pos + 1;
    }
</script>

<Question details={questions[pos]} current={pos + 1}/>
<button class="button button-low" on:click={next}>nächste frage</button>

<style>
    .button-low {
        position: absolute;
	    bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>