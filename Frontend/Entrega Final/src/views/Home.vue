<template>
  <div>
    <h1 class="text-center mt-4 mb-3" style="font-size: 4rem">
      Food Storage <span style="font-weight: bold">❤</span>
    </h1>
    <Carousel />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "App",

  components: { Carousel },

  data: () => ({
    //
  }),
};
</script>
