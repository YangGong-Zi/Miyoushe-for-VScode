<script setup lang="ts"></script>

<template>
  <div class="fixed w-[380px] top-0 z-10 shadow-xl navbar bg-base-100">
    <div class="flex-none">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="z-50 drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li><router-link to="/">官方</router-link></li>
          <li><router-link to="/StrategyView">攻略</router-link></li>
          <li><router-link to="/CosView">Cos</router-link></li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <routerLink to="/" class="text-xl btn btn-ghost">Miyoushe</routerLink>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
        >
          <li><span>主题切换</span></li>
          <!-- <li><a>Logout</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
