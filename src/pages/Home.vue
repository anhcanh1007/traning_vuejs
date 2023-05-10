<template>
    <div>
        <h1>Homepasge is here</h1>
    </div>
</template>
<script>
export default {
    props: {
        theme: {
            type: String,
            default: "light",
            required: false
        }
    },
   // eslint-disable-next-line vue/no-setup-props-destructure
   setup({theme}, {emit}) {
    console.log(theme);
    console.log(emit);
   }
};
</script>
<style scoped>
</style>
<style lang='scss' scoped>
</style>