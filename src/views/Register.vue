<template>
  <body class="bg-gray-100">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/2 bg-white border border-gray-300 rounded-md shadow-md"
    >
      <h3 class="text-2xl m-auto pb-5 pt-5 font-bold">Register</h3>
      <input
        v-model="userData.username"
        type="text"
        placeholder="Tam Ad"
        class="input mb-3"
      />
      <input
        v-model="userData.fullname"
        type="text"
        placeholder="Kullanici Adi"
        class="input mb-3"
      />
      <input
        v-model="userData.password"
        type="password"
        placeholder="Şifre"
        class="input mb-3"
      />
      <button
        @click="onSave"
        class="bg-black text-white font-semibold p-3 w-1/2 m-auto rounded-md shadow-xl shadow-gray mt-5 mb-3 hover:bg-slate-800"
      >
        Kayıt Ol
      </button>
      <small class="font-semibold p-2 w-1/2 m-auto text-center text-gray-600"
        >Zaten üyeyim,
        <span class="text-black cursor-pointer">
          <router-link :to="{ name: 'LoginPage' }"> Giriş Yap! </router-link>
        </span></small
      >
    </div>
  </body>
</template>

<script setup>
import { reactive } from "vue";
import CryptoJs from "crypto-js";
import { axiosInstance } from "../utils/axiosInstance";
import router from "../router/index";

const userData = reactive({
  username: null,
  fullname: null,
  password: null,
});

const onSave = () => {
  console.log(userData);
  const key = "key123!123??";
  const password = CryptoJs.HmacSHA1(userData.password, key).toString();
  // console.log("cryptedPassword", cryptedPassword);
  axiosInstance.post("/users", { ...userData, password }).then((response) => {
    console.log("response", response);
    router.push({ name: "HomePage" });
  });
};
</script>
