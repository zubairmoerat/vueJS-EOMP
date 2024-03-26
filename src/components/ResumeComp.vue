<template>
    <h2 class="text-center">My Experience</h2>
    <div class="container-fluid text-center" v-if="education">
        <span class="btn">
            <a href="https://drive.google.com/file/d/1FaQv-Dw0k4XwY6XPpobq2QV2f5i2n-Fv/view?usp=drive_link" target="_blank">Download CV</a>
        </span>
        <div class="konk" v-for="item in education" :key="item">
            <div class="card card-body mx-auto">
                <h5>{{ item.year }}</h5>
                <p>{{ item.place }}</p>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
    <div class="container">
        <h2 class="text-center">My Skills</h2>
        <div class="skillWrapper" v-if="Techskills">
            <div class="skill text-center" v-for="title in Techskills" :key="title">
                <h5>{{ title.tech }}</h5>
                <img :src="title.image" alt="skill" class="img-fluid w-50 h-50">
            </div>
        </div>
    </div>
    <div class="container" v-if="Softskills">
        <div class="konk2" v-for="thing in Softskills" :key="thing">
                <div class="card card-body mx-auto">
                    <h5>{{ thing.title }}</h5>
                    <p>{{ thing.description }}</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeView',
    components: {},
    computed: {
        education() {
            return this.$store.state.education
        },
        Techskills() {
            return this.$store.state.techskills
        },
        Softskills(){
            return this.$store.state.softskills
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation'),
        this.$store.dispatch('fetchTechskills'),
        this.$store.dispatch('fetchSoftskills')
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #fff;
    background-color: transparent;
}

.btn {
    border: 1px solid #45433e;
    box-shadow: 0 1px 2px #e9322e;
    background: #45433e;
    color: #fff;
}

.card {
    background: #45433e;
    color: #fff;
    box-shadow: 0 3px 5px #e9322e;
    width: 700px;
    margin-top: 15px;
    margin-bottom: 15px;
}

h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: underline;
    text-shadow: 0 2px 1px black;
}

.skillWrapper {
    display: flex;
    justify-content: space-evenly;
}

h5 {
    text-shadow: 0 2px 1px #e9322e;
    padding-top: 20px;
    padding-bottom: 20px;
}

.skill {
    padding-top: 40px;
}

@media (max-width:351px) {
    .card {
        width: 250px;
    }

    .skillWrapper {
        flex-wrap: wrap;
    }
}</style>