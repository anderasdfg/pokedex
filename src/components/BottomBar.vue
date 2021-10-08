<template>
  <div class="navbar-container">
      <div class="navbar-content">
        <button class="btn" :class="{ active: isActiveAll }" @click="all()">
          <img src="../assets/images/list.png" alt="" />All
        </button>
        <button
          class="btn"
          :class="{ active: isActiveFavorites }"
          @click="favorites()"
        >
          <img src="../assets/images/star.png" alt="" /> Favorites
        </button>
      </div>
    </div>
</template>

<script>
export default {
 name: 'BottomBar',
 data() {
    return {
      isActiveAll: true,
      isActiveFavorites: false,    
    };
  },
   methods: {
    all() {
      this.isActiveAll = true;
      this.isActiveFavorites = false;
      this.$emit('selectedAll', true);    
    },
    favorites() {
      this.isActiveAll = false;
      this.isActiveFavorites = true;
      this.$emit('selectedAll', false);
     
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_shared.scss";
.navbar-container {
  background: #fff;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 18px 0;
  position: fixed;
  width: 100%;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  .navbar-content {
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 50%;
    .btn {
      background: $light-gray;
      border: none;
      border-radius: 60px;
      color: $white;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      font-family: "Lato", sans-serif;
      font-size: 18px;
      padding: 11px 20px;
      width: 48%;
      &:hover {
        background: $red;
      }
    }
    .active {
      background: $red;
    }
  }
}
img {
  background: none;
  padding: 0 10px;
}
@media (min-width: 320px) and (max-width: 480px) {  
  .navbar-container {
    .navbar-content {
      width: 85%;
    }
  }
}
</style>