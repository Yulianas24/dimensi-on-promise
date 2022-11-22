<template>
  <div class="flex w-full h-full ">

    <h1 class="w-[140px] text-[13px]">Os*</h1>
    <!-- Os List -->
    <div class="grid grid-cols-6 gap-4">

      <!-- Ubuntu -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] bg-[#0073C0] rounded-md">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsUbuntu :fill="'white'"/>
          <p class="font-medium text-[11px] text-white mt-3">Ubuntu</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent text-white font-medium text-[11px] w-full ">
            <option value="">Version</option>
          </select>
        </div>
      </div>

      <!-- Debian -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsDebian />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Ubuntu</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
      <!-- Centos -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsCentos />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Centos</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>

      <!-- Alma -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsAlma />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Alma Linux</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
      <!-- Rocky -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsRocky />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Rocky Linux</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
      <!-- Fedora -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsFedora />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Fedora</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
      <!-- OpenSUSE -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsOpen />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Open SUSE</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
      <!-- Arch -->
      <div class="grid justify-items-center content-between w-[100px] h-[120px] rounded-md" :class="'bg-white'">
        <div class="grid justify-items-center pt-5 ">
          <!-- Icon -->
          <IconOsArch />
          <p class="font-medium text-[11px] mt-3" :class="'text-[#838383]'">Arch Linux</p>
        </div>
        <!-- Select Version -->
        <div class="w-full border-t mx-auto p-1">
          <select name="version" id="" class="bg-transparent  font-medium text-[11px] w-full " :class="'text-[#838383]'">
            <option value="">Version</option>
          </select>
        </div>
      </div>
    </div>
    <!-- End of Type List -->
  </div>
</template>