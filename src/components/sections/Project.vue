<template>

    <article class="project" :id="'project-' + project.slug">
        <template v-if="index < 2">
            <img class="parallax-item" :src="backgroundUrl()" />
            <img class="parallax-item" :src="backgroundUrl()" />
            <img class="parallax-item" :src="backgroundUrl()" />
        </template>

        <div class="project-content-container">
            <img :src="iconUrl()" class="icon" />
            <h1>{{ project.title }}</h1>
            <p class="info"><strong>{{ project.client }} <span>•</span></strong> {{ project.run_time }}</p>
        </div>
    </article>

</template>

<script>
    export default {
        name: 'Project',
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
            },
            backgroundUrl: function(){
                return '/static/img/backgrounds/' + this.project.background + '.png';
            }
        }
    }
</script>

<style lang="scss" scoped>

    article.project {
        height: 100vh;
        display: table;
        width: 100%;

        > .parallax-item {
            position: absolute;
        }

        > .project-content-container {
            display: table-cell;
            text-align: center;
            vertical-align: middle;

            > img {

            }

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