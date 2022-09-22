<script lang="ts" setup>
const filters = [
  'Тип оружия',
  'качество',
  'стикеры на скине',
  'другое',
  'Редкость',
  'Float',
  'Цвет',
  'Градиент',
  'Фаза',
  'Редкие предметы',
  'Паттерн',
]
const categories = [
  'Перчатки',
  'Пистолеты',
  'Пистолеты-пулемёты',
  'Штурмовые винтовки',
  'Снайперские винтовки',
  'Дробовики',
  'Перчатки',
  'Ключи',
  'Яшики',
  'Другое',
]

const [isActive, toggle] = useToggle()
</script>

<template>
  <DButton ghost icon="i-mi:filter text-accent" @click="() => toggle()">
    <span sr-only md:not-sr-only>Filters</span>


    <Teleport to="#drawer" v-if="isActive">
      <div w-xs divide-y divide-base>
        <details v-for="filter in filters" :key="filter" px-2>
          <DButton ghost block justify="!between" flex-row-reverse as="summary" icon="summary-icon">
            <legend>{{ filter }}</legend>
          </DButton>

          <div class="p-2">
            <DFormControl v-for="control in categories" :key="control" class="[--rounded-btn:0px]">
              <label class="label cursor-pointer" justify="!start" gap-2>
                <input type="checkbox" class="checkbox" />
                <span class="label-text" text-left>{{control}}</span>
              </label>
            </DFormControl>
          </div>
        </details>
      </div>
    </Teleport>

  </DButton>
</template>

<style lang="postcss">
.summary-icon {
  @apply i-mdi:plus;
}

:where([open]) .summary-icon {
  @apply i-mdi:minus;
}
</style>

