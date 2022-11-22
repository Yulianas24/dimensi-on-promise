<template>
  <div class="w-[88%] h-auto ml-[2.5%] rounded-lg px-10">
    <!-- Username -->
    <div class="flex items-center my-3">
      <label for="username">Username*</label>
      <input type="text" name="username" class="input-text" id="">
      <p class="description">A user account will be created with this username, it can be used to log in to the VM. Can contain ASCII letters, digits, underscores and hyphens. Must start with a letter or underscore. Maximum length is 25 characters.</p>
    </div>
    <!-- password -->
    <div class="flex items-center my-3">
      <label for="Password">Password*</label>
      <input type="password" name="password" class="input-text" id="">
      <p class="description">Password for the user. Must contain at least one lowercase and one uppercase ASCII letter (a-z, A-Z) and at least one digit (0-9). Minimum length is 8 characters.</p>
    </div>
    <!-- confirm password -->
    <div class="flex items-center my-3">
      <label for="Password">Confirm Password*</label>
      <input type="password" name="confirm_password" class="input-text" id="">
      <p class="description">The re-typed password, to ensure that it has been entered correctly.</p>
    </div>
    <!-- SSH -->
    <div class="flex items-start my-3">
      <label for="SSH">SSH</label>
      <input type="text" name="SSH" class="input-text h-[100px]" id="">
      <p class="description">Public key part of the SSH key pair for logging in to the VM. Must be in format 'ssh-keytype base64encodedkeykey...keykey OptionalComment'.</p>
    </div>
    <!-- resource name -->
    <div class="flex items-start my-3">
      <label for="resource name">Resource Name*</label>
      <input type="text" name="resource_name" class="input-text" id="">
      <p class="description">Informative name, it will also be used to generate a suitable hostname for the VM (if applicable).</p>
    </div>
  </div>
</template>