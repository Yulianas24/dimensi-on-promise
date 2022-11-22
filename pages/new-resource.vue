<template>
  <div class="w-full h-full overflow-scroll bg-[#F2F2F2] pt-7 pb-[100px]">
    <!--  -->
    <div class="relative w-[95%] h-auto bg-white mx-auto rounded-lg p-10">
      <ResourceCreateNewResource/>
    </div>

    <!-- Type -->
    <div class="w-[88%] h-auto ml-[2.5%] rounded-lg px-10 mt-10">
      <ResourceType/>
    </div>
    <!-- End of type -->

    <div class="w-full h-[1px] bg-gray-300 my-5"></div>

    <!-- OS -->
    <div>
      <div class="w-[88%] h-auto ml-[2.5%] rounded-lg px-10">
        <ResourceOs/>
      </div>
    </div>
    <!-- End of OS -->

    <div class="w-full h-[1px] bg-gray-300 my-5"></div>
    
    <!-- Network Type* -->
    <div class="flex w-[88%] h-auto ml-[2.5%] rounded-lg px-10">
      <h1 class="w-[140px] text-[13px]">Network Type*</h1>
      <div class="flex justify-start text-[13px] gap-1">
        <input type="radio" name="network" >Public
        <input type="radio" name="network" class="ml-10"> Private
      </div>
    </div>
    <!-- End of Network Type  -->
    <div class="w-full h-[1px] bg-gray-300 my-5"></div>
    <!-- Text Form -->
    <ResourceTextForm/>
    <div class="w-full h-[1px] bg-gray-300 my-5"></div>
    <!-- Button -->
    <div class="flex justify-end w-full">
      <button class="text-[#303030] font-semibold text-[13px] w-[44px] h-[22px] ">Cancel</button>
      <button>Create</button>
    </div>
  </div>

</template>