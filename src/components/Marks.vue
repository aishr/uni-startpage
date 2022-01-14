<script setup lang="ts">
import troll from '/assets/trollface.png';
</script>

<template>
  <div class="marks">
    <a href="https://docs.google.com/spreadsheets/d/1xVwISSWXJJKRenIa2uEx2CcAih7aZF1dAVuTif9UvTs/edit?usp=sharing">
      <img className="troll" title="Marks" :src=troll alt="marks"/>
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
</style>