<template>

    <!-- <header-layout /> -->

    <main>
        <h1>Home</h1>

        <router-link :to="{ name: 'project', params: { slug: 'project-picture' }}">Project Picture</router-link>
        <router-link :to="{ name: 'project', params: { slug: 'creative-code' }}">Creative Code</router-link>
    </main>

    <!-- <footer-layout /> -->
</template>

<script>

    export default {
        name: 'PageHome'
    }

</script>