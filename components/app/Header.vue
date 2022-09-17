<script lang="ts" setup>
</script>

<template>
  <DaisyNavbar as="header" gap-sm>
    <div class="navbar-start">
      <AppLogo />
    </div>

    <nav class="navbar-center">
      <AppChildren />
    </nav>

    <div class="navbar-end" gap-xs>
      <AppHelp />

      <DaisyButton>
        Register
      </DaisyButton>
      <DaisyButton accent>
        Log in
      </DaisyButton>
    </div>
  </DaisyNavbar>
</template>
