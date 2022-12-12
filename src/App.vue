<script setup lang="ts">
import PersonalInfo from './components/PersonalInfo.vue'
import Experiences from './components/Experiences.vue'
import LocaleSelector from './components/LocaleSelector.vue'
</script>

<template>
  <body>
    <div class="container-fluid">
      <div class="row">
        <LocaleSelector></LocaleSelector>
        <PersonalInfo></PersonalInfo>
        <Experiences></Experiences>
      </div>
    </div>
  </body>
</template>

