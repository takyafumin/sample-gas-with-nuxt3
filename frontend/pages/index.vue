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
  import { VCard, VCardTitle, VCardText, VContainer, VRow, VCol } from 'vuetify/components'
  import { fetchData, type Item } from '~/composables/useFetchData'

  const items = ref<Item[]>([])

  onMounted(async () => {
    const result = await fetchData()
    items.value = result.items
  })
</script>

<template>
  <v-container>
    <h1>データ一覧</h1>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" md="12">
        <v-card>
          <v-card-title>{{ item.id }} - {{ item.companyName }}</v-card-title>
          <v-card-text>
            <div>
              <strong>住所:</strong> {{ item.address }}
            </div>
            <div>
              <strong>電話番号:</strong> {{ item.phone }}
            </div>
            <div>
              <strong>メールアドレス:</strong> {{ item.email }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
