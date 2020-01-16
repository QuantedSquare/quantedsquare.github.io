<template>
    <v-app>
        <v-content>
            <HelloWorld />
        </v-content>
    </v-app>
</template>
<script>
import HelloWorld from './components/HelloWorld';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },

    data: () => ({
        //
    }),
};
</script>
<style>
#app {
    font-family: 'Poppins', sans-serif !important;
}
</style>