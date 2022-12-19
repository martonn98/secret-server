<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-sky-400 to-blue-500 text-white"
  >
    <div class="m-auto">
      <FormKit type="form" @submit="submitSecret">
        <FormKit
          id="secret"
          type="textarea"
          rows="10"
          name="secret"
          validation="required"
          label="Secret"
        />
        <FormKit
          id="expireAfterViews"
          type="number"
          name="expireAfterViews"
          validation="required"
          label="Expire after views"
        />
        <FormKit id="expireAfter" type="number" name="expireAfter" label="Expire after minutes" />
      </FormKit>
      <div v-if="response">
        <router-link :to="response.hash" class="underline">Your secret link</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const response = useState('response');

const submitSecret = async (fields) => {
  const { data } = await useFetch('/api/secret', { method: 'POST', body: fields });
  useState('response', () => data.value);
};
</script>
<style>
.formkit-inner {
  box-shadow: 0 0 0 1px #475569;
}
</style>
