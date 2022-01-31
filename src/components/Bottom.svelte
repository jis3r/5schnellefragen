<script>
    import { push } from 'svelte-spa-router';


    const showContact = () => {
        push('/contact');
    }
</script>


<div class="links">
    <span class="link" on:click={showContact}>Kontakt</span>
    <!--span>| </!--span>
    <span-- class="link">FAQ</span-->
</div>


<style>
    .links {
        padding-bottom: 15px;
    }
    @media (min-height: 725px) {
        .links {
        position: fixed;
        bottom: 0px;
        bottom: .5rem;
        left: 50%;
        transform: translate(-50%, 0);
        padding-bottom: 0;
    }

    }
    .link {
        cursor: pointer;        
    }
</style>