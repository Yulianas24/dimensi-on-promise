<template>
  <div class="core-service" :class="this.$store.state.sidebarDetail.sidebarDetailActive ? 'grid-cols-3' : 'grid-cols-4'">
    <div class="box">
      <!-- Virtual Machine -->
      <div class=" flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/Virtual Machine.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>Virtual Machine</h1>
          <p>Compute</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Object Storage -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/Object Storage.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>Object Storage</h1>
          <p>Storage</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Floating IP -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/Floating IP 1.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>Floating IP</h1>
          <p>Network</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- VPC Network -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/VPC Network.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>VPC Network</h1>
          <p>Network</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Load Balancer -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/Load Balancer.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>Load Balancer</h1>
          <p>Network</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- Access Delegation -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets/images/Dashboard/Access Delegation.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>Access Delegation</h1>
          <p>Access</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
    <!-- API Token -->
    <div class="box">
      <div class="flex items-center ">
        <div class="img">
          <img src="@/assets\images\Dashboard\download.svg" height="25" width="25" alt="">
        </div>
        <div>
          <h1>API Token</h1>
          <p>Access</p>
        </div>
      </div>
      <img src="@/assets/images/icons/arrow-right.svg" class="justify-self-end" alt="">
    </div>
  </div>
</template>