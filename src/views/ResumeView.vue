<template>
    <h2>My Experience</h2>
    <div class="container-fluid">
        <ul v-if="Education">
            <li v-for="title in Education" :key="title">
                <label>{{ title.year }}</label>
                <div>
                    <h5>{{ title.place }}</h5>
                    <p>{{ title.description }}</p>
                </div>
            </li>
        </ul>
    </div>
    <h2>My Skills</h2>
    <div class="row" v-if="Skills">
        <div class="col" v-for="title in Skills" :key="title">
            <h5>{{ title.title }}</h5>
            <p>{{ title.experience }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeView',
    components: {},
    computed: {
        Education() {
            return this.$store.state.education
        },
        Skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation'),
        this.$store.dispatch('fetchSkills')
    }
}
</script>

<style scoped></style>