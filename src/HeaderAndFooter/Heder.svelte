<script>
    import {Link} from "svelte-routing";
</script>

<header>
    <Link to="/" style="text-decoration: none !important; border: none !important"><h1 id="header" >POLINA BAZHENOVA</h1></Link>
    <nav>
        <Link class="menu" to= "about_me"
                style ="width: auto;
                color: hotpink;
                text-decoration: none;
                text-align: center;
                font-size: 24px;"> About me</Link>
        <Link class="menu" to = "project"
                style ="width: auto;
                color: hotpink;
                text-decoration: none;
                text-align: center;
                font-size: 24px;"> My projects </Link>
        <a class="menu" href="mailto:8490743@gmail.com"> Contact me</a>
    </nav>
</header>


<style> 
    header {
        background-color: lavenderblush;
        border: none;
        margin: 0;
        overflow: hidden;
        width: 100%;
    }
    .menu{
            width: auto;
            color: hotpink;
            text-decoration: none;
            text-align: center;
            font-size: 24px;
    }
    h1 {
        color: hotpink;
        margin: 30px 30px 20px 30px;
        text-align: left;
            font-size: 48px;
    }
    nav {
            margin-bottom: 10px;
            width: 100%;
            display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>