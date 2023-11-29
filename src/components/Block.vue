<script setup lang="ts">
import IconOpen from '@/components/icons/IconOpen.vue'

defineProps({
  class: {
    type: String,
    required: false
  },
  blockLink: {
    type: String,
    required: false
  },
  blockBackground: {
    type: String,
    required: false
  },
  blockColor: {
    type: String,
    default: '#E4E2DF'
  },
  blockLogo: {
    type: String,
    required: false
  },
  blockLabel: {
    type: String,
    required: false
  },
  blockTitle: {
    type: String,
    default: 'Block title'
  },
  blockText: {
    type: String,
    default: 'Block text'
  },
  isBlur: {
    type: Boolean,
    default: false
  },
  isDark: {
    type: Boolean,
    default: false
  }
})

const openLink = (url: string | null) => {
  if (/^(ftp|http|https):\/\/[^ "]+$/i.test(String(url))) window.open(String(url), '_blank')
}
</script>

<template>
  <div
    class="group block"
    :class="class"
    :style="`background-color: ${blockColor}; opacity: ${isBlur ? 0.5 : 1}`"
    @click="openLink(blockLink || null)"
  >
    <span v-if="blockLabel" class="label">{{ blockLabel }}</span>

    <img v-if="blockLogo" :src="blockLogo" loading="lazy" class="logo" />

    <span
      class="title"
      :class="{ 'mt-auto': Boolean(!blockLogo) }"
      :style="`color: ${isDark ? '#fff' : '#161616'}`"
    >
      {{ blockTitle }}
    </span>

    <span class="description" :style="`color: ${isDark ? '#fff' : '#161616'}`">
      {{ blockText }}
    </span>

    <span v-if="Boolean(blockLink)" class="link opacity-0 group-hover:opacity-100">
      <IconOpen class="icon" />
    </span>
  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}

.block {
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

    @apply mt-auto mb-2 rounded;
  }

  .link {
    transition: opacity 200ms ease-in-out;

    @apply absolute top-3 right-3 bg-white p-2.5 rounded-xl;
  }

  .label {
    color: '#161616';

    @apply bg-white/50 w-fit font-mono text-sm tracking-tighter px-2.5 py-0.5 rounded-md;
  }

  .title {
    @apply font-semibold text-2xl;
  }

  .description {
    @apply text-sm tracking-wide mt-1;
  }
}
</style>
