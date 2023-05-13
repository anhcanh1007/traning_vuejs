<template>
    <div class="navbar">
        <h1>My vuex app</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
</template>
<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
    mounted() {},
};
</script>
<style scoped>
.navbar{
    width: 100%;
    height: auto;
    background-color: aliceblue;
}
.navbar h1{
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 40px;
    padding-top: 20px;
}
ul{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 25px;
    padding-bottom: 20px;
}
</style>
<style lang='scss' scoped>
</style>