import { defineStore } from 'pinia'
import { ref, type Ref, type VNodeRef } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  const sectionRefs: Ref<{
    home?: any
    project?: any
    contact?: any
  }> = ref({})

  return { sectionRefs }
})
