<template>

    <!-- <header-layout /> -->

    <main class="page-project" v-on:scroll="handleScroll">
        <span class="scroll-percentage"></span>

        <section class="project-intro">
            <div class="container">
                <span>{{ project.team }}</span>
                <h1>{{ project.title }}</h1>

                <div class="intro-content" v-html="project.intro"></div>
            </div>

            <img :src="this.header_image" />
        </section>

        <section class="project-content">
            <div class="container">
                <ul class="project-info">
                    <li>
                        <span>At</span>
                        {{ project.client  }}
                    </li><li>
                        <span>Focus</span>
                        {{ project.role  }}
                    </li><li>
                        <span>When</span>
                        {{ project.run_time  }}
                    </li>
                </ul>

                <article v-html="project.content"></article>
            </div>
        </section>

    </main>

    <!-- <footer-layout /> -->
</template>

<script>

    import Projects from '@/data/projects.json';

    export default {
        name: 'PageProject',
        props: {
            'slug': { type: String }
        },
        methods: {
            getProject: (slug) => {
                let project = Projects.filter((project) => project.slug === slug);
                return project.length > 0 ? project[0] : false;
            },
            handleScroll: function() {
                TweenMax.to(
                    this.scroll_indicator,
                    0,
                    { width: this.getScrollPercentage() + '%' }
                );
            },
            getScrollPercentage: function() {
                var h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';

                return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
            }
        },
        data() {
            let project = this.getProject( this.slug );

            return {
                project: project,
                header_image: '/static/img/projects/' + project.header_image,
                scroll_position: 0,
                scroll_indicator: null,
            }
        },
        mounted () {
            this.scroll_indicator = this.$el.querySelector('.scroll-percentage');
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

</script>

<style lang="scss" scoped>

    main.page-project {

        > .scroll-percentage {
            height: 6px;
            top: 0;
            left: 0;
            background-color: $color-blue;
            border-bottom-right-radius: 3px;
            position: fixed;
        }

        section.project-intro {
            margin-top: 4em;

            span {
                color: $color-black;
                margin-bottom: .5em;
                display: block;
            }
            h1 {
                font-size: 3em;
                font-family: $font-header;
                margin-bottom: 1em;
            }

            .intro-content {
                /deep/ p {
                    font-family: $font-header;
                    color: $color-black;
                    font-size: 1.2em;
                    line-height: 1.4em;
                    margin-bottom: 1.2em;
                }
            }

            > img {
                width: 100%;
                height: auto;
                margin: 2em 0;
            }
        }

        section.project-content {
            font-size: 1.1em;

            ul.project-info {
                margin: 1em 0 2em;

                li {
                    width: 50%;
                    display: inline-block;
                    margin-bottom: 1.2em;
                    color: $color-black;

                    > span {
                        margin-right: .5em;
                        opacity: .5;
                    }
                }
            }

            article {
                /deep/ p {
                    line-height: 1.6em;
                    margin-bottom: 1.2em;
                }
                /deep/ img {
                    width: calc(100% + 100px);
                    margin: 2em 0 2.5em -50px;
                }
            }
        }
    }

</style>