<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useDataStore } from './stores/data'

const data = useDataStore();

onMounted(() => {
  data.fetchData();
})
</script>

<template>
  <main>
    <h1>Hi, I'm Sarah Joy</h1>
    <section>
      <ul>
        <li v-for="img in data.me">
          <figure>
            <img v-for="i in img.image" :src="i.url" :alt="img.alt"/>
            <figcaption>{{ img.title }}</figcaption>
          </figure>
        </li>
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

figure {
  margin: 0 .865rem;
}

img {
  height: 200px;
  width: auto;
}
</style>
