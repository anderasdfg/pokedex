<template>
  <div class="container">
    <h1>Uh-oh!</h1>
    <span>You look lost on your journey!</span>
    <div class="container-btn">
        <Button class="button" title="Go back home"  @click="$router.push('/')" />
    </div>
    
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "NotFound",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";
.container {
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 10px;
     color: $dark-gray;
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 25px;
    color: $gray;
    .container-btn {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;      
    }
  }
}
</style>