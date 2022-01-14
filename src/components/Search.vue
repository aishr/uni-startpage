<script setup lang="ts">
import { onMounted, ref } from 'vue';
import dockIcons from './DockData';
const search = ref<HTMLInputElement>();
const searchSubmit = ref<HTMLInputElement>();

onMounted(() => {
  search.value?.focus();
});

var config = {
    extras: {
        urlRegex: /^(?:(http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}/i,
        protocolRegex: /^[a-zA-Z]+:\/\//i
    }
};

function goToUrl(e:Event) {
    e.preventDefault();
    let input = search.value?.value;
    if (!input){
      return;
    }
    window.location.href = getUrl(input);

}
function getUrl(input: string)
{
    if (input.match(config.extras.urlRegex)){
        return input.match(config.extras.protocolRegex) ? input : "http://" + input;
    }
    let potentialLink = goThroughOptions(input);
    return potentialLink ? potentialLink : "https://google.com/search?q=" + encodeURIComponent(input);
}

function goThroughOptions(input: string){
  let cleanInput = input.trim();
  let splitForSearch = cleanInput.split(":");
  let cleanId = splitForSearch[0].trim();
  if (splitForSearch.length == 1){
    return cleanId in dockIcons ? dockIcons[cleanId].link : false;

  }
  return dockIcons[cleanId].link + "/" + dockIcons[cleanId].search + encodeURIComponent(splitForSearch[1]);
}
</script>

<template>
    <div class="wrap">
      <form @submit="goToUrl" autocomplete="on">
        <input ref="search" id="search" name="search" type="text" placeholder="Search Here!"/>
        <input ref="searchSubmit" id="search_submit" value="Search" type="search">
        <input id="submit" value="Submit" type="submit">
      </form>
    </div>
</template>

<style lang="scss">
.wrap {
        position: absolute;
        right: 10px;
        top: 10px;
}
input[type="text"] {
        height: 60px;
        font-size: 35px;
        display: inline-block;
        font-family: "Lato";
        font-weight: 50;
        border: none;
        outline: none;
        color: #FFF;
        padding: 3px;
        padding-right: 60px;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 3;
        transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
        cursor: pointer;
        background-color: rgba(0,0,0,0.3);
        &:focus {
        width: 400px;
        z-index: 1;
        border-bottom: 1px solid #FFF;
        cursor: text;
          &:hover {
        border-bottom: 1px solid #FFF;

          }
        }
}

input[type="search"] {
        height: 67px;
        width: 63px;
        display: inline-block;
        color:red;
        float: right;
        background: url(/assets/search.png) center center no-repeat;
        background-size: 80% auto;
        text-indent: -10000px;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity .4s ease;
        &:hover {
          opacity: 0.8;
        }
}

input[type="submit"] {
        height: 67px;
        width: 63px;
        display: inline-block;
        color:red;
        float: right;
        background: url(/assets/arrow.png) center center no-repeat;
        background-size: 80% auto;
        text-indent: -10000px;
        border: none;
        position: absolute;
        top: 0;
        right: 467px;
        z-index: 2;
        cursor: pointer;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity .4s ease;
        &:hover {
          opacity: 0.8;
        }
}
</style>