<script setup lang="ts">
// import { ref } from 'vue'
// const src = ref('http://42.194.198.23')
import { getNewsList } from '@/api/official'
import { onMounted, ref } from 'vue'
const params = ref({
  gids: 2,
  page_size: 20,
  type: 2
})
const cosDataArray = ref()
onMounted(() => {
  getNewsList(params.value).then((res: any) => {
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
<style></style>
