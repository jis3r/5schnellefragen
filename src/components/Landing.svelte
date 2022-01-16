<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const start = () => {
        dispatch("start");
    }

</script>
<div class="row" style="margin-top: 25%">
    <div class="test twelve columns">
    </div>
</div>

<button class="button-low button-primary" on:click={start}>Gib mir 5!</button>