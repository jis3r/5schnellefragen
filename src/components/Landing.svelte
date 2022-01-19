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
            <button class="button button-card" on:click={start}>Gib mir 5!</button>
        </div>
    </div>
    <div class="four columns">
        <div class="card">
            <h4>Ganz Bestimmte</h4>
            <p>Bestimme selbst, welche Fragen drankommen.</p>
            <button class="button button-card" on:click={start}>Gib mir 5!</button>
        </div>
    </div>
    <div class="four columns">
        <div class="card">
            <h4>Oder Zufällige</h4>
            <p>Überrasche dich mit zufälligen Fragen aus allen Folgen.</p>
            <button class="button button-card" on:click={start}>Gib mir 5!</button>
        </div>
    </div>
</div>

<style>
    .card {
        box-sizing: border-box;
        width: 100%;
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
    .button-options {
        float: right;    
        margin-bottom: 0%;
        margin-right: -20px;
        border-radius: 1000px 0px 0px 1000px;
        border-top: 1px solid;
        border-right: 0px;
        border-bottom: 1px solid;
        border-left: 1pxc solid;
    }

</style>