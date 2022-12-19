<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-sky-400 to-blue-500 text-white"
  >
    <div class="m-auto">
      <div v-if="data">
        <p>Secret: {{ data.secretText }}</p>
        <p>Remaining views: {{ data.remainingViews }}</p>
        <p>Created at: {{ format(new Date(data.createdAt), 'yyyy.MM.dd. HH:mm') }}</p>
        <p>
          Expires at:
          {{
            data.expiresAt ? format(new Date(data.expiresAt), 'yyyy.MM.dd. HH:mm') : 'no expiration'
          }}
        </p>
      </div>
      <div v-else>Your secret has expired</div>
      <router-link to="/" class="underline">Back</router-link>
    </div>
  </div>
</template>
<script setup>
import { format } from 'date-fns';

const route = useRoute();
const { data } = await useFetch(`/api/secret/${route.params.hash}`);
</script>
