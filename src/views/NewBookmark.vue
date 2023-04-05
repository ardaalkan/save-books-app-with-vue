<template>
  <div class="new-bookmark-container">
    <h3 class="text-xl text-center mb-6 mt-6 text-slate-600">
      Add new bookmark
    </h3>
    <input type="text" placeholder="Başlık" class="input mb-3 input-hover" />
    <input type="text" placeholder="URL" class="input mb-3 input-hover" />
    <select class="input mb-3 input-hover">
      <option disabled value="" selected>Category</option>
      <option value="">Vue</option>
      <option value="">React</option>
      <option value="">Angular</option>
      <option value="">Social</option>
    </select>
    <textarea
      placeholder="Açiklama"
      class="input mb-3"
      cols="30"
      rows="10"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1 mt-1 mb-5 m-auto">
      <button class="secondary-button">İptal</button>
      <button class="default-button">Kaydet</button>
    </div>
  </div>
</template>
<script setup>

</script>
