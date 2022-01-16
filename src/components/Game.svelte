<script>
    import Question from './Question.svelte';
    import { onMount, createEventDispatcher } from "svelte";
    import { getQuesitons } from '../utils/data';

    const dispatch = createEventDispatcher();

    let questions = getQuesitons();
    let pos = 0;


    onMount(() => {
        console.log(questions);
    });

    const next = () => {
        if(pos === 4) dispatch("back")
        pos = pos + 1;
    }
</script>

<Question details={questions[pos]}/>
<button class="button-primary button-low" on:click={next}>next</button>