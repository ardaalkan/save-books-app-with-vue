<template>
  <body class="bg-gray-100">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-1/2 bg-white border border-gray-300 rounded-md shadow-md"
    >
      <h3 class="text-2xl m-auto pb-5 pt-5 font-bold">Login</h3>
      <input
        v-model="userData.username"
        type="text"
        placeholder="Username"
        class="input mb-3"
      />
      <!-- <input
        v-model="userData.fullname"
        type="text"
        placeholder="Kullanici Adi"
        class="input mb-3"
      /> -->
      <input
        v-model="userData.password"
        type="password"
        placeholder="Password"
        class="input mb-3"
      />
      <button
        @click="onSubmit"
        class="bg-black text-white font-semibold p-3 w-1/2 m-auto rounded-md shadow-xl shadow-gray mt-5 mb-3 hover:bg-slate-800"
      >
        Giriş Yap
      </button>
      <small class="font-semibold p-2 w-1/2 m-auto text-center text-gray-600"
        >Üye değilim,
        <span class="text-black cursor-pointer">
          <router-link :to="{ name: 'RegisterPage' }">
            Üye Ol!
          </router-link></span
        ></small
      >
    </div>
  </body>
</template>

<script setup>
import { reactive } from "vue";
import CryptoJs from "crypto-js";
import { axiosInstance } from "../utils/axiosInstance";
import router from "../router/index";
import { useStore } from "vuex";

const store = useStore();

const userData = reactive({
  password: null,
  username: null,
});

const onSubmit = () => {
  // console.log(userData);
  const password = CryptoJs.HmacSHA1(
    userData.password, store.state.cryptoKey
  ).toString();
  console.log("password", password);
  // console.log("store", store);
  axiosInstance
    .get(`/users?username=${userData.username}&password=${password}`)
    .then((response) => {
      if (response.data?.length > 0) {
        store.commit("setUser", response?.data[0]);
      } else {
        alert("doesnt exists!");
      }
      console.log("response", response);
      console.log("password", password);
      router.push({ name: "HomePage" });
    })
    .catch(
      (e) => console.log(e)
      // .finally(() => this.loader = false)
    );
};
</script>
