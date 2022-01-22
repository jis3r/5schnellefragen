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

<span id="{value}" on:click={toggleSelected} class="u-pull-left">{value}</span>

<style>
    span {
        color: #fefefe;
        background: transparent;
        cursor: pointer;
        min-height: 1.75rem;
        padding: 0.125rem 0.625rem;
        margin: 0 .5rem .5rem 0 !important;
        font-weight: 500;
        vertical-align: middle !important;
        transition: 150ms;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
</style>