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
    <span>pls don't mind my mess, I'm working on it 👩🏾‍💻</span>
    <h1>Hi, I'm Sarah Joy!</h1>
    <section>
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
      <h2>I have a lot of ideas,</h2>
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
      <h2>skills to bring my ideas to life,</h2>
      <ul class="box-list">
        <li v-for="skill in data.skills">
          <h3>{{ skill.title }}</h3>
          <!-- <p>{{ skill.description }}</p> -->
        </li>
      </ul>    
    </section>
    <section>
      <h2>and things I want to get better at.</h2>
      <ul class="box-list">
        <li v-for="strugg in data.struggles"
            :style="`background-image: url(${strugg.image ? strugg.image[0].url : ''})`"
            class="fortune-bg">
          <h3>{{ strugg.title }}</h3>
          <!-- <p>{{ strugg.description }}</p> -->
        </li>
      </ul>    
    </section>
    <section>
      <h2>I also have hobbies to help me recenter and relax,</h2>
      <ul class="box-list">
        <li v-for="hobby in data.hobbies">
          <h3>{{ hobby.title }}</h3>
          <!-- <p>{{ hobby.description }}</p> -->
        </li>
      </ul>
    </section>
    <section>
      <h2>favorites that make me feel things,</h2>
      <ul class="bullet-list">
        <li v-for="fav in data.favorites" :class="fav.category">
          <h3>{{ fav.title }}</h3>
        </li>
      </ul>
    </section>
    <section>
      <h2>and beliefs and values I try to live by.</h2>
      <ul class="bullet-list values">
        <li v-for="value in data.values">
          <h3>{{ value.title }}</h3>
        </li>
      </ul>
    </section>

    <footer>
      💜 SJ
    </footer>

  </section>
</template>
