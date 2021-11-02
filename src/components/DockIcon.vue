<script setup lang="ts">

defineProps<{ 
    link: string,
    imgSrc: string,
    title: string,
    id:string

 }>()

</script>

<template>
    <a :href="link"> 
        <img :title="title" :src="imgSrc" :alt="id" align="left" class="dockIcon"/> 
        <div class="centered">{{ id }}</div>
    </a>
</template>
<style lang="scss">
    .dockIcon {
        width: 50px;
        height: 50px;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(0, 0, 0, 0.7);
        font: 200 25px/1.5 Helvetica, Verdana, sans-serif;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
</style>