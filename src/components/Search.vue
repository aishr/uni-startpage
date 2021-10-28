<script setup lang="ts">
</script>

<template>
    <div class="wrap">
      <form onsubmit="window.location.href = get_url(); return false;" autocomplete="on">
        <input id="search" name="search" type="text" placeholder="Search Here!">
        <input id="search_submit" value="Search" type="search">
        <input id="submit" value="Submit" type="submit">
      </form>
    </div>
</template>

<style lang="scss">
</style>