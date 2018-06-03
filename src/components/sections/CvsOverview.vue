<template>

    <section class="cvs-overview">

        <div class="container" v-for="cv in cvs">
            <cv-item :cv="cv"></cv-item>
        </div>

    </section>

</template>

<script>
    import Cvs from '@/data/cvs.json';
    import CvItem from '@/components/sections/cvitem';

    export default {
        name: 'CvsOverview',
        components: { CvItem },
        data() {
            return {
                'cvs': Cvs
            }
        }
    }

</script>