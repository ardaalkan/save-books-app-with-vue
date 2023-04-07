<template>
  <div
    class="bg-white border-gray-200 border-b-[1px] h-16 w-full flex items-center justify-center"
  >
    <nav class="flex w-full">
      <div class="flex text-xl">
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg
          fill="#000000"
          height="36px"
          width="36px"
          viewBox="0 0 512 512"
          class="main-logo"
        >
          <path
            d="M213.3,0h-128C38.2,0,0,38.2,0,85.3v128L298.7,512L512,298.7L213.3,0z M85.3,128c-23.6,0-42.7-19.1-42.7-42.7
          	s19.1-42.7,42.7-42.7S128,61.8,128,85.3S108.9,128,85.3,128z M170.7,320L320,170.7l42.7,42.7L213.3,362.7L170.7,320z M256,405.3
          	L405.3,256l42.7,42.7L298.7,448L256,405.3z"
          />
        </svg>
        SocialMark
      </div>
      <div v-if="isAuthenticated" class="ml-auto flex">
        <router-link to="/new" class="new-add-btn"> NEW + </router-link>
        <div class="relative group">
          <button
            class="w-8 h-8 flex items-center justify-center mr-2 rounded-md duration-500 hover:bg-gray-200 group-focus-within:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              class="main-menu"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
          <nav
            class="bg-white !z-10 rounded-md shadow-xl p-2 w-56 flex flex-col absolute group-focus-within:visible top-full right-0 invisible"
          >
            <a href="#" class="mb-2 menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                class="fill-current mr-1"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                />
              </svg>
              Account
            </a>
            <a href="#" class="mb-2 menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current mr-1"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"
                />
              </svg>
              Favorites</a
            >
            <a @click="onLogout" href="#" class="mb-2 menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                class="fill-current mr-1"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
                  />
                </g>
              </svg>
              Logout</a
            >
            <a href="#" class="menu-item">
              <svg
                fill="#000000"
                height="24"
                width="24"
                viewBox="0 0 512 512"
                xml:space="preserve"
                class="fill-current mr-1"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M256,0C161.743,0,85.333,76.41,85.333,170.667c0,61.792,33.216,117.521,85.333,147.631v44.369V448
    				c0,11.782,9.551,21.333,21.333,21.333v21.333c0,11.782,9.551,21.333,21.333,21.333h85.333c11.782,0,21.333-9.551,21.333-21.333
    				v-21.333c11.782,0,21.333-9.551,21.333-21.333v-85.333v-44.369c52.118-30.11,85.333-85.84,85.333-147.631
    				C426.667,76.41,350.257,0,256,0z M298.667,426.667c-11.782,0-21.333,9.551-21.333,21.333v21.333h-42.667V448
    				c0-11.782-9.551-21.333-21.333-21.333V384h85.333V426.667z M310.836,286.164c-7.434,3.536-12.17,11.033-12.17,19.265v35.904
    				h-85.333v-35.904c0-8.232-4.736-15.729-12.17-19.265C156.814,265.069,128,220.501,128,170.667c0-70.693,57.307-128,128-128
    				s128,57.307,128,128C384,220.501,355.186,265.069,310.836,286.164z"
                      />
                      <path
                        d="M256,85.333c-47.131,0-85.333,38.202-85.333,85.333c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333
    				C213.333,147.099,232.433,128,256,128c11.782,0,21.333-9.551,21.333-21.333C277.333,94.885,267.782,85.333,256,85.333z"
                      />
                      <path
                        d="M490.667,149.333h-21.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h21.333
    				c11.782,0,21.333-9.551,21.333-21.333C512,158.885,502.449,149.333,490.667,149.333z"
                      />
                      <path
                        d="M64,170.667c0-11.782-9.551-21.333-21.333-21.333H21.333C9.551,149.333,0,158.885,0,170.667
    				C0,182.449,9.551,192,21.333,192h21.333C54.449,192,64,182.449,64,170.667z"
                      />
                      <path
                        d="M448.493,76.23l18.112-11.264c10.005-6.222,13.072-19.377,6.849-29.382c-6.222-10.005-19.377-13.072-29.382-6.849
    				L425.96,39.998c-10.005,6.222-13.072,19.377-6.849,29.382C425.333,79.386,438.488,82.452,448.493,76.23z"
                      />
                      <path
                        d="M63.496,265.095l-18.112,11.264c-10.005,6.222-13.072,19.377-6.849,29.382c6.222,10.005,19.377,13.072,29.382,6.849
    				l18.112-11.264c10.005-6.222,13.072-19.377,6.849-29.382S73.501,258.873,63.496,265.095z"
                      />
                      <path
                        d="M467.714,274.078l-18.24-11.051c-10.077-6.105-23.195-2.885-29.3,7.192c-6.105,10.077-2.885,23.195,7.192,29.3
    				l18.24,11.051c10.077,6.105,23.195,2.885,29.3-7.192S477.79,280.183,467.714,274.078z"
                      />
                      <path
                        d="M44.284,67.244l18.24,11.051c10.077,6.105,23.195,2.885,29.3-7.192s2.885-23.195-7.192-29.3l-18.24-11.051
    				c-10.077-6.105-23.195-2.885-29.3,7.192S34.207,61.139,44.284,67.244z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Theme</a
            >
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const onLogout = () => {
  store.commit("onLogout");
  router.push({ name: "LoginPage" });
};

const isAuthenticated = computed(() => store.getters._isAuthenticated);
</script>
