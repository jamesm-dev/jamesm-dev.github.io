<script setup lang="ts">
import { reactive, watch } from 'vue'

// components
import Adventure from './Adventure.vue'
import About from './About.vue'
import Experience from './Experience.vue'
import Collaborate from './Collaborate.vue'

// assets
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconContra from '@/components/icons/IconContra.vue'

const logo =
  'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/89072013_110633127224570_2669575946901651456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeER89ZeloJ4q5hTWOW0BKaf-SHi2ysEhdr5IeLbKwSF2nvdvXgKmMeYSn8bLEPyEms84yc29EDK-U_MG5ArQpri&_nc_ohc=DcjN-3yqNMIAX9iHpN1&_nc_ht=scontent.fcgy1-1.fna&cb_e2o_trans=t&oh=00_AfCmnKAmu2sY1W-o1MesrSglvt4LvdEjB4v5eXpr7Zy3Zw&oe=658F135B'

const adventures = [
  {
    title: 'UP, Diliman',
    text: 'I passed the N4 JTEST and JPLT exams',
    year: 2019,
    image:
      'https://scontent.fdvo2-2.fna.fbcdn.net/v/t1.6435-9/93702746_3459386397409867_5035806999455989760_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeE-QuLCTqSp50QzyK01QJv_t4xPXEnwBIS3jE9cSfAEhA4crlaeIfHwikRaZGghwfK-KX1ZwnVPL6594a-wVQs4&_nc_ohc=3kPq17a1WjsAX-zzcs0&_nc_ht=scontent.fdvo2-2.fna&cb_e2o_trans=t&oh=00_AfBY8HOX1zQihyOk1WA-WpAxO3BcHWaUhFDKrwoZIaZ4og&oe=658F700E'
  },
  {
    title: 'Seashell, Samal',
    text: 'First ever company outing with Cloudica',
    year: 2022,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/286361375_5917059278309221_3007906216295886604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFkSS_CZdLednVgmexRvbBrP0JuEWvkC9Q_Qm4Ra-QL1EDFdYEaOn2lTuC_qE5UjB33kDqRGMNrwR9vTWy2Gd7G&_nc_ohc=IFtwfkYayt8AX-hyYFz&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfBmJzRjD7HxwQF3Io6u-ngs_6sso7yDEjVIkir_2Id6DA&oe=656C6B00'
  },
  {
    title: 'Dahican, Mati',
    text: 'Last travel with siblings before Covid',
    year: 2019,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/356396998_7118082318206905_5924241636572965783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeESTohccRGwdbjzmhkD2sJllwDGkLc6mJmXAMaQtzqYmQv1sE57j7OOubkuikETVSvUEcKX57U22JoQQS_v3FqM&_nc_ohc=SVBCwP1zxqsAX8uH_Tn&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfCrCY76zNAB9cGsnv0d7b9Akg7_Mt9Q3acG1lAFubdwEQ&oe=656CD5E4'
  },
  {
    title: 'Coron, Palawan',
    text: 'First ever visayas travel with family',
    year: 2023,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/387194519_6385959431515245_4672967716658857773_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFlegUrzAt797LWuoGWsjbwAeds0nH4iOMB52zScfiI4xrOgr0Yvj8bro3uAqdK8vW0SeTPUR1FAkupkawW_fwu&_nc_ohc=bQr6R-mBk_QAX_y0xo8&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfARB1NEYE95Q7XTed1xfl-WrOxoK2ZomSvxraW9yyp0FQ&oe=656C3280'
  },
  {
    title: 'Eden, Toril',
    text: 'First ever family travel with daugther',
    year: 2022,
    image:
      'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/311334094_5223398821104651_1138360474234090454_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFhbEZ3nP2ZlyHFtKngxr1ZcXldUvhMpiRxeV1S-EymJMjp7qbaMdPXyNvQiX6rCblbjz9CvyvW8hAelMkjaEtM&_nc_ohc=1BWLRnpIE9kAX-0pFul&_nc_ht=scontent.fdvo2-2.fna&cb_e2o_trans=t&oh=00_AfA2Ce1gi1RWZBHi7NB1StMDV4R8ABjhf678ZHW7czqs3A&oe=656D1951'
  }
]

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
        <img :src="logo" class="logo rounded-md" loading="lazy" />

        <div class="flex flex-col md:flex-row md:items-center">
          <span class="text-black text-md md:text-2xl font-semibold ms-2.5">James</span>
          <span class="text-black text-md md:text-2xl font-semibold ms-2.5 -mt-1.5 md:ms-1 md:mt-0"
            >Malatabon</span
          >
        </div>
      </div>

      <div class="hidden items-center justify-end md:flex">
        <Adventure
          v-for="adventure in adventures"
          :block-image="adventure.image"
          :block-title="adventure.title"
          :block-text="adventure.text"
          :block-year="adventure.year"
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
        <a href="mailto:jamesmalatabon@gmail.com" class="link">Contact</a>
        <span class="link highlight" @click="setFocused(3)">Let's Collaborate!</span>
      </div>

      <div class="flex items-center mt-6 md:mt-0">
        <a href="https://twitter.com/jepaninja" target="_blank" class="social-link">
          <IconTwitter />
        </a>

        <a href="https://www.youtube.com/@jepaninja" target="_blank" class="social-link">
          <IconYoutube />
        </a>

        <a href="https://www.linkedin.com/in/codewithsantiago" target="_blank" class="social-link">
          <IconLinkedin />
        </a>

        <a href="https://contra.com/jamesmalatabon" target="_blank" class="social-link">
          <IconContra />
        </a>
      </div>
    </div>

    <About :show="state.focusedLinkIndex === 0" />

    <Experience :show="state.focusedLinkIndex === 1" />

    <Collaborate :show="state.focusedLinkIndex === 3" />
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
