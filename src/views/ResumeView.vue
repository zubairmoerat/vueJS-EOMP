<template>
    <h2>My Experience</h2>
    <div class="container-fluid">
        <ul v-if="Education" class="accordion">
            <li v-for="title in Education" :key="title">
                <input type="radio" name="accordion" id="first">
                <label for="first">{{ title.year }}</label>
                <div class="XP">
                    <h5>{{ title.place }}</h5>
                    <p>{{ title.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ResumeView',
    components: {},
    computed: {
        Education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation')
    }
}
</script>

<style scoped>
.accordion{
    margin: 60px auto;
    width: 100%;
    max-width: 750px;
}
.accordion li{
    list-style: none;
    width: 100%;
    padding: 5px;
}
.accordion li label{
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 2px;
    cursor: pointer;
    position: relative;
    color: #000;
    border: #000 solid 2px;
}
label::after{
    content: '+';
    font-size: 34px;
    position: absolute;
    right: 20px;
    transition: transform 0.5s;
}
input[type="radio"]{
    display: none;
}
.accordion .XP{
    background: #bbdefb;
    text-align: left;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s, padding 0.5s;
    color: #000;
    border: #000 solid 2px;
}
.accordion input[type="radio"]:checked + label + .content{
    max-height: 600px;
    padding: 30px 20px;
}
.accordion input[type="radio"]:checked + label::after{
    transform: rotate(135deg);
}
</style>