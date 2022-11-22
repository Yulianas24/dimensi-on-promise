<template>
  <div class="app-catalog " :class="this.$store.state.sidebarDetail.sidebarDetailActive ? 'grid-cols-3' : 'grid-cols-4'">
    <!-- Wordpress -->
    <div class="box">
      <div class=" flex items-center ">
        <img src="@/assets/images/App Catalog/Wordpress.svg" class="mr-[10px]" alt="">
        <div>
          <h1>Wordpress</h1>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>

    <!-- Docker -->
    <div class="box">
      <div class=" flex items-center ">
        <img src="@/assets/images/App Catalog/Docker.svg" class="mr-[10px]" alt="">
        <div>
          <h1>Docker</h1>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- NgingX -->
    <div class="box">
      <div class=" flex items-center ">
        <img src="@/assets/images/App Catalog/Nginx.svg" class="mr-[10px]" alt="">
        <div>
          <h1>NgingX</h1>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Cpanel -->
    <div class="box">
      <div class=" flex items-center ">
        <img src="@/assets/images/App Catalog/Cpanel.svg" class="mr-[10px]" alt="">
        <div>
          <h1>Cpanel</h1>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Sister -->
    <div class="box">
      <div class=" flex items-center ">
        <img src="@/assets/images/App Catalog/Sister.svg" class="mr-[10px]" alt="">
        <div>
          <h1>Sister</h1>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
  </div>
</template>