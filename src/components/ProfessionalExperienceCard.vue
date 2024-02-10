<script setup lang="ts">
defineProps<{
  business_name: string
  role: string
  active_period: string
  description: string
}>()
</script>

<template>
  <div class="card">
    <h2 class="professional-experience__business-name">{{ business_name }}</h2>
    <p class="professional-experience__role">{{ role }}</p>
    <p class="professional-experience__period">Período: {{ active_period }}</p>
    <p class="professional-experience__description" v-html="description"></p>
  </div>
</template>

<style scoped></style>
