<script lang="ts" setup>
</script>

<template>
  <DNavbar as="header" gap-sm>
    <div class="navbar-start">
      <!-- <DButton icon="i-mi:menu h-6 w-6" ghost square /> -->
      <AppLogo />
    </div>

    <nav class="navbar-center">
      <!-- <AppChildren /> -->
    </nav>

    <div class="navbar-end" gap-xs>
      <AppHelp />

      <DButton>
        Register
      </DButton>
      <DButton accent>
        Log in
      </DButton>
    </div>
  </DNavbar>
</template>
