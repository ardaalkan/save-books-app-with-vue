<template>
  <body class="bg-gray-100">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/2 bg-white border border-gray-300 rounded-md shadow-md"
    >
      <h3 class="text-2xl m-auto pb-5 pt-5 font-bold">Register</h3>
      <input type="text" placeholder="Tam Ad" class="input mb-3" />
      <input type="text" placeholder="Kullanici Adi" class="input mb-3" />
      <input type="text" placeholder="Şifre" class="input mb-3" />
      <button
        class="bg-black text-white font-semibold p-3 w-1/2 m-auto rounded-md shadow-xl shadow-gray mt-5 mb-3 hover:bg-slate-800"
      >
        Kayıt Ol
      </button>
      <small class="font-semibold p-2 w-1/2 m-auto text-center text-gray-600"
        >Zaten üyeyim,
        <span class="text-black cursor-pointer">Giriş Yap!</span></small
      >
    </div>
  </body>
</template>
