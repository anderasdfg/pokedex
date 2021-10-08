<template>
  <div class="container-loader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>
<style scoped>
.container-loader {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.616);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}
.loader {
  display: inline-block;
  width: 106px;
  height: 106px;
  background: transparent;
}
.loader:after {
  background: url("../assets/images/pokebola.png");
  content: " ";
  width: 106px;
  height: 106px;
  display: block;
  animation: loader 1.2s linear infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>