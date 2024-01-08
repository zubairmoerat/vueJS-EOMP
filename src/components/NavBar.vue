<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img class="img-fluid" src="https://drive.google.com/uc?id=1Uawwx3E8Yfw8vMGHBGycEhHsceacEClP">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link"><router-link to="/">Home</router-link></a>
                        <a class="nav-link"><router-link to="/about">About Me</router-link></a>
                        <a class="nav-link"><router-link to="/resume">Resume</router-link></a>
                        <a class="nav-link"><router-link to="/projects">Projects</router-link></a>
                        <a class="nav-link"><router-link to="/testimonials">Testimonials</router-link></a>
                        <a class="nav-link"><router-link to="/contact">Contact Me</router-link></a>
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

<style scoped></style>