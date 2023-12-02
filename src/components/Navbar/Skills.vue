<script setup lang="ts">
import { type ISkill } from '@/assets/data/navbar'

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array<{
      label: string
      description: string
      items: ISkill[]
    }>,
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
      v-for="item in data"
      class="flex flex-col basis-full justify-start px-2.5 py-5 md:basis-1/3"
    >
      <span class="text-sm">{{ item.label }}</span>
      <span class="text-sm text-black/60 mt-0.5">{{ item.description }}</span>

      <hr class="my-3" />

      <div class="flex flex-col mt-2">
        <div v-for="skill in item.items" class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <img :src="skill.logo" class="icon me-2" />
            <span class="text-sm">{{ skill.name }}</span>
          </div>

          <span v-if="skill?.tag" class="bg-black/10 text-xs px-2 py-0.5 ms-2 rounded">
            {{ skill?.tag }}
          </span>
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

  @apply absolute hidden flex-row box-border px-2.5 rounded-xl select-none z-10 md:flex;

  .icon {
    object-fit: contain;
    object-position: center;

    width: 24px;
    min-width: 24px;
    max-width: 24px;
    height: 24px;
    min-height: 24px;
    max-height: 24px;
  }
}
</style>
