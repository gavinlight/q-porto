<template>

    <section class="projects-overview">

        <template v-for="project in projects">
            <project :project="project"></project>
        </template>

    </section>

</template>

<script>
    import Projects from '@/data/projects.json';
    import Project from '@/components/sections/project';

    export default {
        name: 'ProjectsOverview',
        components: { Project },
        data() {
            return {'projects': Projects}
        }
    }

</script>