<template>
  <v-dialog v-model="openDialog" width="300px">
    <v-card height="200px">
      <v-card-text class="dialog-content justify-center">
        <slot name="content" />
      </v-card-text>
      <v-card-actions class="dialog-click-btn justify-center">
        <slot name="action" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["openDialog"],
};
</script>

<style>
.dialog-content {
  position: relative;
  text-align: center;
  top: 40px;
}

.dialog-click-btn {
  position: relative;
  top: 80px;
}
</style>
