<template>
  <el-container class="home-container animate-fade-in" id="home">
    <p class="home-text">Hi, I'm Mostafa Fathy</p>
    <el-row align="middle" class="job">
      <h1 class="home-heading">Frontend Developer</h1>
      <p class="home-text description">
        Transforming ideas into interactive and seamless digital experiences with cutting-edge
        <span>frontend</span> development.
      </p>
    </el-row>
    <el-row class="social-links">
      <div v-for="link in socialLinks" class="social-link" :key="link.id">
        <a class="button" :href="link.link" target="_blank">
          <component :is="link.icon" />
        </a>
      </div>
    </el-row>
    <div class="skills-section">
      <div
        class="skills-container"
        @mouseenter="
          (e) => {
            const target = e.target as HTMLElement
            target.style.animationPlayState = 'paused'
          }
        "
        @mouseleave="
          (e) => {
            const target = e.target as HTMLElement
            target.style.animationPlayState = 'running'
          }
        "
      >
        <div v-for="skill in skills" :key="skill.id" class="skills-card">
          <component :is="skill.icon" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <div class="resume-section">
      <el-link
        href="https://drive.usercontent.google.com/uc?id=1008XXzh4SpdSzfRhTLDm5YqtxORLFfMI&authuser=0&export=download"
        >Download Resume</el-link
      >
    </div>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconGmail from './icons/IconGmail.vue'
import IconVue from './icons/IconVue.vue'
import IconReact from './icons/IconReact.vue'
import IconTypescript from './icons/IconTypescript.vue'
import IconTailwind from './icons/IconTailwind.vue'
import IconHtml from './icons/IconHtml.vue'
import IconCss from './icons/IconCss.vue'
import IconJavascript from './icons/IconJavascript.vue'
import IconGit from './icons/IconGit.vue'
import IconBootstrap from './icons/IconBootstrap.vue'
import IconElement from './icons/IconElement.vue'
import IconVite from './icons/IconVite.vue'
import IconNode from './icons/IconNode.vue'

const socialLinks = ref([
  { id: 1, name: 'github', icon: IconGithub, link: 'https://github.com/MostafaFathy367' },
  {
    id: 2,
    name: 'linkedin',
    icon: IconLinkedin,
    link: 'www.linkedin.com/in/mostafa-fathy-4375061b3',
  },
  { id: 2, name: 'Gmail', icon: IconGmail, link: 'mailto:mostafa.fathy367@gmail.com' },
])
const skills = ref([
  { id: 1, name: 'Vue', icon: IconVue },
  { id: 2, name: 'React', icon: IconReact },
  { id: 3, name: 'Typescript', icon: IconTypescript },
  { id: 4, name: 'HTML', icon: IconHtml },
  { id: 5, name: 'CSS', icon: IconCss },
  { id: 6, name: 'JavaScript', icon: IconJavascript },
  { id: 7, name: 'TailwindCSS', icon: IconTailwind },
  { id: 8, name: 'Bootstrap', icon: IconBootstrap },
  { id: 9, name: 'ElementPlus', icon: IconElement },
  { id: 10, name: 'Git', icon: IconGit },
  { id: 11, name: 'Vite.js', icon: IconVite },
  { id: 12, name: 'Node.js', icon: IconNode },
])
</script>

<style>
.home-container {
  min-height: 100vh;
  color: white;
  gap: 10px;
  padding: 3rem 0;
}

.job {
  gap: 20px;
}

.home-text {
  font-size: 1.125rem;
  color: #f3f3f398;
}

.home-text.description {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  width: 64%;
}

.home-text.description span {
  background: linear-gradient(135deg, #a476ff 25%, #eee5ff, #a476ff 75%);
  background-size: 400% 100%;
  background-clip: text;
  color: transparent;
  animation: shine 3s linear infinite;
}

.home-heading {
  font-size: 3.75rem;
  font-weight: 500;
  width: 34%;
}

.social-links {
  padding: 3rem 0;
  gap: 10px;
}

.social-link a svg {
  fill: #ccc;
}

.skills-section {
  position: relative;
  overflow-x: hidden;
}

.skills-container {
  display: flex;
  gap: 5rem;
  animation: scroll 50s linear 0s infinite forwards;
  width: max-content;
}

.skills-card {
  display: flex;
  gap: 10px;
  align-items: center;
}

.skills-card svg {
  width: 50px;
  height: 50px;
}

.resume-section {
  padding: 5rem 0;
}

.resume-section a {
  padding: 20px;
  border: 1px solid;
  background-color: #fff;
  border-radius: 8px;
}

.el-link.is-underline:hover:after {
  border-bottom: none !important;
}

@keyframes scroll {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(-60%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-in {
  animation: slideIn 1s ease-in-out;
}
@media (max-width: 767px) {
  .home-heading {
    font-size: 3em;
    width: 100%;
  }
  .home-text.description {
    width: 100%;
  }
}
/* @media (min-width: 768px) {
  .home-heading {
    font-size: 3.75rem;
  }
} */
</style>
