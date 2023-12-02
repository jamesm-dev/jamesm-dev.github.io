<script setup lang="ts">
import { type IExperience } from '@/assets/data/navbar'

// assets
import IconLaptop from '@/components/icons/IconLaptop.vue'
import IconLocation from '@/components/icons/IconLocation.vue'

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array<IExperience>,
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
        <span class="text-sm">{{ item.title }}</span>
        <span class="text-sm text-black/60 mt-0.5">{{ item.company }}</span>
        <span class="text-xs text-black/60 mt-1">{{ item.duration }}</span>
      </div>

      <div class="flex-grow flex items-center justify-end">
        <div class="label">
          <IconLocation class="icon" />
          <span class="ms-1">{{ item.address }}</span>
        </div>

        <div class="label ms-1.5">
          <IconLaptop class="icon" />
          <span class="ms-1">{{ item.workSetup }}</span>
        </div>
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
}
</style>
