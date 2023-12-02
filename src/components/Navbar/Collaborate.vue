<script setup lang="ts">
import { type IService } from '@/assets/data/navbar'

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array<IService>,
    required: true
  }
})
</script>

<template>
  <div
    class="detail"
    :style="
      show
        ? 'opacity: 1; top: 110%; pointer-events: auto;'
        : 'opacity: 0; top: 130%; pointer-events: none;'
    "
  >
    <div
      v-for="(item, index) in data"
      class="flex justify-between py-5"
      :class="{ 'border-b': index !== data.length - 1 }"
    >
      <div class="flex flex-col">
        <div class="flex items-center">
          <span class="text-sm">{{ item.title }}</span>
          <span class="bg-black/10 text-xs px-2 py-0.5 ms-2 rounded">{{ item.contract }}</span>
        </div>

        <span class="text-sm text-black/60 mt-0.5">{{ item.description }}</span>
      </div>

      <div class="flex-grow flex items-center justify-end">
        <a class="button" :href="item.url" target="_blank">Contact</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  background-color: #fff;
  width: 100%;
  top: 130%;
  left: 0;
  transition:
    opacity 200ms ease-in-out,
    top 300ms ease-in-out;

  @apply absolute hidden flex-col box-border px-5 rounded-xl select-none z-10 md:flex;

  .label {
    @apply flex items-center w-fit h-fit bg-[#EEE] text-sm text-black opacity-100 px-2.5 py-0.5 rounded-md;

    .icon {
      width: 16px;
      min-width: 16px;
      max-width: 16px;
      height: 16px;
      min-height: 16px;
      max-height: 16px;
    }
  }

  .button {
    transition: background-color 200ms ease-in-out;

    @apply text-sm border px-5 py-2 rounded-md hover:bg-[#F1F0EE];
  }
}
</style>
