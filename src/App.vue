<script setup>

</script>

<template>
  <main>
    <RouterView/> 
  </main>
</template>

<style>

ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  /* width: 100%;
  overflow-x: auto; */
}

ul.bullet-list {
  flex-direction: column;
}
ul.bullet-list {
  list-style: inside;
}
ul.bullet-list.values li {
  list-style-type: "🫀"; 
}
ul.bullet-list li.book {
  list-style-type: "📖"; 
}
ul.bullet-list li.tv-show {
  list-style-type: "📺"; 
}
ul.bullet-list li.song {
  list-style-type: "🎶"; 
}
ul.bullet-list li.food {
  list-style-type: "🍽️"; 
}

ul.bullet-list li h3 {
  display: inline-block;
}

ul.box-list li {
  margin: 0 1rem 1rem 0;
  border: solid 2px black;
  border-radius: 5px;
  padding: 1.2rem;
}

ul.box-list li h3 {
  margin: 0;
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

footer {
  text-align: right;
  margin: 3rem 0;
}
</style>
