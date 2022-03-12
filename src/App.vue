<template>
    <div>
        <HelloWorld msg="Mortgage Calcul8R" />
        <SlidersComp />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SlidersComp from "./components/SlidersComp";

export default {
    name: "App",
    components: {
        HelloWorld,
        SlidersComp,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
