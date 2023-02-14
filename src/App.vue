<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>
    <h1>Hi, I'm Sarah Joy</h1>
    <section>
      <ul>
        <li><img src="http://placekitten.com/g/200/300"/></li>
        <li><img src="http://placekitten.com/g/200/300"/></li>
        <li><img src="http://placekitten.com/g/200/300"/></li>
        <li><img src="http://placekitten.com/g/200/300"/></li>
        <li><img src="http://placekitten.com/g/200/300"/></li>
      </ul>
    </section>
    <section>
      <h2>I have a lot of ideas</h2>
      <ul>
        <li>idea</li>
      </ul>
    </section>
    <section>
      <h2>and skills to try to bring my ideas to life</h2>
      <ul>
        <li>skills</li>
      </ul>
    </section>
    <section>
      <h2>I also have hobbies to help me recenter and feel grounded</h2>
      <ul>
        <li>hobby</li>
      </ul>
    </section>
    <section>
      <h2>and favorites that I just think are freaking rad</h2>
      <ul>
        <li>favorite</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
</style>
