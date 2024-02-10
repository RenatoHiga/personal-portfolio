<script setup lang="ts">
defineProps<{
  name: string
  url: string
  image_path: string
}>()

function getImageUrl(url: string) {
  const new_url = new URL(url, import.meta.url).href
  return new_url
}
</script>

<template>
  <a class="social-media-button" :href="url" target="_blank">
    <img :src="getImageUrl(image_path)" :alt="name" class="social-media-button__icon" />
    <span class="social-media-button__name">{{ name }}</span>
  </a>
</template>

<style scoped></style>
