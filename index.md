---
layout: home
hero:
  name: Timeline Creators
  tagline: Community-curated list of timeline making tools and utilities.
  image: "/favicon.png"

head:
  - - meta
    - name: description
      content: Community-curated list of timeline making tools and utilities.
  - - meta
    - name: keywords
      content: timeline maker gannt chart tools utility tool utilities
---

<script setup>
  import Table from "./src/Table.vue"
</script>

<Table />

<style>

.name .clip {
  @apply bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent pb-8 !important;
  -webkit-text-fill-color: unset !important
}

</style>