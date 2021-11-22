<script setup lang="ts">
import DockIcon from './DockIcon.vue';
import dockIcons from './DockData';
interface dockIconInfo {
    title: string, 
    imgSrc: string, 
    link: string, 
    id: string
} 


</script>

<template>
<div id="dockContainer">
    <ul class="osx-dock">
        <li v-for="item in dockIcons">
            <DockIcon :img-src="'/src/assets/logos/' + item.imgSrc" :link="item.link" :id="item.id" :title="item.title"/>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
#osxdock-page {
    color: #fff;
    padding-bottom: 2em;
    margin-bottom: -2em;
    h1,h2 {
        color: #fff;
    }
}

div.cap {
    display: block;
    height: 100px;
    width: 40px;
    .left {
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
    .right {
        background-position: right bottom;
        position: absolute;
        top: 0px;
        right: 0px;
    }
}

ul.osx-dock {
    display: inline-block;
    height: 130px;
    padding: 0 40px 0 0;
    overflow: hidden;
    margin: 0 0 0 40px;
    li {
        display: block;
        position: relative;
        float: left;
        width: 50px;
        height: 50px;
        margin: 60px 0 4px 0;
        -webkit-transition: 0.15s linear;
        -webkit-transition-property: -webkit-transform margin;
        text-align: center;
        &:hover {
            margin-left: 9px;
            margin-right: 9px;
            z-index: 200;
            a {
                -webkit-transform-origin: center bottom;
                -webkit-transform: scale(1.5);
            }
            span {
                display: block;
            }
        }
        a {
            display: block;
            height: 50px;
            padding: 0 1px;
            -webkit-transition: 0.15s linear;
            -webkit-transition-property: -webkit-transform margin;
            margin: 0;
            -webkit-box-reflect: below 2px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(0.45,transparent),to(rgba(255,255,255,0.25)));
            .nearby {
                margin-left: 6px;
                margin-right: 6px;
                z-index: 100;
                a {
                    -webkit-transform-origin: center bottom;
                    -webkit-transform: scale(1.25);
                }
            }
            img {
                width: 48px;
            }
        }
        span {
            background: rgba(0,0,0,0.75);
            position: absolute;
            bottom: 80px;
            margin: 0 auto;
            display: none;
            width: auto;
            font-size: 11px;
            font-weight: bold;
            padding: 3px 6px;
            -webkit-border-radius: 6px;
            color: #fff;
        }
    }
}

div#dockContainer {
        position: fixed;
        bottom: 12px;
        height: 120px;
        padding: 50px 0 0;
        text-align: center;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        width: 100%;
        line-height: 1;
        z-index: 100;
}

#dockContainer,#dockContainer * {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
}

.icons {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform:translate(-50%, 0%);
}
</style>