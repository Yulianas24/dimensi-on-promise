<template>
  <div>
    <div class="flex justify-between items-center mb-[10px] mx-3">
      <button class="flex font-normal text-[13px]" @click="selectMenu()"><span>
        <img class="mr-[10px]" src="@/assets/images/icons/chevron-left.svg" alt="">
      </span> Compute</button>
      <button class="block text-white text-[10px] font-normal w-[50px] h-[26px] bg-[#0073C0]">New</button>
    </div>
    <!-- search -->
    <div class="w-full px-3">
      <input class="w-full h-8 px-2" type="text" name="search" id="search">
    </div>
    <!-- sort -->
    <div class="flex items-center justify-between border-y w-full mt-3 py-1 px-[10px]">
      <p class="flex text-[#838383] font-normal text-[13px] items-center">Name <span><img src="@/assets/images/icons/chevron-down.svg" alt="" class="ml-1"></span></p>
      <div class="flex items-center">
        <a href="" class="mr-3"><img src="@/assets/images/icons/refresh-cw.svg" alt=""></a>
        <a href=""><img src="@/assets/images/icons/filter-list.svg" alt=""></a>
      </div>
    </div>
    <!-- Content  -->
    <div class=" flex items-center bg-white my-1 p-2">
      <div class="img w-[34px] h-[34px] bg-gray-200">
        <img src="@/assets/images/Dashboard/Virtual Machine.svg" height="14" width="14" alt="">
      </div>
      <div>
        <h1 class="font-bold text-[13px] font-sans">VarX Dev 2</h1>
        <p class="text-[#0073C0] font-normal text-[13px] mt-1">103.217.210.12</p>
      </div>
      <div class="w-12 h-[1px] self-end mb-1 ml-5 bg-green-500"></div>
    </div>

    <div class=" flex items-center bg-white my-1 p-2">
      <div class="img w-[34px] h-[34px] bg-gray-200">
        <img src="@/assets/images/Dashboard/Virtual Machine.svg" height="14" width="14" alt="">
      </div>
      <div>
        <h1 class="font-bold text-[13px] font-sans">VarX Dev 2</h1>
        <p class="text-[#0073C0] font-normal text-[13px] mt-1">103.217.210.12</p>
      </div>
      <div class="w-12 h-[1px] self-end mb-1 ml-5 bg-red-500"></div>
    </div>

    <!-- End of Content -->
    
    <!-- Create Button -->
    <NuxtLink to="/new-resource">
      <button class="text-[#0073C0] text-[13px] font-normal border-dotted border-2 border-sky-500 w-[320px] block mx-auto mt-3 h-[48px]">
        <span class="mr-3">+</span> Create now Resource
      </button>
    </NuxtLink>
    <!-- End of Create Button -->
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