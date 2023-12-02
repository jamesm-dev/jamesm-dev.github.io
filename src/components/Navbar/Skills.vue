<script setup lang="ts">
import { reactive } from 'vue'

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

const state = reactive({ showInterests: false })
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
    <div class="flex items-start">
      <div
        v-for="item in data"
        class="flex flex-col basis-full justify-start px-2.5 py-5 md:basis-1/3"
      >
        <span class="text-sm">{{ item.label }}</span>
        <span class="text-sm text-black/60 mt-0.5">{{ item.description }}</span>

        <hr class="my-3" />

        <div class="flex flex-col">
          <div
            v-for="skill in item.items"
            class="group flex items-center justify-between py-0.5 mt-1"
          >
            <div class="flex items-center">
              <img :src="skill.logo" class="icon me-2" />

              <span class="text-sm">{{ skill.name }}</span>

              <div v-if="state.showInterests && skill?.tag" class="relative flex h-2 w-2 ms-2">
                <span
                  class="animate-ping absolute h-full w-full indicator bg-green-400 opacity-75"
                />
                <span class="relative h-2 w-2 indicator bg-green-500" />
              </div>
            </div>

            <span
              v-if="state.showInterests && skill?.tag"
              class="tag opacity-0 group-hover:opacity-100"
            >
              {{ skill?.tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end px-2.5 mb-5">
      <span class="toggle" @click="state.showInterests = !state.showInterests">
        {{ state.showInterests ? "Okay, I'm good now" : 'Hmm, show interests?' }}
      </span>
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

  @apply absolute hidden flex-col box-border px-2.5 rounded-xl select-none z-10 md:flex;

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

  .indicator {
    @apply inline-flex rounded-full;
  }

  .tag {
    transition: opacity 200ms ease-in-out;

    @apply bg-green-500/10 text-green-600 text-xs px-1.5 py-0.5 rounded;
  }

  .toggle {
    @apply text-black/50 text-xs w-fit px-1 py-1 border-b border-dashed cursor-pointer;
  }
}
</style>
