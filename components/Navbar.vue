<template>
  <nav class="fixed top-0 w-full flex justify-between px-5 py-3 bg-white">
    <div class="flex items-center">
      <img src="@/assets/images/Logo.svg" alt="">
      <span class="bg-[#D9D9D9] h-[20px] w-[1px] mx-5"></span>
      <div class="w-3 h-3 flex items-center">
        <img src="@/assets/images/Menu & Navbar/Dashboard.svg"  alt="">
        <p class="text-[#0073C0] font-medium text-sm mx-[10px]">Dashboard</p>
      </div>
    </div>
    <!-- user  -->
    <div class="flex items-center">
      <img src="@/assets/images/Menu & Navbar/Notification.svg"  alt="">
      <span class="bg-[#D9D9D9] h-[20px] w-[1px] mx-3"></span>
      <div class="flex items-center">
        <div class="grid items-center w-[24px] h-[24px] bg-[#0097E933] rounded-full mx-1">
          <p class="text-[10px] text-center text-[#0073C0]">VD</p>
        </div>
        <p class=" font-normal text-sm ">Varx Developer</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'Navbar'
}
</script>