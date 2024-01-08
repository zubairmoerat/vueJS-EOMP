<template>
    <div class="container-fluid position-relative bg-body-tertiary">
        <div class="row">
            <p class="lead text-start">Zubair Moerat &copy; <span>{{ currYear }}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>

</style>