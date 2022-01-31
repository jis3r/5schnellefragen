<script>
    import { push } from 'svelte-spa-router';
    const back = () => {
        push('/');
    }
</script>

<p style="text-align:left; margin: 25% 0">Wenn du Ideen oder Verbesserungsvorschläge hast, kontaktiere mich gerne <a href="mailto:jis3r@protonmail.com">hier</a>.
<br> Ich freue mich. :)</p>
<button class="button button-low" on:click={back}>ZURÜCK</button>
