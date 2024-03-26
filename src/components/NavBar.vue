<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-evenly" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                            <a-anchor-link class="nav-link fs-2 ps-5" href="#home">Home</a-anchor-link>
                            <a class="nav-link fs-2 ps-5" href="#about">About Me</a>
                            <a class="nav-link fs-2 ps-5" href="#resume">Resume</a>
                            <a class="nav-link fs-2 ps-5" href="#projects">Projects</a>
                            <a class="nav-link fs-2 ps-5" href="testimonials">Testimonials</a>
                            <a-anchor-link class="nav-link fs-2 ps-5" href="contact">Contact Me</a-anchor-link>
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

button {
    background: #959794;
    box-shadow: 0 1px 2px #e9322e;
}
</style>