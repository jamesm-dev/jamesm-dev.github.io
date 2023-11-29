<script setup lang="ts">
import { reactive } from 'vue'

// components
import Navbar from './components/Navbar.vue'
import Block from '@/components/Block.vue'

const state = reactive({
  focusedBlockIndex: -1
})

const setFocused = (blockIndex: number = -1) => {
  state.focusedBlockIndex = blockIndex
}

const checkFocused = (blockIndex: number) =>
  state.focusedBlockIndex === -1 || state.focusedBlockIndex === blockIndex
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-rows-6 grid-cols-3 gap-6 min-h-screen p-6">
      <Navbar class="row-span-1 col-span-2" />

      <Block
        class="row-span-2 col-span-1"
        blockColor="#E4E2DF"
        blockLabel="Webpuppies 2023"
        blockTitle="Visa: Command Center"
        blockText="Crisis management system for Visa Riyadh"
        :isBlur="!checkFocused(1)"
        @mouseover="setFocused(1)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-1 col-span-1"
        blockColor="#E0DAFF"
        blockLabel="Webpuppies 2023/Present"
        blockTitle="Full-Stack Engineer"
        blockText="Currenty part of Webpuppies Digital development team"
        :isBlur="!checkFocused(2)"
        @mouseover="setFocused(2)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-3 col-span-1"
        blockLink="https://twitter.com/bushidoproj"
        blockLabel="Personal"
        blockTitle="Bushido Project"
        blockText="7,777 female samurai NFT collection in Hedera Hashgraph"
        :isBlur="!checkFocused(3)"
        @mouseover="setFocused(3)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-2 col-span-1"
        blockLink="https://cloudica.com"
        blockLabel="Eversun 2021/2022"
        blockTitle="Cloudica"
        blockText="Live monitoring software for remote workers"
        :isBlur="!checkFocused(4)"
        @mouseover="setFocused(4)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-1 col-span-1"
        blockColor="#FFD8D1"
        blockLabel="Others 2019"
        blockTitle="N4 Japanese Certification"
        blockText="Passed both JLPT and JTEST japanese language exams"
        :isBlur="!checkFocused(5)"
        @mouseover="setFocused(5)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-3 col-span-1"
        blockLabel="Block 06"
        :isBlur="!checkFocused(6)"
        @mouseover="setFocused(6)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-2 col-span-1"
        blockLabel="Block 07"
        :isBlur="!checkFocused(7)"
        @mouseover="setFocused(7)"
        @mouseleave="setFocused()"
      />

      <Block
        class="row-span-2 col-span-1"
        blockLabel="Block 08"
        :isBlur="!checkFocused(8)"
        @mouseover="setFocused(8)"
        @mouseleave="setFocused()"
      />
    </div>
  </div>
</template>

<style scoped></style>
