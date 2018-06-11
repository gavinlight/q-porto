<template>
    <transition
        v-on:leave="leave"
        v-on:enter="enter"
        mode="out-in"
    >
        <router-view :key="key" />
    </transition>
</template>

<script>
import FooterLayout from '@/components/global/footer';

export default {
    name: 'app',
    components: { FooterLayout },
    computed: {
        key() {
          return this.$route.params.hasOwnProperty('slug')
          	? this.$route.name + '/' + this.$route.params.slug
            : this.$route.name
        }
    },
    methods: {
        leave: function(el, done){
            el.classList.add('animate-svg');

            let circle = el.querySelector('circle');

            circle.setAttribute("cx", window.position.x);
            circle.setAttribute("cy", window.position.y);

            TweenLite.to(circle, .5, { fill: '#EBEFF1', attr: { r: window.innerWidth * 1.5 }, onComplete: () => {
                el.classList.remove('animate-svg');
                window.scrollTo(0, 0);
                done();
            }} );
        },
        enter: function(el, done){
            el.style.opacity = 0;
            TweenLite.to(el, 1, {opacity: 1});
        }
    }
}

</script>

<style lang="scss">
    @import 'src/reset.scss';
    @import 'src/animations.scss';

    html, body {
        background-color: $color-light-blue;
        font-family: $font-text;
        color: $color-dark-grey;
        overflow-x: hidden;
    }
</style>