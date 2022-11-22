<template>
  <!-- Content 1 -->
  <div class="flex gap-4 justify-between pb-14">
    
    <div class="flex justify-center w-auto h-[161px] bg-white rounded-[10px] py-[40px] ">
      <div class="w-full ml-5">
        <h1 class="text-xl font-medium">Welcome to DimensiCloud</h1>
        <p class="text-xs text-[#838383]">You are now part of a revolution by choosing a regional cloud provider collaborating globally with others to offer an easy-to-use alternative to a public cloud oligopoly. Keep your data local and secure. Fast and personal support. Clear pricing. Start your best project today!</p>
      </div>
      <div class="grid content-evenly w-[230px] h-auto border-l-[1px] ml-4 pl-4">
        <h1 class="text-[#838383] font-medium text-xs">API</h1>
        <a href="#" class="flex text-[#0073C0] text-xs font-medium">
          <span class="mr-2">
            <img src="@/assets/images/icons/file-alt.svg" alt="">
          </span>
          API Documentation</a>

        <a href="#" class="flex text-[#0073C0] text-xs font-medium">
          <span class="mr-2">
            <img src="@/assets/images/icons/switch-horizontal.svg" alt="">
          </span>
          Manage API Keys</a>
      </div>
    </div>
    <!-- Load Balancer -->
    <div class="block bg-no-repeat p-5 bg-right w-[700px] bg-white rounded-[10px] bg-[url('@/assets//images/img/bg_load_balancer.png')] h-[161px]">
      <h1 class="text-lg font-bold w-[150px]">High Availability load balancer</h1>
      <a href="#" class="flex font-bold text-[10px] text-[#0073C0]">AVAILABLE NOW
        <span><img src="@/assets/images/icons/arrow-right.svg" alt=""></span>
      </a>
    </div>
  </div>
  <!-- End of Content 1 -->
</template>
<script>
export default {
  name: 'content 1'
}
</script>