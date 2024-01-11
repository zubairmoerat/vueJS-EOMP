<template>
    <h2 class="text-center">Reviews</h2>
    <div class="row d-flex" v-if="Testimonials">
        <label class="card-wrap" v-for="testimonial in Testimonials" :key="testimonial">
            <input type="checkbox" class="flipcard">
            <div class="card">
                <div class="front card-face">
                    <img :src="testimonial.profile" alt="imgPerson" class="card-photo">
                </div>
                <div class="back card-face">
                    <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
                    <p>{{ testimonial.quotes }}</p>
                </div>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'TestimonialsView',
    components: {},
    computed: {
        Testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('fetchTestimonials')
    }
}
</script>

<style scoped>
.card-wrap {
    display: flex;
    width: 200px;
    max-width: 100%;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 15px;
}
h2{
padding-top: 20px;
padding-bottom:  20px;
text-decoration: underline;
text-shadow: 0 2px 1px black;
}

.card, .front, .back, .card-photo{
    width: 100%;
    height: 100%;
}

.card-face {
    position: absolute;
    backface-visibility: hidden;
}

.card {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s, box-shadow .4s;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
    border-radius: 10px;
}

.card-photo {
    border-radius: 10px;
}

.card:hover {
    box-shadow: 0 1px 3px 0 #45433e, 0 4px 8px 3px #e9322e;
}

.back {
    background: #45433e;
    transform: rotateY( 180deg );
    text-align: center;
    border-radius: 10px;
}

.back p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}

.flipcard {
    opacity: 0;
}

input:checked + .card {
    transform: rotateY( 180deg );
}

</style>