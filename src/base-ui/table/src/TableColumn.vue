<template>
  <el-table-column
    v-if="!(children && children.length > 0)"
    v-slot="{ row }"
    v-bind="tableColumn"
    :align="align || 'center'"
    :type="type || ''"
  >
    <slot v-if="!filterSlotType.includes(type!)" :name="slotName" :row="row">
      {{ row[prop] }}
    </slot>
  </el-table-column>
  <el-table-column v-else :label="label" :align="align || 'center'">
    <TableColumn
      v-for="subTableColumn in children"
      :key="subTableColumn.prop"
      :table-column="subTableColumn"
    ></TableColumn>
  </el-table-column>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { ITableColumn } from './table-type'

const props = defineProps<{
  tableColumn: ITableColumn
}>()

const { children, align, type, slotName, prop, label } = toRefs(reactive(props.tableColumn))

const filterSlotType = ['selection', 'index']
</script>

<style scoped></style>
