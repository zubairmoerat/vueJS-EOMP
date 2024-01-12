<template>
    <div class="container-fluid" id="footer">
        <div class="row">
            <p class="text-start">Zubair Moerat's Portfolio &copy; <span>{{ currYear }}</span></p>
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

<style scoped></style>