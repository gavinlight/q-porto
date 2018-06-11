<template>

    <article class="footer-item">

        <template v-if="type === 'project'">

            <router-link
                v-on:click.native="mousePos($event.clientX, $event.clientY)"
                :to="{ name: 'project', params: { slug: project.slug }}"
            >
                <img :src="this.icon_url" class="icon" />
                <h5 class="link-hover">{{ project.title }}</h5>
                <p>{{ project.sub_title }}</p>
            </router-link>

        </template>
        <template v-else-if="type === 'contact'">

            <a href="mailto:info@quendoline.nl">
                <img :src="this.icon_url" class="icon" />
                <h5 class="link-hover">Contact</h5>
                <p>Get in touch</p>
            </a>

        </template>

    </article>

</template>

<script>

    export default {
        name: 'ProjectFooterItem',
        props: {
            'project': {
                default: () => { return {
                    'icon': 'sphere'
                } },
                type: Object
            },
            'type': {
                default: 'project',
                type: String
            }
        },
        data() {
            return {
                icon_url: '/static/img/icons/' + this.project.icon + '.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

    .footer-item {
        flex: 1 0 33.3%;
        margin-bottom: 4em;
        vertical-align: top;

        @media(max-width: 550px){
            flex: 1 0 50%;
        }

        @media(max-width: 350px){
            flex: 1 0 100%;
        }

        > a {
            display: block;
            text-align: center;

            > img {
                height: 25px;
            }

            > h5 {
                margin: .5em auto .3em;
                font-family: $font-header;
                font-size: 1.5em;
                display: table;

                &:after {
                    bottom: 3px;
                }
            }

            > p {
                font-size: 1em;
                display: block;
            }

            &:hover:after {
                display: none;
            }
        }
    }

</style>