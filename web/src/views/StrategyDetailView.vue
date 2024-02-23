<script setup lang="ts">
import { getPostFull } from '@/api/strategy'
import { onMounted, ref } from 'vue'
const params = ref({
  gids: 2,
  post_id: 43400355,
  read: 1
})
const cosDataArray = ref()
onMounted(() => {
  getPostFull(params.value).then((res: any) => {
    const { message, data } = res
    if (message === 'OK') {
      cosDataArray.value = data?.list ?? []
    }
  })
})
</script>

<template>
  <main>
    <div>22</div>
  </main>
</template>
<style></style>
