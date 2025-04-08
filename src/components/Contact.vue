<template>
  <el-container id="contact" class="contact-container">
    <h2 class="section-title">Let's talk</h2>
    <h3 class="secund-title">Contact</h3>
    <el-row>
      <el-col :lg="12" :md="24" :sm="24">
        <p class="contact-description">
          Have a question or a project in mind? Feel free to reach out.
        </p>
      </el-col>
      <el-col :lg="12" :md="24" :sm="24">
        <el-form :model="formData" label-position="top" class="contact-form">
          <el-form-item>
            <el-input placeholder="Type Your Name" v-model="formData.name" />
          </el-form-item>
          <el-form-item>
            <el-input type="email" v-model="formData.email" placeholder="Type Your Email" />
          </el-form-item>
          <el-form-item>
            <el-input type="textarea" v-model="formData.message" placeholder="Type Your Message" />
          </el-form-item>
          <el-button plain htmlType="submit" size="large" @click="handleSubmit">Submit</el-button>
        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts" setup>
import emailjs from '@emailjs/browser'
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('🚀 ~ handleSubmit ~ formEl:', formData)
  emailjs.sendForm('service_2ftcsmj', '__ejs-test-mail-service__', JSON.stringify(formData))
}
</script>

<style>
.contact-container {
  padding: 50px;
}

.contact-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
}

.contact-form input {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
}

.contact-form .el-input__wrapper,
.contact-form .el-textarea__inner {
  background-color: transparent;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  box-shadow: none;
  box-shadow: 0 0 0 1px #838383 inset;
}

.el-textarea__inner:focus {
  box-shadow: 0 0 0 1px #838383 inset;
}
</style>
