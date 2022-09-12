<script lang="ts" setup>
  withDefaults(defineProps<{
    as: string
  }>(), {
    as: 'button',
  })
  </script>
  
  <template>
    <BaseButton>
      <slot></slot>
    </BaseButton>
  </template>

  <style lang="postcss">

  </style>
  