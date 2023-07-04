<script setup>
import { onMounted } from 'vue';
import { useDataStore } from '../stores/data'

const data = useDataStore();

onMounted(() => {
  data.fetchData();
})

</script>

<template>
  <section class="landing">
    <section>
      <span>pls don't mind my mess, I'm working on it 👩🏾‍💻</span>
      <h1>Hi, I'm Sarah Joy!</h1>
      <!-- <span>I'm a code school grad w/ a BA in Creative Writing. Over the past 8 years, I worked at a start-up, taught at a code school, and most recently worked at an interactive installation and web studio. Now, I'm pursuing that indie dev life and building my first mobile app <a href="https://themostawful.substack.com/s/impulse-bye-progress-and-launch" target="_blank">Impulse Bye</a>.</span> -->
    <section>
    </section>
      <ul>
        <!-- polaroids? -->
        <li v-for="img in data.me"
          class="polaroid-bg">
          <figure>
            <img v-for="i in img.image" :src="i.url" :alt="img.alt"/>
            <figcaption>{{ img.title }}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
    <section>
      <!-- TODO make a componentnntntntnnt -->
      <h2>I have a lot of ideas that I want to bring to life,</h2>
      <ul>
        <!-- polaroids? -->
        <li v-for="idea in data.ideas" class="idea">
          <figure>
            <img v-for="i in idea.image" :src="i.url" :alt="idea.alt"/>
            <figcaption>
              <h3>{{ idea.title }}</h3>
              <p>{{ idea.description }}</p>
              <br>
              <ul>
                <li class="link" v-if="idea.repo_url">
                  <a :href="idea.repo_url">see the code</a>
                </li>
                <li class="link"  v-if="idea.live_url">
                  <a :href="idea.live_url">visit the thing</a>
                </li>
              </ul>
              <br>
              <ul>
                <li class="tag" v-for="tag in idea.tags"> #{{ tag.toLowerCase() }}</li>
              </ul>
              <span class="status tag">({{ idea.status }})</span>
            </figcaption>
          </figure>
        </li>
      </ul>    
    </section>
    <section>
      <h2>and hobbies that help me recenter and relax,</h2>
      <ul class="box-list">
        <li v-for="hobby in data.hobbies">
          <h3>{{ hobby.title }}</h3>
          <!-- <p>{{ hobby.description }}</p> -->
        </li>
      </ul>
    </section>
    <section>
      <h2>and favorites that make me feel things,</h2>
      <ul class="bullet-list">
        <li v-for="fav in data.favorites" :class="fav.category">
          <h3>{{ fav.title }}</h3>
        </li>
      </ul>
    </section>
    <section>
      <h2>and beliefs and values I strive to live by.</h2>
      <ul class="bullet-list values">
        <li v-for="value in data.values">
          <h3>{{ value.title }}</h3>
        </li>
      </ul>
    </section>

    <footer>
      <span>
        💜 SJ
      </span>
      <!-- <ul class="social">
        <li>instagram @themostawful</li>
        <li>substack @themostawful</li>
        <li>youtube @sjs_screen</li>
      </ul> -->
    </footer>

  </section>
</template>
