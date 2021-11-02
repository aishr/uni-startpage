<script setup lang="ts">
</script>

<template>
    <div class="listdiv">
      <h2>TAing</h2>
      <ul class="topul">
        <li class="topli">
            <a href="https://www.student.cs.uwaterloo.ca/~se463/"><div class="textLabels">463</div>CS 463</a>
            <ul class="underul">
               <li class="underli">
                 <a href="https://campuswire.com/c/G6A5F90C2/"><div class="textLabels">463cw</div>Campuswire</a>
               </li>
               <li class="underli">
                 <a href="https://piazza.com/class/k9ta27cqmme6dn"><div class="textLabels">463pi</div>Piazza</a>
               </li>
            </ul>
        </li>
      </ul>
    </div>
</template>

<style lang="scss">
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

</style>