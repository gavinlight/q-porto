<template>

    <!-- <header-layout /> -->

    <main class="page-home">
        <h1>Home</h1>

        <p>Ik ben Quendoline, en ik ben werkzaam als interaction designer met een liefde voor UX. Sinds een jaar ben ik afgestudeerd en werkzaam bij Active Collective, waar ik onder andere werk aan projecten voor <router-link :to="{ name: 'project', params: { slug: 'project-picture' }}">VUmc</router-link> en <router-link :to="{ name: 'project', params: { slug: 'mijn-lidl' }}">Lidl</router-link></p>

        <router-link :to="{ name: 'project', params: { slug: 'project-picture' }}">Project Picture</router-link>
        <router-link :to="{ name: 'project', params: { slug: 'creative-code' }}">Creative Code</router-link>

        <projects-overview />
    </main>

    <!-- <footer-layout /> -->
</template>

<script>
    import ProjectsOverview from '@/components/sections/ProjectsOverview';

    export default {
        name: 'PageHome',
        components: { ProjectsOverview }
    }

</script>