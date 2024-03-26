<template>
    <div>
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerComp',
    data() {
    }
}
</script>

<style scoped></style>