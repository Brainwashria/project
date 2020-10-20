<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/news">Новости</router-link>
    <button v-if="isUserAuthorized" @click="onLogout">Выйти</button>
    <button v-else @click="openThePopupWindow">Войти</button>
    <PopupWindow v-if="isItShow" @closeThePopup="onCloseThePopup" @authorization="onAuthorized"/>
  </header>
</template>

<script>
  import PopupWindow from "./PopupWindow";
  export default {
    name: "Header",
    components: {PopupWindow},
    data: function() {
      return {
        isUserAuthorized: false,
        isItShow: false
      }
    },
    methods: {
      openThePopupWindow() {
        this.isItShow = true;
      },
      onCloseThePopup() {
        this.isItShow = false;
      },
      onAuthorized() {
        this.isUserAuthorized = true;
      },
      onLogout() {
        this.isUserAuthorized = false;
        this.$store.dispatch('setTheUserAction', {username: 'Гость', userType: 'Гость'})
      }

    }
  }
</script>

<style scoped lang="less">
  header {
    height: 100px;
    font-size: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid grey;
     button {
       width: 120px;
       height: 50px;
     }
    a {
      color: black;
    }
  }
</style>