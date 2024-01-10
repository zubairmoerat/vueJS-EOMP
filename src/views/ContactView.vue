<template>
    <h1>Contact Me</h1>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="col">
                <div class="wrapper">
                    <div class="row justify-content-center">
                        <div class="col">
                            <div class="contact-wrap">
                                <h3 class="mb-4 text-center"></h3>
                                <div id="form-message-warning" class="mb-4 w-100 text-center"></div>
                                <form action="https://formspree.io/f/maygaowg" method="POST" id="contactForm"
                                    name="contactForm" class="contactForm" required>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" id="name"
                                                    placeholder="Your name" required>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group pt-1">
                                                <input type="email" class="form-control" name="email" id="email"
                                                    placeholder="Your email" required>
                                            </div>
                                        </div>
                                        <div class="col-md-12 pt-1">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" id="message" cols="30"
                                                    rows="8" placeholder="Your Message" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 pt-1">
                                            <div class="form-group">
                                                <input type="submit" value="Send" class="btn">
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>+27 68 266 5739</h3>
                <h3>moeratz02@outlook.com</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>