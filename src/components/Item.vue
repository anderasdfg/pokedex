<template>
  <div class="container">
    <span @click="this.openInfo(pokemon)">{{ this.toUpper(pokemon.name) }}</span>
    <button-favorite :pokemon="pokemon"/>   
  </div>
   <modal v-if="showInfo" @close="showInfo = false" :pokemon="this.pokemonSelected"/>
</template>

<script>
import Modal from "@/components/Modal.vue";
import ButtonFavorite from "@/components/ButtonFavorite.vue"

export default {
  name: "item",
  props: ["pokemon"],
 components: {
    ButtonFavorite,
    Modal
  },
  data() {
    return {     
      showInfo: false, 
      pokemonSelected: {}
    };
  }, 
  inheritAttrs: false,
  methods: {
    toUpper(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
     openInfo(value){
      this.showInfo = true;
      this.pokemonSelected = value;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";

.container {
  align-content: center;
  background: #fff;
  border-radius: 5px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 10px 20px;
  width: 50%;
  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    align-items: center;
    background: #fff;
    display: flex;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .container {
    width: 85%;
  }
  
}

</style>