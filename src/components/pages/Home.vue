<template>

    <div>
        <header-layout />

        <main class="page-home">
            <div class="container">
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
            <projects-overview />
        </main>

        <footer-layout />
    </div>

</template>

<script>
    import HeaderLayout from '@/components/global/header';
    import FooterLayout from '@/components/global/footer';
    import ProjectsOverview from '@/components/sections/ProjectsOverview';

    export default {
        name: 'PageHome',
        components: { FooterLayout, HeaderLayout, ProjectsOverview },
        mounted(){
            if(this.$route.name === 'work'){
                setTimeout(() => {
                    this.$el.querySelector('.projects-overview').scrollIntoView();
                }, 100);
            }
        }
    }

</script>

<style lang="scss" scoped>
    main.page-home {

        > .container {
            margin: 12em auto 4em;

            p {
                font-family: $font-header;
                font-size: 1.4em;
                line-height: 1.5em;
                // margin-bottom: 1.2em;


            }
        }

    }
</style>