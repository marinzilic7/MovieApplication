<template>
  <div>
    <h2>Search Results</h2>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  // ...
};
</script>

<style scoped></style>
