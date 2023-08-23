<script>
    import ratingStart from '$lib/images/star-icon.svg';
	import { fade } from 'svelte/transition';

    export let movie;

</script>

<div class="info" in:fade>
    <img src={movie.Poster} alt="" class="poster"/>
    <div>
        <h2>{movie.Title}</h2>
        <div class="rating">
            <img src={ratingStart} alt="star" />
            <h4>{movie.imdbRating}</h4>
        </div>
        <div class="details">
            <span>{movie.Rated}</span>
            <span>{movie.Year}</span>
            <span>{movie.Runtime}</span>
        </div>
        <div class="genre">
            <div>{@html movie.Genre.split(",").join("</div><div>")}</div>
        </div>
    </div>
</div>
<h3 in:fade>Plot:</h3>
<p in:fade>{movie.Plot}</p>
<h3 in:fade>Cast:</h3>
<p in:fade>{movie.Actors}</p>

<style>
    .info {
        position: relative;
        display: grid;
        grid-template-columns: 4fr 8fr;
        margin-top: 1.2em;
    }

    .poster {
        width: 100%;
    }

    h2 {
        text-align: center;
        font-size: 1.5em;
        font-weight: 600;
        letter-spacing: 0.06em;
    }

    .rating {
        display: flex;
        align-items: center;
        gap: 0.6em;
        margin: 0.6em 0 0.9em 0;
    }

    .rating img {
        width: 1.2em;
    }

    .rating h4 {
        display: inline-block;
        font-size: 1.1em;
        font-weight: 500;
    }

    .details {
        display: flex;
        font-size: 0.95em;
        gap: 1em;
        justify-content: center;
        color: #a0a0a0;
        margin: 0.6em 0;
        font-weight: 300;
    }

    .genre {
        display: flex;
        justify-content: space-around;
    }

    .genre div {
        border: 1px solid #a0a0a0;
        font-size: 0.75em;
        padding: 0.4em 1.6em;
        border-radius: 0.4em;
        font-weight: 300;
    }

    h3 {
        font-weight: 500;
        margin-top: 1.2em;
    }

    p {
        font-size: 0.9em;
        font-weight: 300;
        line-height: 1.8em;
        text-align: justify;
        color: #a0a0a0;
    }
</style>