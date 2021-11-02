<script setup lang="ts">
import $ from 'jquery';
import MarksVue from './Marks.vue';
import DockVue from './Dock.vue';
import TimeAndDay from './TimeAndDay.vue';
import Search from './Search.vue';
$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#search_submit').click();
    });
});

window.onkeydown = function (e) {
    e = e || window.event || {};
    var charCode = e.charCode || e.keyCode || e.which;
    if(charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
            $('#search').focus();
    }
}
function getRandomInt(max:number) {
    return (Math.floor(Math.random() * Math.floor(max))) + 1;
}
let maxBackground:number = 50;
var image: string = `url(/src/assets/backgrounds/cat${getRandomInt(maxBackground)}.jpg)`;
</script>

<template>
  <div class="bg" :style="{'background-image':image}"></div>
  <Search/>
  <MarksVue/>
  <DockVue/>
  <TimeAndDay/>
</template>

<style lang="scss">
body, html, #app {
  height: 100%;
  margin: 0;
}
.bg {
  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.troll {
  width: 20px;
  height: 20px;
}
.marks {
  position: absolute;
  bottom: 0%;
  left: 0%;
}
</style>