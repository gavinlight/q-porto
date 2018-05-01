<template>

    <article class="project" :id="'project-' + project.slug">
        <h1>{{ project.title }}</h1>
    </article>

</template>

<script>


    console.log(this._props);
    export default {
        name: 'Project',
        props: {
            'project': {
                type: Object
            }
        },
        mounted: function(){
            console.log(this);
        }
    }

</script>