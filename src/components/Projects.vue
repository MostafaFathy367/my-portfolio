<template>
  <el-container id="projects" class="projects-container animate-fade-in">
    <h2 class="section-title">My work</h2>
    <h3 class="secund-title">Projects</h3>
    <el-row :gutter="20">
      <el-col v-for="(project, index) in projects" :key="index" :lg="8" :md="12" :sm="24">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <h3 class="project-title">{{ project.name }}</h3>
          </template>
          <img :src="project.image" :alt="project.name" class="project-image" />
          <p class="project-description">{{ project.description }}</p>
          <template #footer>
            <el-link class="button" :href="project.link" target="_blank">Live Demo</el-link>
            <el-link class="button" :href="project.code" target="_blank">code</el-link>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
const projects = [
  {
    name: 'Memory Game',
    description: 'A simple memory game built with HTML, CSS, and JavaScript.',
    image: 'https://raw.githubusercontent.com/MostafaFathy367/game/refs/heads/main/images/game.png',
    link: 'https://mostafafathy367.github.io/game',
    code: 'https://github.com/MostafaFathy367/game',
  },
  {
    name: 'Classic Portfolio',
    description: 'This is a personal portfolio website built using HTML, CSS, and JavaScript',
    image:
      'https://raw.githubusercontent.com/MostafaFathy367/Classic/refs/heads/main/images/Screenshot-2.png',
    link: 'https://mostafafathy367.github.io/Classic',
    code: 'https://github.com/MostafaFathy367/Classic',
  },
  { name: 'مشروع 3', description: 'وصف المشروع 3', image: 'link-to-image-3', link: '#' },
]
</script>

<style>
.projects-container {
  padding: 5rem 0;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  min-height: 100vh;
}

.el-card.project-card {
  padding: 20px;
  background-color: transparent;
  transition: transform 0.3s;
  margin-bottom: 20px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
}

.project-title {
  color: #fff;
}
.project-description {
  color: rgba(255, 255, 255, 0.8);
}
</style>
