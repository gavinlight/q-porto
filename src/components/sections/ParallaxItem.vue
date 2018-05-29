<template>

    <img v-bind:style="styles" class="parallax-item" :src="backgroundUrl()" />

</template>

<script>
    export default {
        name: 'ParallaxItem',
        props: {
            'background': {
                default: '',
                type: String
            },
            'position': {
                default: {
                    right: "auto",
                    left: "auto",
                    top: "auto",
                    bottom: "auto"
                },
                type: Object
            },
            'width': {
                default: 50,
                type: Number
            },
            'height': {
                default: 50,
                type: Number
            },
            'speed': {
                default: 100,
                type: Number
            },
            'index': {
                default: 0,
                type: Number
            }
        },
        methods: {
            backgroundUrl: function(){
                return '/static/img/backgrounds/' + this.background;
            }
        },
        data() {
            return {
                styles: {
                    width: this._props.width + 'px',
                    height: this._props.height + 'px',
                    top: this._props.position.top,
                    bottom: this._props.position.bottom,
                    right: this._props.position.right,
                    left: this._props.position.left,
                }
            }
        },
        mounted(){
            var scene = new ScrollMagic.Scene({
                triggerElement: this.$parent.$el, // starting scene, when reaching this element
                triggerHook: (this.index === 0 ? 'onLeave' : 0.5),
                duration: '250%'
            }).setTween(TweenMax.to(this.$el, 1, {
                y: '-' + this.speed + '%'
            })).addTo(window.scrollController);
        }
    }


</script>

<style lang="scss" scoped>

    img.parallax-item {
        position: absolute;
    }

</style>