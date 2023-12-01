<script setup lang="ts">
// assets
import IconLaptop from '@/components/icons/IconLaptop.vue'
import IconLocation from '@/components/icons/IconLocation.vue'

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
    <p class="basis-3/5 text-sm text-black/70">
      Hi, I'm James, a full-stack developer with almost four years of experience primarily focused
      on back-end development using native JavaScript, PHP, HTML, and CSS. In 2023, I delved into
      frameworks, discovering my interest in advancing my skills in front-end development. While
      adept at replicating websites, I'm keen on enhancing my originality in web design.
    </p>

    <div class="flex-grow flex flex-col items-end justify-center">
      <div class="label">
        <IconLocation class="icon" />
        <span class="ms-1">Davao, Philippines</span>
      </div>

      <div class="label mt-2">
        <IconLaptop class="icon" />
        <span class="ms-1">Remote</span>
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

  @apply absolute hidden box-border p-5 rounded-xl select-none z-10 md:flex;

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
