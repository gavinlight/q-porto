<template>

    <div>
        <header-layout />

        <main class="page-about">
            <div class="container">
                <h1>About me</h1>
                <p>
                    Ik ben Quendoline, en ik ben werkzaam als interaction designer met een liefde voor UX.
                    Sinds een jaar ben ik afgestudeerd en werkzaam bij Active Collective,
                    waar ik onder andere werk aan projecten voor
                    <router-link
                        v-on:click.native="mousePos($event.clientX, $event.clientY)"
                        class="active"
                        :to="{ name: 'project', params: { slug: 'project-picture' }}">
                        VUmc
                    </router-link> en
                    <router-link
                        v-on:click.native="mousePos($event.clientX, $event.clientY)"
                        class="active"
                        :to="{ name: 'project', params: { slug: 'mijn-lidl' }}">
                        Lidl
                    </router-link>
                </p>
            </div>
            <cvs-overview />
        </main>

        <footer-layout />
    </div>

</template>

<script>
    import HeaderLayout from '@/components/global/header';
    import FooterLayout from '@/components/global/footer';
    import CvsOverview from '@/components/sections/CvsOverview';

    export default {
        name: 'PageAbout',
        components: { FooterLayout, HeaderLayout, CvsOverview }
    }

</script>

<style lang="scss" scoped>
    main.page-about {
        margin: 7.57em 0;

        > .container {
            margin: 0 auto 4em;

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