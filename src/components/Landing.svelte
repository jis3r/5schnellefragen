<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const start = () => {
        dispatch("start");
    }

</script>
<div class="row" style="margin-top: 15%">
    <div class="four columns">
        <div class="card">
            <h4>Die Neuesten</h4>
            <p>Starte mit den Fragen aus der neuesten Folge.</p>
        </div>
    </div>
    <div class="four columns">
        <div class="card">
            <h4>Ganz Bestimmte</h4>
            <p>Bestimme selbst, welche Fragen drankommen.</p>
        </div>
    </div>
    <div class="four columns">
        <div class="card">
            <h4>Oder Zufällige</h4>
            <p>Überrasche dich selbst mit zufälligen Fragen aus allen Folgen.</p>
        </div>
    </div>
</div>

<button class="button-low button-primary" on:click={start}>Gib mir 5!</button>

<style>
    h4 { 
        margin-bottom: 15px;
    }
    .card {
        box-sizing: border-box;
        width: 100%;
        padding: 1.8rem;
        border-radius: 1rem;
        box-shadow: 0 2px 7px 0 rgb(0 0 0 / 20%);
        min-height: 0px;
        text-align: left;
        margin-bottom: 2rem;
    }

</style>