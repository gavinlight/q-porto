<template>

    <section class="projects-overview">

        <template v-for="(project, index) in projects">
            <project :index="index" :project="project"></project>
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