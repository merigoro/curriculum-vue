<template>
    <select v-model="$i18n.locale" id="language">
      <option v-for="locale in $i18n.availableLocales" :value="locale">{{ locale }}</option>
    </select>
</template>

<style scoped>
select{
  margin-bottom:10px;
  margin-top:10px;
}
</style>
  