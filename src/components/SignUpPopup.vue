<template>
  <div class='signUpWindow'>
    <h1>Регистрация</h1>
    <button @click='closeSignUp'>x</button>
    <label for='username'>Введите логин</label>
    <input type='text' id='username' v-model='username'>
    <label for='password'>Введите пароль</label>
    <input type='password' id='password' v-model='password'>
    <b v-if="error" class="error">{{this.errorMessage}}</b>
    <input type='submit' @click='sendData'>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUpPopup',
  methods: {
    closeSignUp() {
      this.$emit('close-signup');
    },
    sendData() {
      if(this.username === '' || this.password === '') {
        return console.log('error')
      }
      let path = 'http://localhost:5000/registration'
      axios.post(path, {
        username: this.username, password: this.password
      }).then(response => {if(response.data === 'successful') {this.$emit('close-signup')}}).catch(error => {this.errorMessage = error.response.data; this.error = true;})

    }
  },
  data: function () {
    return {
      username: '',
      password: '',
      error: false,
      errorMessage: ''
    }
  }
}
</script>

<style scoped lang="less">
.signUpWindow {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  background-color: white;
  height: 270px;
  border: 2px solid black;
  width: 300px;
  top: 0;
  right: 0;
  button {
    align-self: flex-end;
    width: 45px;
    height: 45px;
  }
  input, label {
    margin-bottom: 10px;
  }
  input {
    border: 2px solid black;
    border-radius: 5px;
  }
  .error {
    margin: 5px;
    font-weight: bold;
    color: red;
    font-size: 15px;
  }
}
</style>