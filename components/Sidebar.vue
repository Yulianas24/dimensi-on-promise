<template>
  <div class="fixed top-10 h-screen w-20 py-2 bg-white">
    
    <a href="#compute"  class="side-content" 
        data-bs-toggle="pill" data-bs-target="#compute" 
        aria-selected="false" @click="selectMenu()"
        :class="this.$store.state.sidebarDetail.sidebarDetailActive ? 'side-content-active' : ''">
        <!-- Compute Icon  -->
        <IconCompute :pathFill="this.$store.state.sidebarDetail.sidebarDetailActive ? 'white' : '#0073C0'" />
        <!-- End of Compute Icon -->
      <h1>COMPUTE</h1>
    </a>

    <a href="#" class="side-content">
      <img src="@/assets/images/Menu & Navbar/Storage.svg" alt="">
      <h1>STORAGE</h1>
    </a>
    <a href="#" class="side-content">
      <img src="@/assets/images/Menu & Navbar/Network.svg" alt="">
      <h1>NETWORK</h1>
    </a>
    <a href="#" class="side-content">
      <img src="@/assets/images/Menu & Navbar/Services.svg" alt="">
      <h1>SERVICES</h1>
    </a>
    <a href="#" class="side-content">
      <img src="@/assets/images/Menu & Navbar/Access.svg" alt="">
      <h1>ACCESS</h1>
    </a>

    <div class="fixed z-30 py-3 top-12 w-[340px] left-20 h-full bg-[#F2F2F2]" v-if="this.$store.state.sidebarDetail.sidebarDetailActive">
      <DashboardSidebarCompute />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar', 
  methods: {
    selectMenu() {
      this.$store.commit('sidebarDetail/trigger')
    }
  }
}
</script>