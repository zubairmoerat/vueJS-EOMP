<template>
    <h2>My Work</h2>
    <div class="row d-flex">
        <div class="col" v-if="Projects">
            <div class="card" v-for="pro in Projects" :key="pro">
                <div class="card-body">
                    <img :src="pro.image" class="card-img-top" alt="projectImage">
                    <h5 class="card-title">{{ pro.name }}</h5>
                    <p>{{ pro.description }}</p>
                    <a :href="pro.gitHub" type="button" class="btn btn-secondary" target="_blank">Github</a>
                    <a :href="pro.netlify" type="button" class="btn btn-primary" target="_blank">Netlify</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',
    components: {},
    computed: {
        Projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped></style>