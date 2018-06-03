<template>

    <article class="cv">
        <h2>{{ cv.role }}</h2>

        <p class="info">
            <a target="_blank" class="active" :href="cv.company_url"><strong>{{ cv.company }}</strong></a>
            <span>•</span>
            {{ cv.run_time }}
            <span>•</span>
            {{ cv.location }}
        </p>

        <ul>
            <li v-for="position in cv.work">
                <a target="_blank" class="active" :href="position.url">{{ position.text }}</a>
            </li>
        </ul>
    </article>

</template>

<script>
    import ParallaxItem from '@/components/sections/parallaxitem';

    export default {
        name: 'CvItem',
        components: { ParallaxItem },
        props: {
            'cv': {
                default: {},
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>

    article.cv {
        margin-top: 4em;

        > h2 {
            font-family: $font-header;
            font-size: 2.5em;
            margin-bottom: .3em;
        }

        > p.info {
            font-size: 1.2em;

            a:after {
                bottom: 0px;
            }

            strong {
                color: $color-black;
            }

            > span {
                margin: 0 .3em;
                color: $color-black;
            }
        }

        > ul {
            margin-top: .7em;
            padding-left: 1em;
            font-size: 1.2em;

            li {
                list-style: disc;
                line-height: 1.7em;

                a:after {
                    bottom: 6px;
                    background-color: $color-green;
                }
            }
        }
    }

</style>