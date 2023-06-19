<script setup>
import { onMounted, computed } from 'vue'
import { useDataStore } from '../stores/data'

const data = useDataStore();

onMounted(() => {
  data.fetchLinks();
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
    <section>
        <section class="header">
            <h1>SJ</h1>
            <p><a href="https://instagram.com/themostawful">@themostawful</a></p>
        </section>
        <ul>
            <li v-for="link in main_cta">
                <figure v-if="link.image">
                    <img v-for="i in link.image" :src="i.url" :alt="link.alt"/>
                    <figcaption>
                        <a :href="link.link_url">{{ link.display_text }}</a>
                    </figcaption>
                </figure>
                <p v-else>
                    <a :href="link.link_url">{{ link.display_text }}</a>
                </p>
            </li>
        </ul>
        <h2>Latest</h2>
        <ul>
            <li v-for="link in latest">
                <figure v-if="link.image">
                    <img v-for="i in link.image" :src="i.url" :alt="link.alt"/>
                    <figcaption>
                        <a :href="link.link_url">{{ link.display_text }}</a>
                    </figcaption>
                </figure>
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
h1 {
    margin-top: .5rem;
    margin-bottom: .25rem;
}
h2 {
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
}
.header{
    margin-bottom: 2.5rem;
}
ul {
    list-style: none;
}

li {
    margin: .75rem 0;
}

figure {
    margin: 0;
    max-width: unset;
}
</style>
  