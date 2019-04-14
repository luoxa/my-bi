<template>
    <img width="100%" height="100%" :src="`/img/contents/${this.$route.params.id}.png`" @error="imgError()" />
</template>

<script>

    export default {
        name:'content0',
        methods:{
            imgError(){
                this.$el.src='/img/contents/home.png';
            }
        }
    }

</script>

<style scoped>

</style>