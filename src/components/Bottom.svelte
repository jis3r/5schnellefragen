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
        position: fixed;
        bottom: -50px;
        bottom: .5rem;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .link {
        cursor: pointer;        
    }
</style>