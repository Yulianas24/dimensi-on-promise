<template>
  <!-- Content 2 -->
  <div class="">
    <h1 class="text-lg font-medium">Start Something New</h1>

    <!-- Core Service -->
    <ul class="nav nav-tabs flex my-4">
    <li class="nav-item" >
      <a href="#core-service" class="nav-link nav-item-content active" data-bs-toggle="pill" data-bs-target="#core-service" 
        aria-selected="true">Core Service</a>
    </li>
    <li class="nav-item">
      <a href="#app-catalog" class="nav-link nav-item-content" data-bs-toggle="pill" data-bs-target="#app-catalog" aria-selected="false">App Catalog</a>
    </li>
    
    <li class="nav-item" role="presentation">
      <a href="#" class="nav-link nav-item-content">Managed Service</a>
    </li>
    
    <div class="grid justify-items-end w-full border-b">
      <a href="#" class="text-blue-500 text-right text-[13px] font-medium py-[10px] w-full">More Details</a>
    </div>
  </ul>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="core-service" >
          <DashboardContent2Coreservice/>
        </div>
        <div class="tab-pane fade"  id="app-catalog">
          <DashboardContent2Appcatalog/>
        </div>
      </div>
  </div>
  <!-- End ofContent 2 -->
</template>
<script>
export default {
  name:'content 2'
}
</script>