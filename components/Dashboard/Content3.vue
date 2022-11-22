<template>
  <div class="content-3 py-8  mb-24">
    <!-- Recently Modified -->
    <div class="grid h-auto content-start " :class="this.$store.state.sidebarDetail.sidebarDetailActive ? 'col-span-4' : 'col-span-2'">
      <h1 class="mb-7">Recently Modified</h1>
      <div class="h-[500px] w-full  bg-white rounded-lg p-3">
        <!-- Row 1 -->
        <div class=" flex justify-between items-center">
          <div class="flex content-items">
            <div class="img">
              <img src="@/assets/images/Dashboard/inbox.svg" height="25" width="25" alt="">
            </div>
            <div>
              <h1>VARX Dev-2</h1>
              <p class="flex content-center">
                12 days ago 
                <img src="@/assets/images/icons/Ellipse.svg" class="mx-3" alt="">
                Virtual Machine
              </p>
            </div>

          </div>
          <!-- Status -->
          <div class="flex">
            <div class="btn bg-red-100 mr-6">
              <img src="@/assets/images/icons/Ellipse-red.svg" class="mr-1" alt="">
              <p class="text-red-700">STOPPED</p>
            </div>
            <img src="@/assets\images\icons\chevron-right.svg" alt="">
          </div>
        </div>
        <!-- End of Row 1 -->
        <div class="w-full h-[1px] bg-gray-300 my-3"></div>
        
        <!-- Row 2 -->
        <div class=" flex justify-between items-center">
          <div class="flex content-items">
            <div class="img">
              <img src="@/assets/images/Dashboard/inbox.svg" height="25" width="25" alt="">
            </div>
            <div>
              <h1>VARX Dev</h1>
              <p class="flex content-center">
                14 days ago 
                <img src="@/assets/images/icons/Ellipse.svg" class="mx-3" alt="">
                Managed Service
              </p>
            </div>

          </div>
          <!-- Status -->
          <div class="flex">
            <div class="btn bg-green-100 mr-6">
              <img src="@/assets/images/icons/Ellipse green.svg" class="mr-1" alt="">
              <p class="text-green-700">ACTIVE</p>
            </div>
            <img src="@/assets\images\icons\chevron-right.svg" alt="">
          </div>
        </div>
        <!-- End of Row 2 -->
        <div class="w-full h-[1px] bg-gray-300 my-3"></div>

        <!-- Row 3 -->
        <div class=" flex justify-between items-center">
          <div class="flex content-items">
            <div class="img">
              <img src="@/assets/images/Dashboard/Floating IP 1.svg" height="25" width="25" alt="">
            </div>
            <div>
              <h1>VARX Dev</h1>
              <p class="flex content-center">
                12 days ago 
                <img src="@/assets/images/icons/Ellipse.svg" class="mx-3" alt="">
                Floating IP
              </p>
            </div>

          </div>
          <!-- Status -->
          <div class="flex">
            <div class="btn bg-green-100 mr-6">
              <img src="@/assets/images/icons/Ellipse green.svg" class="mr-1" alt="">
              <p class="text-green-700">ASSIGNED</p>
            </div>
            <img src="@/assets\images\icons\chevron-right.svg" alt="">
          </div>
        </div>
        <!-- End of Row 3 -->
      </div>
    </div>
    <div class="">
      <div class="flex item-center w-full justify-between mb-7">
        <h1>User Access</h1>
        <a href="#" class="flex items-center text-[#0073C0] text-xs font-medium ">
          <span class="mr-2"><img src="@/assets/images/icons/plus.svg" alt=""></span> Share Access</a>
      </div>
      <div class="block w-full h-[500px] rounded-lg bg-white ">
        <div class="flex justify-between py-8 px-5">
          <a href="" class="w-1/2 text-center text-xs border-b border-black pb-3 font-medium">I can access</a>
          <a href="" class="w-1/2 text-center text-xs text-[#D3D3D3] border-b border-[#D3D3D3] pb-3 font-medium">can access me</a>
        </div>
        <div class="grid content-center justify-items-center h-[400px]">
          <img src="@/assets/images/icons/users.svg" alt="">
          <p class="text-[#D3D3D3] text-xs font-medium">No one has shared you access yet</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content3'
}
</script>