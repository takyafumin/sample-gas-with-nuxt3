/*
Copyright 2023 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
<script lang="ts">
  import { ref, onMounted } from 'vue'

  export default {
    setup() {
      const items = ref<any[]>([])
      const runtimeConfig = useRuntimeConfig()
      const deployId = runtimeConfig.public.gasDeployId

      const fetchData = async () => {
        const response = await fetch(`https://script.google.com/macros/s/${deployId}/exec`)
        const result = await response.json()
        items.value = result.data
      }

      onMounted(fetchData)

      return {
        items
      }
    }
  }
</script>

<template>
  <div>
    <h1>データ一覧</h1>
    <ul>
      <li v-for="item in items" :key="item[0]">{{ item }}</li>
    </ul>
  </div>
</template>
