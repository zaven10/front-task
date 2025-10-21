<template>
  <div class="max-w-lg mx-auto py-20">
    <div class="grid gap-5">
      <student-card
        v-for="student in students"
        :key="student.id"
        v-model:age="student.age"
        :name="student.name"
        :image="student.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import StudentCard from './components/StudentCard/index.vue'

const students = reactive([
  { id: '1', name: 'Hugh 1', age: 25, image: '/images/photo.png' },
  { id: '2', name: 'Hugh 2', age: null, image: null },
  { id: '3', name: 'Hugh 3', age: null, image: '/images/photo.png' },
])
</script>
