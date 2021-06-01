<template>
  <transition name="slide" mode="out-in">
    <div class="mx-3 mx-md-5 my-md-5 my-3 cont shadow rounded p-2">
      <div class="container">
        <Predict />
      </div>
    </div>
  </transition>
</template>

<script>
import Predict from "~/components/index/Predict";
export default {
  components: { Predict },
  transition: "slide",
};
</script>

<style scoped>
</style>
