<script>
	import Info from "../lib/components/Info.svelte";
    import { invalidateAll } from '$app/navigation'
    import { enhance } from '$app/forms'
    import './style.css'

    let data;
    let search = false;

    async function searchMovie(event) {
        const formEl = event.target
        const dataF = new FormData(formEl)

        const response = await fetch(formEl.action, {
            method: 'POST',
            body: dataF
        })

        data = await response.json()
        search = true;
        formEl.reset()
        await invalidateAll()
    }

</script>
<svelte:head>
    <title>Movie Guid App</title>
</svelte:head>

<div class="container">
    <form method="post" class="search-container" on:submit|preventDefault={searchMovie}>
        <input type="text" name="movie-name" id="movie-name" placeholder="Enter moview name here...." required>
        <button id="search-btn">Search</button>
    </form>

    <div id="result">
        {#if !search }
            <h3 class="msg">Please Enter a movie name</h3>
        {:else}
            <Info movie={data}/>
        {/if}
    </div>
</div>

<style>
    .container {
        font-size: 16px;
        width: 90vw;
        max-width: 37.5em;
        padding: 3em 1.8em;
        background-color: #1e293b;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 0.6em;
        box-shadow: 1.2em 2em 3em rgba(0, 0, 0, 0.2);
    }

    .search-container {
        display: grid;
        grid-template-columns: 9fr 3fr;
        gap: 1.2em;
    }

    .search-container input, .search-container button {
        font-size: 0.9em;
        outline: none;
        border-radius: 0.3em;
    }

    .search-container input {
        background-color: transparent;
        border: 1px solid #a0a0a0;
        color: #fff;
        padding: 0.7em;
    }

    .search-container input:focus {
        border-color: #fff;
    }

    .search-container button {
        background-color: #ffb92a;
        border: none;
        cursor: pointer;
    }

    #result {
        color: #fff;
    }
</style>