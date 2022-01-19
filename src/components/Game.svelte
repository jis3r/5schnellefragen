<script>
    import Question from './Question.svelte';
    import { createEventDispatcher } from "svelte";
    import { getQuesitons } from '../utils/data';

    const dispatch = createEventDispatcher();

    let questions = getQuesitons();
    let pos = 0;

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