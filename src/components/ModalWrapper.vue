<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="isShow" class="absolute w-full bg-black/40 h-screen top-0 left-0 flex justify-center px-8">
        <Transition name="modal-inner">
          <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
            <slot/>
            <div>
              <button class="text-white mt-8 bg-base-primary py-2 px-6 btn-animation-active rounded-md" @click="emits('onClose')">Close</button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: false,
    required: true
  }
});
const emits = defineEmits(['onClose']);
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
