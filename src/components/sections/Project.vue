<template>

    <article class="project" :id="'project-' + project.slug">

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
            <img :src="iconUrl()" class="icon" />
            <h1>{{ project.title }}</h1>
            <p class="info"><strong>{{ project.client }} <span>•</span></strong> {{ project.run_time }}</p>
        </div>
    </article>

</template>

<script>
    import ParallaxItem from '@/components/sections/parallaxitem';

    export default {
        name: 'Project',
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
        methods: {
            iconUrl: function(){
                return '/static/img/icons/' + this.project.icon + '.svg';
            }
        }
    }
</script>

<style lang="scss" scoped>

    article.project {
        height: 100vh;
        width: 100%;
        display: table;
        position: relative;

        > .project-content-container {
            display: table-cell;
            text-align: center;
            vertical-align: middle;


            > h1 {
                margin: .3em 0;
                font-family: $font-header;
                font-size: 3em;
                color: $color-dark-grey;
            }

            > p {
                font-size: 1.2em;
                color: $color-dark-grey;

                > strong {
                    color: $color-black;

                    > span {
                        margin: 0 .3em;
                    }
                }
            }
        }
    }

</style>