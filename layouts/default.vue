<template>
  <div  class="page">
    <Navbar />
    <div class="container" :class="this.$store.state.sidebarDetail.sidebarDetailActive ? 'sidebar-detail-active' : ''">
      <!-- Nav Item dashboard -->
      <nav class="w-full border-b-2 border-gray-100">
        <div class="flex bg-gray-100 w-[200px] justify-between px-3 border-t border-blue-600" >
          <div class="flex items-center">
            <img src="@/assets/images/Menu & Navbar/Dashboard.svg" class=""  alt="">
            <p class=" font-medium text-sm leading-7 mx-[10px]">Dashboard</p>
          </div>
          <img src="@/assets/images/X-Icon.svg" class="w-3" alt="">
        </div>
      </nav>
      <Nuxt />
    </div>
    <Sidebar />
  </div>
</template>

<script>
import 'tw-elements';
export default {
  
}
</script>
