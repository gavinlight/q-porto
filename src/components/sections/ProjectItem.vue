<template>

    <article :class="'project project-type-' + this.type" :id="'project-' + project.slug">

        <template v-for="item in project.parallax_items">
            <parallax-item
                :background="item.background"
                :position="item.position"
                :width="item.width"
                :height="item.height"
                :speed="item.speed"
                :index="index"
            ></parallax-item>
        </template>

        <div class="project-content-container">
            <router-link :to="{ name: 'project', params: { slug: project.slug }}">
                <img :src="this.icon_url" class="icon" />
                <h1 class="link-hover inline">{{ project.title }}</h1>
                <p class="info"><strong>{{ project.client }} <span>•</span></strong> {{ project.run_time }}</p>
            </router-link>
        </div>
    </article>

</template>

<script>
    import ParallaxItem from '@/components/sections/parallaxitem';

    export default {
        name: 'ProjectItem',
        components: { ParallaxItem },
        props: {
            'project': {
                default: {},
                type: Object
            },
            'index': {
                default: 0,
                type: Number
            }
        },
        data() {
            return {
                type: (this.project.parallax_items.length > 0 ? 'featured' : 'simple'),
                icon_url: '/static/img/icons/' + this.project.icon + '.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

    article.project {
        width: 100%;
        display: table;
        position: relative;
        overflow-y: hidden;

        &.project-type-featured {
            height: 100vh;
        }

        &.project-type-simple {
            height: 50vh;
        }

        > .project-content-container {
            display: table-cell;
            text-align: center;
            vertical-align: middle;

            > a {
                text-decoration: none;
                display: inline-block;

                &:hover:after {
                    display: none;
                }

                > h1 {
                    margin: .3em auto;
                    font-family: $font-header;
                    font-size: 3em;
                    display: table;
                }

                > .info {
                    font-size: 1.2em;

                    > strong {
                        color: $color-black;

                        > span {
                            margin: 0 .3em;
                        }
                    }
                }
            }
        }
    }

</style>