<script>
    export let details = {  id: "-1", 
                            question: "Frage",
                            episode: "-1",
                            year: "2000",
                            author: "dump"

    }
</script>

<div class="row" style="margin-top: 25%">
    <div class="twelve columns">
        <h3 class="question">{details.question}</h3>
    </div>
</div>
<div class="row">
    <div class="twelve columns">
        <span class="episode">Folge {details.episode}</span>
        <span class="year">{details.year}</span>
        <span class="author">Von {details.author}</span>
    </div>
</div>

<style>
span { 
    color: #33C3F0 /*#006C73*/;
    background-color: rgba(51, 195, 240, 0.25);
    border-radius: 0.25rem;
    padding: 0.125rem 0.625rem;
    margin: 0 0.25rem;
}
</style>