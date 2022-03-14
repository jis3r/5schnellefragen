import Landing from './routes/Landing.svelte';
import Game from './routes/Game.svelte';
import FAQ from './routes/FAQ.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Landing,
    '/faq': FAQ,
    '/game/:mode/:year?/:author?': Game,
    '*': NotFound
}