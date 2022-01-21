<script>
    import { createEventDispatcher, onMount } from "svelte";

    export let value;
    export let current;

    const dispatch = createEventDispatcher();

    onMount(() => {
        if(value === current) {
            document.getElementById(value).classList.add('selected'); 
        }
    });

    const toggleSelected = () => {
        if(value !== current) {
            document.getElementById(current).classList.remove('selected');
            document.getElementById(value).classList.add('selected');
            dispatch("changeSelected", value);
        }
    }

</script>

<span id="{value}" on:click={toggleSelected} class="">{value}</span>

<style>
    span {
        color: #fefefe;
        background: transparent;
        cursor: pointer;
        padding: 0.125rem 0.625rem;
        margin: 0 0.5r 0 0em;
        line-height: 1;
        font-weight: 500;
        vertical-align: middle;
        transition: 150ms;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
</style>