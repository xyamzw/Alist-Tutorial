<template>
    <a href="#" @click.prevent="copyText" style="cursor: pointer; color: var(--vp-c-brand)">
      {{ cpy.text }}
    </a>
  </template>
  
  <script setup>

  
  const cpy = defineProps({
    text: String,
    link: String
  })
  
  const copyText=()=>{
    navigator.clipboard.writeText(cpy.link)
    .then(() => {
      alert('已复制链接：' + cpy.link)
    })
    .catch(() => {
      alert('复制失败')
    })
  }
  </script>
  