<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { getForm } from '@/api/cos'
import { onMounted } from 'vue'
onMounted(() => {
  console.log('22')
  getForm()
})
</script>

<template>
  <main>
    <nav>
    </nav>
  </main>
</template>
