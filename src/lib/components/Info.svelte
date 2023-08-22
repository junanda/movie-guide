<script>
    import ratingStart from '$lib/images/star-icon.svg';

    export let movie;

    console.log(movie);

</script>

<div class="info">
    <img src="" alt="" class="poster"/>
    <div>
        <h2>Title</h2>
        <div class="rating">
            <img src={ratingStart} alt="star" />
            <h4>rating</h4>
        </div>
        <div class="details">
            <span>Rated</span>
            <span>Year</span>
            <span>Runtime</span>
        </div>
        <div class="genre">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
<h3>Plot:</h3>
<p>detail plot</p>
<h3>Cast</h3>
<p>Actors</p>

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