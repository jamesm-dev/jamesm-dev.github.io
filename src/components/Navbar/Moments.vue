<script setup lang="ts">
defineProps({
  blockImage: {
    type: String,
    required: true
  },
  blockTitle: {
    type: String,
    default: 'Adveture Title'
  },
  blockYear: {
    type: Number,
    default: new Date().getFullYear()
  },
  blockText: {
    type: String,
    default: 'Describe your adventure'
  }
})
</script>

<template>
  <div class="group/adventure adventures">
    <img :src="blockImage" class="" loading="lazy" />

    <div class="details opacity-0 group-hover/adventure:opacity-100">
      <div class="arrow" />

      <div class="content flex flex-col">
        <div class="flex items-center">
          <span class="text-white text-sm font-semibold">
            {{ blockTitle }}
          </span>

          <span class="bg-white text-[11px] font-mono px-1.5 rounded ms-1.5">
            {{ blockYear }}
          </span>
        </div>

        <span class="text-white text-sm mt-1">{{ blockText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.adventures {
  background-color: transparent;
  transition: margin 300ms ease-in-out;

  img {
    width: 48px;
    min-width: 48px;
    max-width: 48px;
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    object-fit: cover;
    object-position: center;
    border: 2px solid #fff;

    @apply rounded-full;
  }

  .details {
    transition: opacity 200ms ease-in-out;

    @apply relative pointer-events-none z-20;

    .arrow {
      background-color: #2b2b2b;
      width: 12px;
      min-width: 12px;
      max-width: 12px;
      height: 12px;
      min-height: 12px;
      max-height: 12px;

      @apply absolute left-1/2 transform -translate-x-1/2 rotate-45 mt-1.5;
    }

    .content {
      background-color: #2b2b2b;
      width: 100%;
      min-width: max-content;

      @apply absolute left-1/2 transform -translate-x-1/2 px-4 py-3 mt-3 rounded-lg;
    }
  }

  @apply relative -ms-2.5 hover:-ms-4 hover:me-1.5;
}
</style>
