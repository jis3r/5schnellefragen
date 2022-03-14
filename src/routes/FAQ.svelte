<script>
    import { push } from 'svelte-spa-router';
    import { amount } from '../utils/data';
    const back = () => {
        push('/');
    }
</script>

<div class="faq" style="text-align:left; margin-top: 5rem" >
    <h3>Frequently Asked Questions</h3>

    <h4>Wie viele Fragen gibt es?</h4>
    <p class="answer">Aktuell gibt es insgesamt {amount} Fragen.</p>

    <h4>Welche Fragen sind enthalten?</h4>
    <p class="answer">Grundsätzlich sind alle Fragen aus allen Folgen enthalten. Doppelte Fragen wie "Was war dein letzter Fehlkauf?" sind nur einmal vertreten. Speziell podcastbezogene Fragen wie "Bereust du etwas, was du im Podcast gesagt hast?" sowie die Fragen aus den Episoden mit Gästen sind nicht dabei.</p>

    <h4>Wann kommen die Fragen aus der neuesten Folge?</h4>
    <p class="answer">Die Fragen aus einer neuen Folge werden im Laufe des Hacktags hinzugefügt. Spätestens am Donnerstag sind sie also wieder auf dem neuesten Stand.</p>
    
    <h4>Wie wird bestimmt, welche Frage als Nächstes gestellt wird?</h4>
    <p class="answer">Der Browser (Chrome, Safari, etc.) speichert lokal auf deinem Gerät, welche Frage wie häufig gestellt wurde. Wenn du dir das nächste Mal Fragen stellen lässt, wird dies berücksichtigt (sofern du auf demselben Gerät denselben Browser nutzt). Dadurch können dir so lange wie möglich neue Fragen gestellt werden. Bei bestimmten Filtern kann es aufgrund der kleinen Anzahl an passenden Fragen jedoch häufiger zu Wiederholungen kommen.</p>

    <h4>Wie kann ich Kontakt aufnehmen?</h4>
    <p class="answer">Wenn du Fragen, Ideen oder Verbesserungsvorschläge hast, kontaktiere mich gerne <a href="mailto:moin@5schnellefragen.de">hier</a>. Ich freue mich. :)</p>
</div>

<button class="button" on:click={back}>ZURÜCK</button>

<style>
    .faq {
        max-width: 704px;
        margin: auto;
    }

    h3 {
        margin-bottom: 3.5rem;
        font-size: 3.2rem;
        font-weight: 500;
    }

    h4 { 
        font-size: 2.6rem;
        margin-bottom: .5rem;
    }

    .answer { 
        width: 100%;
        padding-top: 1rem;
        margin-bottom: 2rem;
        font-size: 1.8rem;
        border-top: 1px solid #FAFAFA;
    }

</style>