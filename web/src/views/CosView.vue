<script setup lang="ts">
import { getForm } from '@/api/cos'
import { onMounted, ref } from 'vue'
const params = ref({
  forum_id: 49,
  gids: 2,
  is_good: false,
  is_hot: false,
  page_size: 20,
  sort_type: 1
})
const cosDataArray = ref()
onMounted(() => {
  getForm(params.value).then((res: any) => {
    const { message, data } = res
    if (message === 'OK') {
      cosDataArray.value = data?.list ?? []
    }
  })
})
</script>

<template>
  <main>
    <div class="shadow-xl card bg-base-100 my-[10px]" v-for="item in cosDataArray" :key="item">
      <figure>
        <img :src="item?.post?.cover" alt="Shoes" />
      </figure>
      <div class="flex flex-row card-body text-nowrap">
        <div class="avatar">
          <div class="w-16 h-16 rounded-full">
            <img :src="item?.user?.avatar_url" />
          </div>
        </div>
        <div>
          <h2 class="card-title">{{ item?.user?.nickname }}</h2>
          <p class="text-wrap">{{ item?.user?.introduce }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
