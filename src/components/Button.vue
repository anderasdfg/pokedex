<template>

    <button>{{title}}</button>

</template>

<script>

export default {
  name: "Button",
  props: ['title']
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";
button {
  padding: 11px 20px;
  background: $red;
  border-radius: 60px;
  color: $white;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  border: none;
  cursor: pointer;
  &:hover {
    background: $dark-red;
  }
}

</style>
