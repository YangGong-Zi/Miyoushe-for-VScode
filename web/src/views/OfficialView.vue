<script setup lang="ts">
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
        <img :src="item?.post?.cover || item?.image_list[0]?.url" alt="Shoes" />
      </figure>
      <div class="flex flex-row card-body text-nowrap">
        <div class="avatar">
          <div class="w-16 h-16 rounded-full">
            <img :src="item?.user?.avatar_url" />
          </div>
        </div>
        <div class="w-full h-full overflow-hidden">
          <h2 class="w-full overflow-hidden break-words font-[600] text-[1.25rem] text-ellipsis">
            {{ item?.post?.subject }}
          </h2>
          <p class="text-wrap over-line">{{ item?.post?.content }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.over-line {
  height: 100%;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
