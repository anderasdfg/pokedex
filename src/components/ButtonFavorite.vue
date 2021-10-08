<template> 
    <button @click="add(pokemon)" >
      <img
        src="../assets/images/fav-active.png"
        alt="star"
        v-if="pokemon.isFavorite"
      />
      <img src="../assets/images/fav-disabled.png" alt="" v-else />
    </button>  
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: "ButtonFavorite",
  props: ["pokemon"],   
  setup() {
      const store = useStore();    

      const add = pokemon => {
          store.dispatch('addFavorite', pokemon)
      }      
      return {add}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";

button {
  outline: none;
  cursor: pointer;
  border: none;
  background: none;
}
img {
  background: none;
}
@media (min-width: 320px) and (max-width: 480px) {
  .container {
    width: 85%;
  }
  
}

</style>