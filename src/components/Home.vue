<script setup lang="ts">
function getRandomInt(max:number) {
    return (Math.floor(Math.random() * Math.floor(max))) + 1;
}
let maxBackground:number = 50;
let --image: string = "url(./src/assets/backgrounds/cat" + getRandomInt(maxBackground) + ".jpg)";
</script>

<template>
  <div class="marks">
    <a href="https://docs.google.com/spreadsheets/d/1xVwISSWXJJKRenIa2uEx2CcAih7aZF1dAVuTif9UvTs/edit?usp=sharing">
      <img className="troll" title="Marks" src="./../assets/trollface.png" alt="marks"/>
    </a>
  </div>
</template>

<style lang="scss">
.troll {
  width: 20px;
  height: 20px;
}
.marks {
  position: absolute;
  bottom: 0%;
  left: 0%;
}
html {
  background-image:;
	background: no-repeat center center fixed;
	background-size: cover;
	background-repeat: repeat-y;
	background-color: #000000;
}
</style>