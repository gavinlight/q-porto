<template>
  <div>
	  <router-view />
  </div>
</template>

<script>

export default {
    name: 'app',
    components: {}
}

</script>

<style lang="scss">
    @import 'src/config.scss';

    html, body {
        background-color: $color-light-blue;
        font-family: $font-text;
        color: $color-dark-grey;
        overflow-x: hidden;
    }
</style>