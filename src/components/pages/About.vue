<template>

    <!-- <header-layout /> -->

    <main class="page-about">
        <div class="container">
            <h1>About me</h1>
            <p>Ik ben Quendoline, en ik ben werkzaam als interaction designer met een liefde voor UX. Sinds een jaar ben ik afgestudeerd en werkzaam bij Active Collective, waar ik onder andere werk aan projecten voor <router-link class="active inline" :to="{ name: 'project', params: { slug: 'project-picture' }}">VUmc</router-link> en <router-link class="active inline" :to="{ name: 'project', params: { slug: 'mijn-lidl' }}">Lidl</router-link></p>
        </div>
        <cvs-overview />
    </main>

    <!-- <footer-layout /> -->
</template>

<script>
    import CvsOverview from '@/components/sections/CvsOverview';

    export default {
        name: 'PageAbout',
        components: { CvsOverview }
    }

</script>

<style lang="scss" scoped>
    main.page-about {

        > .container {
            margin: 7.57em auto 4em;

            > h1 {
                font-family: $font-header;
                font-size: 3em;
                margin-bottom: .5em;
            }

            p {
                font-family: $font-header;
                font-size: 1.4em;
                line-height: 1.5em;
            }
        }

    }
</style>