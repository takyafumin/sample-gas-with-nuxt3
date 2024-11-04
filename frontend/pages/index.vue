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
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRuntimeConfig } from '#app'
  import { VCard, VCardTitle, VCardText, VContainer, VRow, VCol } from 'vuetify/components'

  const items = ref<any[]>([])
  const headers = ref<string[]>([])
  const runtimeConfig = useRuntimeConfig()
  const deployId = runtimeConfig.public.gasDeployId

  const fetchData = async () => {
    const response = await fetch(`https://script.google.com/macros/s/${deployId}/exec`)
    const result = await response.json()
    items.value = result.data
    if (items.value.length > 0) {
      headers.value = items.value[0]
    }
  }

  onMounted(fetchData)
</script>

<template>
  <v-container>
    <h1>データ一覧</h1>
    <v-row>
      <v-col v-for="item in items.slice(1)" :key="item[0]" cols="12" md="12">
        <v-card>
          <v-card-title>{{ item[0] }} - {{ item[1] }}</v-card-title>
          <v-card-text>
            <div v-for="(value, index) in item.slice(2)" :key="index">
              <strong>{{ headers[index + 2] }}:</strong> {{ value }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
