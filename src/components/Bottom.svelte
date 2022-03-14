<script>
    import { push } from 'svelte-spa-router';


    const showFAQ = () => {
        push('/faq');
    }
</script>


<div class="links">
    <span class="link" on:click={showFAQ}>FAQ</span>
</div>


<style>
    .links {
        padding-bottom: 15px;
    }
    @media (min-height: 735px) {
        .links {
        position: absolute;
        bottom: 0px;
        bottom: .5rem;
        left: 50%;
        transform: translate(-50%, 0);
        padding-bottom: 0px;
    }

    }
    .link {
        cursor: pointer;        
    }
</style>