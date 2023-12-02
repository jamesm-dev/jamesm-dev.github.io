<script setup lang="ts">
import { reactive } from 'vue'
import { PORTFOLIO } from '@/assets/data/portfolio'

// components
import Navbar from '@/components/Navbar/_.vue'
import Block from '@/components/Block.vue'

const state = reactive({
  focusedBlockIndex: -1
})

const setFocused = (blockIndex: number = -1) => {
  if (state.focusedBlockIndex < 8) state.focusedBlockIndex = blockIndex
}

const checkFocused = (blockIndex: number) =>
  state.focusedBlockIndex === -1 || state.focusedBlockIndex === blockIndex
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-6 w-100 min-h-screen p-6 md:grid-rows-6 md:grid-cols-3">
      <Navbar
        class="row-span-1 col-span-1 md:col-span-2"
        @on-select="
          ($event) => {
            // update focus index from nav
            state.focusedBlockIndex = $event?.focusIndex
          }
        "
      />

      <Block
        v-for="(item, index) in PORTFOLIO"
        class="md:col-span-1"
        :class="item?.span"
        :block-link="item?.url"
        :block-color="item?.color"
        :block-label="item?.label"
        :block-logo="item?.logo"
        :block-team="item?.team"
        :block-title="item?.title"
        :block-text="item?.text"
        :is-dark="item?.dark"
        :is-blur="!checkFocused(index)"
        @mouseover="setFocused(index)"
        @mouseleave="setFocused()"
      >
        <img
          v-if="item?.image"
          :src="item?.image"
          class="mb-5"
          :class="[item?.imagePlacement === 'spotlight' ? 'img-spotlight' : 'img-default']"
        />
      </Block>
    </div>
  </div>
</template>

<style scoped>
.img-default {
  object-fit: contain;
  object-position: right;

  position: absolute;
  top: 0;
  right: -20px;
  height: 100%;
}

.img-spotlight {
  object-fit: cover;
  object-position: left;

  height: 190px;
  margin-top: 25px;
  margin-left: 20px;
}
</style>
