<template>
    <h2 class="text-center">Contact Me</h2>
    <div class="container">
        <div class="contactRow">
            <div class="contactCol">
                <form action="https://formspree.io/f/maygaowg" method="POST" id="contactForm" name="contactForm"
                    class="contactForm" required>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your name"
                                    required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your email"
                                    required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2">
                                <textarea name="message" class="form-control" id="message" cols="30" rows="8"
                                    placeholder="Your Message" required></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group pt-2 text-center">
                                <input type="submit" value="Send" class="btn">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="contactCol">
                <h3 class="text-center"><i class="bi bi-geo-alt"></i> District 6, Cape Town</h3>
                <h3 class="text-center"><i class="bi bi-whatsapp"></i> +27 68 266 5739</h3>
                <h3 class="text-center"><i class="bi bi-envelope"></i> moeratz02@outlook.com</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: underline;
    text-shadow: 0 2px 1px black;
}

.contactRow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
    flex-wrap: wrap;
}

.contactCol {
    flex-basis: 40%;
}

.row {
    display: inline-block;
}

.form-group {
    width: 300px;
}

form {
    width: fit-content;
}

h3 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-shadow: 0 2px 1px #e9322e;
}

.btn {
    border: 1px solid #45433e;
    box-shadow: 0 2px 3px #e9322e;
    background: #45433e;
    color: #fff;
}

input {
    background: #45433e;
    box-shadow: 0 2px 3px #e9322e;
}

textarea {
    background: #45433e;
    box-shadow: 0 2px 3px #e9322e;
}

input::placeholder {
    color: #fff;
}

textarea::placeholder {
    color: #fff;
}

@media (max-width:351px) {
    .form-group {
        width: 250px;
    }
}</style>