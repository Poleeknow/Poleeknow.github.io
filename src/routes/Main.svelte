<script lang="ts">
    interface Api {
        message: string;
    }
    const getDogImg = document.getElementById('getDogImg') as HTMLImageElement;
    const urlForAPI = 'https://dog.ceo/api/breeds/image/random';
    const dog = document.getElementById('dog') as HTMLImageElement;
    const two = document.getElementById('two') as HTMLDivElement;
    let stroka = ''
    
    function fetchDogis(): Promise<Api> {
        return fetch(urlForAPI).then(r => r.json());
    }

    function getDog(ulr : Api) {
        stroka = ulr.message;
        // dog.src = ulr.message;
        (<HTMLImageElement> document.getElementById('dog')).src = ulr.message;
        (<HTMLImageElement> document.getElementById('dog')).style.border = '3px solid hotpink';
        (<HTMLImageElement> document.getElementById('dog')).style.borderRadius = '50%';
        (<HTMLElement> document.getElementById('two')).style.display = 'block';
    }

    async function handleClick(e) {
        const dogJson = await fetchDogis();
        // console.log(dogJson.message.toString());
        getDog(dogJson);
    }

</script>
<img id="me" src="images/pic2.jpg" alt="That's me">
    <h2> Hello? Dogi </h2>
    <div class = "flexbox">
        <div id = "one"><button id="getDogImg" on:click={handleClick}> Go </button></div>
        <div id = "two"><img id = "dog" alt = "Some dog" {stroka}></div>
    </div>
<style>
    #me {
        width: 100%;
    }
    h2 {
        color: hotpink;
        margin: 30px 30px 20px;
        text-align: left;
        font-size: 36px;
        overflow: hidden;
    }
    .flexbox {
        display: flex;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
    }

    #two{
        display: none;
        position:relative;
        margin-left: 10%;
        width: 100%;
        height: 100%;
        overflow:hidden;
        border: none;
    }
    #dog{
        object-fit:cover;
        width: 92%;
        height: 69%;
    }

    #getDogImg {
        font-size: 300%;
        border-radius: 50%;
        background-color: lavenderblush;
        color: hotpink;
        border: 2px solid hotpink;
        transition-duration: 0.4s;
    }
    #getDogImg:hover {
        background-color: hotpink;
        color: lavenderblush;
    }
</style>