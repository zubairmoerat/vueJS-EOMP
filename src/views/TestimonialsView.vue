<template>
    <h2 class="text-center">Reviews</h2>
    <div class="row" v-if="Testimonials">
        <label class="card-wrap" v-for="testimonial in Testimonials" :key="testimonial">
            <input type="checkbox" class="flipcard">
            <div class="card">
                <div class="front card-face">
                    <img :src="testimonial.profile" alt="imgPerson" class="card-photo">
                </div>
                <div class="back card-face">
                    <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
                    <p class="text-center"><i class="bi bi-quote"></i>{{ testimonial.quotes }}<i class="bi bi-quote"></i>
                    </p>
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
.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.card-wrap {
    width: 250px;
    height: 400px;
    max-width: 100%;
}

h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: underline;
    text-shadow: 0 2px 1px black;
}

.card,
.front,
.back,
.card-photo {
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
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
    border-radius: 10px;
    height: 70%;
}

.card-photo {
    border-radius: 10px;
}

.card:hover {
    cursor: pointer;
    box-shadow: 0 1px 3px 0 #45433e, 0 4px 8px 3px #e9322e;
    transform: translateY(-15px);
}

.back {
    background: #45433e;
    transform: rotateY(180deg);
    text-align: center;
    border-radius: 10px;
}

.back p {
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}

.flipcard {
    opacity: 0;
}

input:checked+.card {
    transform: rotateY(180deg);
}

h5 {
    color: #fff;
}

@media (max-width:351px) {
    .card-wrap {
        width: 250px;
        height: 400px;
        max-width: 100%;
    }
}</style>