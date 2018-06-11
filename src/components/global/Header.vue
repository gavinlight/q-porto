<template>

    <header>
        <div class="container container-big">

            <router-link
                v-on:click.native="mousePos($event.clientX, $event.clientY)"
                class="logo"
                :to="{ name: 'home' }">
                <logo :size="50" :color="'#6B6B6B'" />
            </router-link>

            <nav>
                <router-link
                    v-on:click.native="mousePos($event.clientX, $event.clientY)"
                    :to="{ name: 'home' }">
                    My Work
                </router-link>
                <router-link
                    v-on:click.native="mousePos($event.clientX, $event.clientY)"
                    :to="{ name: 'about' }">
                    About me
                </router-link>
            </nav>

        </div>
    </header>

</template>

<script>
    import Logo from '@/components/global/Logo';

    export default {
        name: 'HeaderLayout',
        components: {
            Logo
        }
    }

</script>

<style lang="scss">
    header {
        width: 100%;

        margin: 1em auto;
        font-size: 1.2em;

        position: fixed;
        top: 0;
        z-index: 3;

        @media(max-width: 650px){
            position: absolute;
        }

        .container {

            .logo {
                &:after {
                    display: none;
                }

                @media(max-width: 400px){
                    svg {
                        width: 25px;
                    }
                }
            }

            a:after {
                bottom: 2px;
            }


            > a {
                float: left;
                margin-left: 2em;
            }

            > nav {
                float: right;
                margin-right: 2em;

                > a {
                    margin-top: 0.8em;
                    &:first-child {
                        margin-right: 1.5em;
                    }
                }
            }

            &:after {
                content: '';
                clear: both;
                display: table;
            }
        }
    }
</style>