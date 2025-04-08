<template>
  <header class="navbar">
    <el-menu :ellipsis="false" mode="horizontal" default-active="home" class="nav-container">
      <el-menu-item index="home" @click="scrollToSection('home')">Home </el-menu-item>
      <el-menu-item index="projects" @click="scrollToSection('projects')">Projects </el-menu-item>
      <el-menu-item index="contact" @click="scrollToSection('contact')">Contact</el-menu-item>
    </el-menu>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNavbarStore } from '@/stores/navbar'

const { sectionRefs } = useNavbarStore()

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
onMounted(() => {
  document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-container')
    if (window.scrollY > 10) {
      navbar.classList.add('scroll')
    } else {
      navbar.classList.remove('scroll')
    }
  })
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      threshold: 0.6,
    },
  )

  Object.values(sectionRefs).forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style>
.navbar {
  display: flex;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 10px;
  z-index: 1000;
}
.nav-container {
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: transparent !important;
  padding: 5px;
}
.nav-container.el-menu--horizontal.el-menu:not(.nav-container.scroll) {
  border-bottom: none;
}
.nav-container.scroll {
  backdrop-filter: blur(60px);
  border-radius: 100px;
  border: 2px solid #c4c4c4;
}
.el-menu-item {
  color: #fff !important;
}
.el-menu-item:hover,
.el-menu-item:focus {
  background-color: #333 !important;
  color: #fff !important;
}
</style>
