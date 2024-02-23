<script setup lang="ts">
import { getForumPostList } from '@/api/strategy'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const params = ref({
  forum_id: 43,
  is_good: false,
  is_hot: false,
  page_size: 20,
  sort_type: 1
})
const cosDataArray = ref()
const router = useRouter()
onMounted(() => {
  getForumPostList(params.value).then((res: any) => {
    const { message, data } = res
    if (message === 'OK') {
      cosDataArray.value = data?.list ?? []
    }
  })
})
function goToDetail() {
  router.push('/StrategyDetailView')
}
</script>

<template>
  <main>
    <div class="shadow-xl card bg-base-100 my-[10px]" v-for="item in cosDataArray" :key="item">
      <figure class="w-full h-[150px]" @click="goToDetail">
        <img
          :src="item?.post?.cover || item?.image_list[0]?.url"
          alt="Shoes"
          class="object-contain"
        />
      </figure>
      <div class="flex flex-row card-body text-nowrap">
        <div class="avatar">
          <div class="w-16 h-16 rounded-full">
            <img :src="item?.user?.avatar_url" />
          </div>
        </div>
        <div class="w-full h-full overflow-hidden" @click="goToDetail">
          <h2 class="w-full overflow-hidden break-words font-[600] text-[1.25rem] text-ellipsis">
            {{ item?.post?.subject }}
          </h2>
          <p class="text-wrap over-line">{{ item?.post?.content }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
