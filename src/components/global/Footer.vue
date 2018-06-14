<template>

    <footer>

        <div class="container">
            <project-footer-item :type="'contact'"></project-footer-item>
            <project-footer-item v-for="(project, index) in projects" :type="'project'" :key="index" :project="project"></project-footer-item>

            <div class="links">
                <a href="mailto:info@quendoline.nl">info@quendoline.nl</a>
                <span>•</span>
                <a href="tel:+31625508444">+31625508444</a>
            </div>
        </div>

        <svg class="animate">
            <circle cx="50" cy="50" r="25" fill="#C5C9CB"/>
        </svg>

    </footer>

</template>

<script>
    import Projects from '@/data/projects.json';
    import ProjectFooterItem from '@/components/sections/projectfooteritem';

    export default {
        name: 'FooterLayout',
        components: { ProjectFooterItem },
        data() {
            return {
                'projects': Projects
            }
        }
    }

</script>

<style lang="scss" scoped>
    footer {
        overflow: hidden;
        margin-top: 6em;
        padding-bottom: 2em;

        .container {
            display: flex;
            flex-wrap: wrap;

            .links {
                display: inline-block;
                margin: 0 auto;

                a:after {
                    bottom: 1px;
                }

                span {
                    margin: 0 2em;
                }

                @media(max-width: 350px){
                    a {
                        display: block;
                        text-align: center;
                        line-height: 2em;
                    }

                    span {
                        display: none;
                    }
                }
            }
        }
    }
</style>