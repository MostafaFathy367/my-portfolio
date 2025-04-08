<script setup lang="ts">
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Projects from './components/Projects.vue'
import { useNavbarStore } from '@/stores/navbar'

const { sectionRefs } = useNavbarStore()
console.log('🚀 ~ sectionRefs:', sectionRefs)
</script>

<template>
  <el-container class="app-container">
    <Navbar />
    <Home :ref="(el) => (sectionRefs['home'] = el)" />
    <Projects :ref="(el: Element) => (sectionRefs['project'] = el)" />
    <Contact :ref="(el) => (sectionRefs['contact'] = el)" />
  </el-container>
</template>

<style>
.app-container {
  display: block !important;
  min-height: 100vh;
  max-width: 64rem;
  margin: 0 auto;
  color: white;
}
@media (max-width: 1050px) {
  .app-container {
    padding: 0 2rem;
  }
}
</style>
