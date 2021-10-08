<template>
  <div class="container">   
    <img src="../assets/images/pikachu.png" alt="Pikachu" />
    <h1>{{ this.title }}</h1>
    <div class="description">
      <p>{{ this.description }}</p>
    </div>    
    <Button title="Get started" v-on:click="start"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "Welcome",
  components: {
    Button,    
  },
  data() {
    return {
      title: "Welcome to Pokédex",
      description:
        "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",
    };
  },
  methods: {
    start: function() {
      this.$router.push({ path: 'search' })
    }
  }
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 0 30px;
}
img {
  margin-bottom: 60px;
}
h1 {
  margin-bottom: 30px;
  color: $dark-gray;
  font-weight: bold;
}
.description {
  width: 30%;
  p {
    margin-bottom: 50px;
    color: $gray;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .description {
  width: 100%; 
  }
}

</style>
