<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const start = () => {
        dispatch("start");
    }

</script>
<div class="test twelve columns">
    <button class="button-primary" on:click={start}>Gib mir 5!</button>
</div>

<style>
    button { 
        bottom: 25%;
    }
    .test {
        bottom: 0;
    }
</style>