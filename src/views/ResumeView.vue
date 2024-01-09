<template>
    <h2>My Experience</h2>
    <div class="container-fluid">
        <ul v-if="Education">
            <li v-for="title in Education" :key="title">
                <label for="first">{{ title.year }}</label>
                <div>
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
</style>