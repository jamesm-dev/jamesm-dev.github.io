<script setup lang="ts">
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'

const logo =
  'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/89072013_110633127224570_2669575946901651456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeER89ZeloJ4q5hTWOW0BKaf-SHi2ysEhdr5IeLbKwSF2nvdvXgKmMeYSn8bLEPyEms84yc29EDK-U_MG5ArQpri&_nc_ohc=DcjN-3yqNMIAX9iHpN1&_nc_ht=scontent.fcgy1-1.fna&cb_e2o_trans=t&oh=00_AfCmnKAmu2sY1W-o1MesrSglvt4LvdEjB4v5eXpr7Zy3Zw&oe=658F135B'

defineProps({
  class: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="group block" :class="class">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img :src="logo" class="logo rounded-md" loading="lazy" />

        <span class="text-black text-2xl font-semibold ms-2.5"> James Malatabon </span>
      </div>

      <img :src="logo" class="profile-pic" loading="lazy" />
    </div>

    <div class="flex items-end justify-between mt-auto">
      <div class="flex items-center">
        <span class="link">About</span>
        <span class="link">Experience</span>
        <span class="link">Skills</span>
        <a href="mailto:jamesmalatabon@gmail.com" class="link">Contact</a>
        <span class="link highlight">Let's Collaborate!</span>
      </div>

      <div class="flex items-center">
        <a href="https://twitter.com/jepaninja" target="_blank" class="social-link">
          <IconTwitter />
        </a>

        <a href="https://www.youtube.com/@jepaninja" target="_blank" class="social-link">
          <IconYoutube />
        </a>

        <a href="https://www.linkedin.com/in/codewithsantiago" target="_blank" class="social-link">
          <IconLinkedin />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

  .profile-pic {
    background-color: #e4e2df;
    width: 48px;
    min-width: 48px;
    max-width: 48px;
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    border: 2px solid #fff;

    @apply rounded-full;
  }

  .link {
    transition:
      background-color 200ms ease-in-out,
      opacity 200ms ease-in-out;

    @apply text-sm me-4 cursor-pointer opacity-70 no-underline hover:opacity-100;

    &.highlight {
      @apply bg-black/10 font-semibold text-black opacity-100 px-2.5 py-0.5 rounded-md hover:bg-black/20;
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

    @apply no-underline opacity-100 ms-2 hover:opacity-50;
  }
}
</style>
