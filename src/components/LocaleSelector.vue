<script setup lang="ts">
  import i18n from '../main'
  const items : string[] = i18n.global.availableLocales
</script>

<template>
  <v-select v-model="$i18n.locale" 
            :items="items">
  </v-select>
</template>