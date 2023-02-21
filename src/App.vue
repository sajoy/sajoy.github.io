<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useDataStore } from './stores/data'

const data = useDataStore();

onMounted(() => {
  data.fetchData();
})

const bgUrl = (content) => {
  if (!content['image (from bg_img)']) return '';
  let i = content['image (from bg_img)'].length > 1 ? Math.floor(Math.random() * content['image (from bg_img)'].length) : 0;
  let img = content.bg_img ? content['image (from bg_img)'][i] : null;
  return img.url
}

const bgClass = (content) => {
  /*
    if many bg images
    pick a random one

    return filename-bg
  */
  if (!content['image (from bg_img)']) return '';

  let i = content['image (from bg_img)'].length > 1 ? Math.floor(Math.random() * content['image (from bg_img)'].length) : 0;
  let img = content.bg_img ? content['image (from bg_img)'][i] : null;
  return 'laptop-bg'
} 
</script>

<template>
  <main>
    <span>pls don't mind my mess, I'm working on it 👩🏾‍💻</span>
    <h1>Hi, I'm Sarah Joy</h1>
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
      <h2>I have a lot of ideas</h2>
      <ul>
        <!-- polaroids? -->
        <li v-for="idea in data.ideas"
            :class="bgClass(idea)" class="idea">
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
      <h2>and skills to bring my ideas to life</h2>
      <ul>
        <!-- fortune cookie papers? -->
        <li v-for="skill in data.skills">
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </li>
      </ul>    
    </section>
    <section>
      <h2>and things I want to get better at</h2>
      <ul>
        <!-- fortune cookie papers? -->
        <li v-for="strugg in data.struggles"
            :style="`background-image: url(${strugg.image ? strugg.image[0].url : ''})`"
            class="fortune-bg">
          <h3>{{ strugg.title }}</h3>
          <p>{{ strugg.description }}</p>
        </li>
      </ul>    
    </section>
    <section>
      <h2>I also have hobbies to help me recenter and feel grounded</h2>
      <ul>
        <li v-for="hobby in data.hobbies">
          <h3>{{ hobby.title }}</h3>
          <p>{{ hobby.description }}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>and favorites that that make me feel things</h2>
      <ul>
        <!-- hearts -->
        <li v-for="fav in data.favorites"
            :style="`background-image: url(${fav.image ? fav.image[0].url : ''})`"
            class="heart-bg">
          <h3>{{ fav.title }}</h3>
          <p>({{ fav.category }})</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>and values I try to live by</h2>
      <ul>
        <!-- hearts -->
        <li v-for="value in data.values"
            :style="`background-image: url(${value.image ? value.image[0].url : ''})`"
            class="heart-bg">
          <h3>{{ value.title }}</h3>
          <p>{{ value.category }}</p>
          <p>{{ value.link }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>

ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  /* width: 100%;
  overflow-x: auto; */
}


li {
  padding: 0;
  box-sizing: border-box;
}

li.link {
  padding-right: 1rem;
}

.tag {
  font-size: .85rem;
  border-radius: 5px;
  line-height: .95rem;
  padding: .25rem;
  margin: .125rem;
}

li.tag {
  background: black;
  color: lavender;
}

li.idea {
  border: solid 2px black;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  min-width: 23%;
}

li.polaroid-bg {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 240px;
  padding: 0;
  text-align: center;
}
li.polaroid-bg figure {
  max-width: unset;
}
li.fortune-bg {
  background-size: contain;
  background-repeat: no-repeat;
  /* width: 270px; */
  /* padding: .5rem 2rem; */
}
li.heart-bg {
  background-size: contain;
  background-repeat: no-repeat;
  width: 190px;
  height: 190px;
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
}

figure {
  margin: 0;
  margin-right: .5rem;
  max-width: 180px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.status {
  margin-top: .5rem;
  display: inline-block;
  background: rgba(255,255,255,.5);
}
</style>
