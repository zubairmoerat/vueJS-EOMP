<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img class="img-fluid" src="https://iili.io/J7DQAva.png" loading="lazy" alt="logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link fs-2 ps-5"><router-link to="/">Home</router-link></a> 
                        <a class="nav-link fs-2 ps-5"><router-link to="/about">About Me</router-link></a>
                        <a class="nav-link fs-2 ps-5"><router-link to="/resume">Resume</router-link></a>
                        <a class="nav-link fs-2 ps-5"><router-link to="/projects">Projects</router-link></a>
                        <a class="nav-link fs-2 ps-5"><router-link to="/testimonials">Testimonials</router-link></a>
                        <a class="nav-link fs-2 ps-5"><router-link to="/contact">Contact Me</router-link></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
    width: 100px;
    height: 50px;
}
button{
    background: #959794;
    box-shadow: 0 1px 2px #e9322e;
}
</style>