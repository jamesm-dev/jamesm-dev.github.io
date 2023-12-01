<script setup lang="ts">
// assets
import IconLaptop from '@/components/icons/IconLaptop.vue'
import IconLocation from '@/components/icons/IconLocation.vue'

const experiences = [
  {
    order: 1,
    title: 'Web Developer (Junior)',
    company: 'Segworks Technologies Corporation',
    location: 'Davao, Philippines',
    duration: '2013 - 2014',
    setup: 'On-site'
  },
  {
    order: 2,
    title: 'Full-stack Developer',
    company: 'Simple Content',
    location: 'Sydney, Australia',
    duration: '2014 - 2015',
    setup: 'Remote'
  },
  {
    order: 3,
    title: 'Software Developer',
    company: 'Eversun Software Philippines',
    location: 'Davao, Philippines',
    duration: '2021 - 2022',
    setup: 'Remote'
  },
  {
    order: 4,
    title: 'Full-stack Developer',
    company: 'Webpuppies Digital',
    location: 'Singapore',
    duration: '2023 - Present',
    setup: 'Remote'
  }
]

defineProps({
  show: {
    type: Boolean,
    default: false
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
      v-for="(experience, index) in experiences.sort((a, b) => b.order - a.order)"
      class="flex justify-between py-5"
      :class="{ 'border-b': index !== experiences.length - 1 }"
    >
      <div class="flex flex-col">
        <span class="text-sm">{{ experience.title }}</span>
        <span class="text-sm text-black/60 mt-0.5">{{ experience.company }}</span>
        <span class="text-xs text-black/60 mt-1">{{ experience.duration }}</span>
      </div>

      <div class="flex-grow flex items-center justify-end">
        <div class="label">
          <IconLocation class="icon" />
          <span class="ms-1">{{ experience.location }}</span>
        </div>

        <div class="label ms-1.5">
          <IconLaptop class="icon" />
          <span class="ms-1">{{ experience.setup }}</span>
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
