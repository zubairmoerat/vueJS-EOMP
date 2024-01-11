<template>
    <h2 class="text-center">My Work</h2>
    <div class="container-fluid">
    <div class="rowPro" v-if="Projects">
        <div class="card" v-for="pro in Projects" :key="pro">
            <div class="card-body text-center">
                <img :src="pro.image" class="img-fluid" alt="projectImage">
                <h5 class="card-title text-center">{{ pro.name }}</h5>
                <p class="text-center">{{ pro.description }}</p>
                <a :href="pro.gitHub" type="button" class="btn" id="btn1" target="_blank"><i class="bi bi-github"></i></a>
                <a :href="pro.netlify" type="button" class="btn ms-3" id="btn2" target="_blank"><i class="bi bi-browser-chrome"></i></a>
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

<style scoped>
img{
    width: 150px;
    height: 150px;
}
.rowPro{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card{
    width: 200px;
    background: #45433e;
    box-shadow: 0 3px 5px #e9322e;
    margin-top: 40px;
}
h2{
padding-top: 20px;
padding-bottom:  20px;
text-decoration: underline;
text-shadow: 0 2px 1px black;
}
h5{
    color: #fff;
    text-decoration: underline;
    margin-top: 15px;
}
p{
    color: #fff;
}
#btn1{
    background: #959794;
}
#btn2{
    background: #e9322e;
}
</style>