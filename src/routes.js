import Landing from './routes/Landing.svelte';
import Game from './routes/Game.svelte';
import Contact from './routes/Contact.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Landing,
    '/contact': Contact,
    '/game/:mode/:year?/:author?': Game,
    '*': NotFound
}