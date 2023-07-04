<script setup>
import { onMounted, computed } from 'vue'
import { useDataStore } from '../stores/data'

const data = useDataStore();

onMounted(() => {
  data.fetchLinks();
})

const social_links = computed (() => {
    return data.links.filter(l => l.section == 'social')
})
const main_cta = computed (() => {
    return data.links.filter(l => l.section == 'main_cta')
})
const latest = computed (() => {
    return data.links.filter(l => l.section == 'latest')
})
const plain_links = computed (() => {
    return data.links.filter(l => l.section == 'links')
})
</script>
<template>
    <section class="links-page">
        <section class="header">
            <h1 class="sj-logo"><span>SJ</span></h1>
            
            <ul class="social">
                <li v-for="link in social_links">
                    <li><a :href="link.link_url">{{ link.display_text }}</a></li>
                </li>
            </ul>
        </section>
        <ul>
            <li v-for="link in main_cta">
                <a :href="link.link_url" v-if="link.image">
                <figure>
                    <img v-for="i in link.image" :src="i.url" :alt="link.alt"/>
                    <figcaption>
                        {{ link.display_text }}
                    </figcaption>
                </figure>
                </a>
                <p v-else>
                    <a :href="link.link_url">{{ link.display_text }}</a>
                </p>
            </li>
        </ul>
        <h2>Latest</h2>
        <ul>
            <li v-for="link in latest">
                <a :href="link.link_url" v-if="link.image">
                    <figure>
                        <img v-for="i in link.image" :src="i.url" :alt="link.alt"/>
                        <figcaption>
                            {{ link.display_text }}
                        </figcaption>
                    </figure>
                </a>
                <p v-else>
                    <a :href="link.link_url">{{ link.display_text }}</a>
                </p>
            </li>
        </ul>

        <h2>Links</h2>
        <ul>
            <li v-for="link in plain_links">
                <a :href="link.link_url">{{ link.display_text }}</a>
            </li>
        </ul>
    </section>
</template>
  
<style scoped>
.links-page{ 
    max-width: 480px;
}
h1 {
    margin-top: .5rem;
    margin-bottom: .25rem;
}
h2 {
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    text-underline-offset: 2px;
    text-decoration: underline black 2px;
    margin-top: 1.25rem;
}
.header{
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
}
.header li {
    margin: .25rem 0;
    text-align: right;
}
ul {
    list-style: none;
    flex-direction: column;
}

li {
    margin: .5rem 0;
}
li a {
    text-decoration: none;
}

figure {
    margin: 0;
    max-width: unset;
    /* padding: 1rem;
    border: solid 2px black; */
}
</style>
  