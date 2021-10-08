<template>
  <transition name="modal">
   
    <div class="modal-mask">
       <Loader v-if="loading"/>
      <div class="modal-container">
        <div class="modal-header">
          <img :src="this.imgURL" alt="" class="modal-img" />
          <button class="modal-button-close" @click="$emit('close')">
            <img src="../assets/images/close.png" alt="close" />
          </button>
        </div>
        <div class="modal-content">
          <span><b>Name: </b> {{ this.toUpper(pokemon.name) }}</span>
          <hr />
          <span><b>Weight: </b> {{ this.weight }}</span>
          <hr />
          <span><b>Height: </b> {{ this.height }}</span>
          <hr />
          <span
            ><b>Types: </b>{{ this.type.substr(0, this.type.length - 1) }}</span
          >
          <hr />
        </div>
        <div class="modal-navbar">
          <Button title="Share to my friends" @click="share" />
          <button-favorite :pokemon="pokemon" />
        </div>
      </div>
      <Snackbar :message="message" v-if="showMessage" />
    </div>
  </transition>
</template>

<script>
import Button from "@/components/Button.vue";
import ButtonFavorite from "@/components/ButtonFavorite.vue";
import Snackbar from "@/components/Snackbar.vue";
import Loader from '@/components/Loader.vue';
import axios from "axios";
import { copyText } from "vue3-clipboard";

export default {
  name: "Modal",
  props: ["pokemon"],
  components: {
    Button,
    ButtonFavorite,
    Snackbar,
    Loader
  },
  data() {
    return {
      weight: 0,
      height: 0,
      types: [],
      imgURL: "",
      type: "",
      infoPokemon: "",
      showMessage: false,
      message: "",
      loading: true,
    };
  },
  async created() {
    this.getDetail(this.pokemon.name);
  },
  methods: {
    toUpper(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async getDetail(name) {
      await axios
        .get(`/pokemon/${name}`)
        .then((res) => {
          const data = res.data;
          this.weight = data.weight;
          this.height = data.height;
          this.types = data.types;
          this.imgURL = data.sprites.other.dream_world.front_default;
          for (var t in this.types) {
            this.type = `${this.toUpper(this.types[t].type.name)},`;
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    share() {
      let infoPokemon = `${this.toUpper(this.pokemon.name)},weight:${
        this.weight
      },height:${this.height},type:${this.type}`;
      copyText(infoPokemon, undefined, (error, event) => {
        if (error) {
          this.message = "Uh-oh! We can't share now. Try again later.";
        } else {
          this.message = "Pokemon info is now in your clipboard!";
        }
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 2500);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";
img {
  background: none;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}
.modal-container {
  width: 48%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  .modal-header {
    background: url(../assets/images/background.png) no-repeat center;
    background-size: cover;
    height: 25vh;
    overflow: hidden;

    .modal-img {
      width: 60%;
      margin: 20px 0 20px 50px;
      height: calc(100% - 40px);
    }
  }
}
.modal-button-close {
  float: right;
  margin: 15px;
  border: none;
  background: none;
  cursor: pointer;
}

.modal-content {
  font-size: 18px;
  line-height: 150%;
  margin: 20px 0 10px 0;
  text-align: left;
  padding: 0 30px;
  hr {
    margin: 10px 0;

    background-color: $dark-white;
    height: 1px;
    border: 0;
  }
}
.modal-navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 20px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .modal-container {
    width: 80%;
  }
}
</style>