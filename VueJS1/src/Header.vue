<template>
  <header>
    <h1 :style="{ color: color }">{{ title }}</h1>
    <button @click="handleClick()" :style="{ background: bgColor }">{{ action }}</button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    action: String,
    color: String,
    bgColor: String
  },
  methods: {
    handleClick() {
      console.log('Button clicked!');
    }
  },
}
</script>
