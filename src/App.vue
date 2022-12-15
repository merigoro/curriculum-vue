<script setup lang="ts">
import PersonalInfo from './components/PersonalInfo.vue'
import Experiences from './components/Experiences.vue'
import LocaleSelector from './components/LocaleSelector.vue'
</script>

<template>
  <body>
    <div class="container-fluid">
      <header>
        <div class="row">
          <div class="col-1">
            <LocaleSelector></LocaleSelector>
          </div>
        </div>
      </header>
      <div class="row">
        <PersonalInfo></PersonalInfo>
        <Experiences></Experiences>
      </div>
    </div>
  </body>
</template>

