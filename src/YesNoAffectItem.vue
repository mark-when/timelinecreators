<script setup lang="ts">
import { computed } from "vue";
import { AffectVal } from "./Item";

const props = defineProps<{
  item: AffectVal<string>;
}>();
</script>

<template>
  <div class="flex flex-row items-end justify-end" style="display: flex">
    <div
      class="rounded px-2 font-bold"
      :class="{
        'bg-teal-400/50': item[1] === 'good',
        'bg-orange-500/50': item[1] === 'bad',
      }"
    >
      {{ item[0] }}
    </div>
  </div>
</template>

<style scoped></style>
