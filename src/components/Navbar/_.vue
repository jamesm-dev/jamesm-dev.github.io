<script setup lang="ts">
import { reactive } from 'vue'
import { MOMENTS, PROFILE } from '@/assets/data/navbar'

// components
import Moments from './Moments.vue'
import About from './About.vue'
import Experience from './Experience.vue'
import Skills from './Skills.vue'
import Collaborate from './Collaborate.vue'

// assets
import IconSocial from '../icons/IconSocial.vue'

const emit = defineEmits(['onSelect'])

defineProps({
  class: {
    type: String,
    required: false
  }
})

const state = reactive({
  focusedLinkIndex: -1
})

const setFocused = (linkIndex: number = -1) => {
  if (state.focusedLinkIndex === linkIndex) {
    state.focusedLinkIndex = -1
    emit('onSelect', { focusIndex: -1 })
    return
  }

  state.focusedLinkIndex = linkIndex
  emit('onSelect', { focusIndex: linkIndex + 8 })
}
</script>

<template>
  <div class="block" :class="class">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img :src="PROFILE?.logo" class="logo rounded-md" loading="lazy" />

        <div class="flex flex-col md:flex-row md:items-center">
          <span class="text-black text-md md:text-2xl font-semibold ms-2.5">
            {{ PROFILE?.firstName }}
          </span>

          <span class="text-black text-md md:text-2xl font-semibold ms-2.5 -mt-1.5 md:ms-1 md:mt-0">
            {{ PROFILE?.lastName }}
          </span>
        </div>
      </div>

      <div class="hidden items-center justify-end md:flex">
        <Moments
          v-for="item in MOMENTS"
          :block-image="item.image"
          :block-title="item.title"
          :block-text="item.text"
          :block-year="item.year"
        />
      </div>

      <div class="flex flex-col items-center justify-center md:hidden">
        <span class="menu-line" />
        <span class="menu-line my-1.5" />
        <span class="menu-line" />
      </div>
    </div>

    <div class="flex items-end justify-end mt-auto md:justify-between">
      <div class="hidden items-center md:flex">
        <span class="link" @click="setFocused(0)">About</span>
        <span class="link" @click="setFocused(1)">Experience</span>
        <span class="link" @click="setFocused(2)">Skills</span>
        <a :href="`mailto:${PROFILE?.email}`" class="link">Contact</a>
        <span class="link highlight" @click="setFocused(3)">Let's Collaborate!</span>
      </div>

      <div class="flex items-center mt-6 md:mt-0">
        <a v-for="item in PROFILE?.socials" :href="item?.url" target="_blank" class="social-link">
          <IconSocial :target="item?.label" />
        </a>
      </div>
    </div>

    <About
      :show="state.focusedLinkIndex === 0"
      :data="{
        introduction: PROFILE?.introduction,
        address: PROFILE?.address,
        preferredSetup: PROFILE?.preferredSetup
      }"
    />

    <Experience :show="state.focusedLinkIndex === 1" :data="PROFILE?.experience" />

    <Skills :show="state.focusedLinkIndex === 2" :data="PROFILE?.skills" />

    <Collaborate :show="state.focusedLinkIndex === 3" :data="PROFILE?.services" />
  </div>
</template>

<style scoped>
.menu-line {
  background-color: #161616;
  width: 25px;
  height: 2px;

  @apply flex items-center rounded-xl;
}

.block {
  background-color: #fff;
  height: 100%;
  transition: opacity 200ms ease-in-out;

  @apply relative flex flex-col box-border p-5 rounded-xl select-none;

  .logo {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
  }

  .link {
    transition:
      background-color 200ms ease-in-out,
      opacity 200ms ease-in-out;

    @apply text-sm me-4 cursor-pointer opacity-70 no-underline hover:opacity-100;

    &.highlight {
      @apply bg-green-500/10 text-green-600 opacity-100 px-2.5 py-0.5 rounded-md hover:bg-green-500/20;
    }
  }

  .social-link {
    width: 20px;
    min-width: 20px;
    max-width: 20px;
    height: 20px;
    min-height: 20px;
    max-height: 20px;
    transition: opacity 200ms ease-in-out;

    @apply no-underline opacity-100 ms-4 md:ms-2 hover:opacity-50;
  }
}
</style>
