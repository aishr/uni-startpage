<script setup lang="ts">
</script>

<!--
<template>
    <div class="listdiv">
      <h2>Cases</h2>
      <ul class="topul">
        <li class="topli">
            <a href="sans/"><div class="textLabels">s</div>SANS</a>
        </li>
        <li class="topli">
            <a href="go/sfstory"><div class="textLabels">sf</div>SfStory</a>
        </li>
      </ul>
    </div>

    <div class="listdiv">
      <h2>Cases</h2>
      <ul class="topul">
        <li class="topli">
            <a href="sans/"><div class="textLabels">s</div>SANS</a>
        </li>
        <li class="topli">
            <a href="go/sfstory"><div class="textLabels">sf</div>SfStory</a>
        </li>
      </ul>
    </div>
</template>
-->

<style lang="scss">
.listdiv {
        width: 300px;
        margin: 30px;
        display: inline-block;
        vertical-align: top;
        background-color: rgba(0,0,0,0.3);
}
h2 {
        font: 400 45px/1.5 Helvetica, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        color: white;
        text-shadow: 4px 4px 5px gray;
}

.topul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        color: white;
}

.topli {
        font: 200 30px/1.5 Helvetica, Verdana, sans-serif;
        border-bottom: 1px solid #ccc;
        color: white;
        text-shadow: 4px 4px 5px gray;
}

.topli:last-child {
        border: none;
        color: white;
        text-shadow: 4px 4px 5px gray;
}

.topli a {
        text-decoration: none;
        color: white;
        text-shadow: 4px 4px 5px gray;
        -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
        -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
        -o-transition: font-size 0.3s ease, background-color 0.3s ease;
        -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
        transition: font-size 0.3s ease, background-color 0.3s ease;
        display: block;
}

.topli a:hover{
        font-size: 40px;
}	

.underul {
        list-style-type: none;
        display: block;
        font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
}

.underli a {
        color:white;
        text-shadow: 4px 4px 5px gray;
}

.underli a:hover {
    font-size: 25px;
}
.textLabels {
    display: inline-block;
    background-color: black;
    border: 1px solid white;
    font-size: 10px;
    margin-right: 5px;
    padding: 6px 6px 0px 6px;
    text-align: center;
    vertical-align: middle;
    line-height:8px;
    height: 13px;
}

</style>