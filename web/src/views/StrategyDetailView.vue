<script setup lang="ts">
import { getPostFull } from '@/api/strategy'
import { onActivated, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const params = ref({})
const infoDetailObj = ref({})
onActivated(() => {
  params.value = {
    gids: 2,
    post_id: route.query.post_id,
    read: 1
  }
  getPostFull(params.value).then((res: any) => {
    const { message, data } = res
    if (message === 'OK') {
      infoDetailObj.value = data?.post ?? {}
      console.log(infoDetailObj.value,'infoDetailObj')
    }
  })
})
</script>

<template>
  <main class="px-[10px] overflow-y-auto">
    <p class="font-size-[24px] text-[24px] ">
      {{ infoDetailObj?.post?.subject }}
    </p>
    <div class=""  v-html="infoDetailObj?.post?.content"></div>
  </main>
</template>
<style></style>
