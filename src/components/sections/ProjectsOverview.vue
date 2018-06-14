<template>

    <section class="projects-overview">

        <template v-for="(project, index) in projects">
            <project-item :index="index" :project="project"></project-item>
        </template>

    </section>

</template>

<script>
    import Projects from '@/data/projects.json';
    import ProjectItem from '@/components/sections/projectitem';

    export default {
        name: 'ProjectsOverview',
        components: { ProjectItem },
        data() {
            return {
                'projects': Projects
            }
        }
    }

</script>

<style>
    section.projects-overview {
        max-width: 1480px;
        margin: 0 auto;
    }
</style>