<template>
  <div>
    <loader v-if="loading" />
    <input type="text" placeholder="Search" class="search" v-model="search" />
    <div v-if="isActiveAll">
      <div v-for="pokemon in pokemons" :key="pokemon.url" class="items">
        <item class="item" :pokemon="pokemon" />
      </div>
      <not-found
        v-if="Object.keys(pokemons).length === 0"
        class="div-not-found"
      />
    </div>
    <div v-else>
      <div v-for="pokemon in favorite" :key="pokemon.url" class="items">
        <item class="item" :pokemon="pokemon" />
      </div>
      <div class="div-not-favs"
        v-if="Object.keys(favorite).length === 0">
        <h1>Uh-oh!</h1>
        <span>Looks like you don't have any favorite pokemon yet</span>
      </div>
    </div>

    <bottom-bar @selectedAll="selectOption" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import BottomBar from "@/components/BottomBar.vue";
import NotFound from "@/components/Notfound.vue";
import Loader from "@/components/Loader.vue";
import { computed, onUnmounted, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Search",
  components: {
    Item,
    BottomBar,
    NotFound,
    Loader,
  },
  data() {
    return {
      isActiveAll: true,
      showInfo: false,
      search: "",
      // isLoading: false,
    };
  },
  setup() {
    const store = useStore();
    let loading = true;
    onMounted(() => {
      store.dispatch("fetchData");
    });

    const pokemons = computed(() => store.state.pokemons);
    const favorite = computed(() => store.state.favorite);

    loading = false;

    return { pokemons, favorite, loading };
  },
  methods: {
    selectOption(value) {
      this.isActiveAll = value;
    },
  },
  computed: {
    pokemons() {
      return this.pokemons.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";
.search {
  background: #fff url(../assets/images/search.png) 15px 16px no-repeat;
  border: none;
  width: 50%;
  height: 50px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 0 15px 0 43px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: $dark-gray;
  outline: none;
  &::-webkit-input-placeholder {
    color: $light-gray;
  }
  margin-top: 35px;
}
.search-bar {
  width: 50%;
  margin-top: 35px;
}
.items {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.div-not-found, .div-not-favs {
  margin-top: 50px;
}
.div-not-favs {
  
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
}
}
@media (min-width: 320px) and (max-width: 480px) {
  .search {
    width: 85%;
  }
}
</style>
