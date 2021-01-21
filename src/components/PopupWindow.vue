<template>
	<div class='popupWindow'>
		<button @click='closeThePopup'>x</button>
		<label for='username'>Введите логин</label>
		<input type='text' id="username" v-model='username'>
		<label for='password'>Введите пароль</label>
		<input type='password' id='password' v-model='password'>
		<input type='submit' @click='onAuthorization'>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'PopupWindow',
	methods: {
		closeThePopup() {
			this.$emit('close-popup');
		},
    onAuthorization() {
		  let path = 'http://localhost:5000/authorization'
      axios.post(path, {
        username: this.username,
        password: this.password
      }).then(response => {if(response.data === 'successful') {this.$emit('close-popup')}}).catch()
      this.$emit('authorization');
      this.$emit('close-popup');
			}
		},
	data: function() {
		return {
			password: '',
			username: ''
		};
	},
};
</script>

<style scoped lang="less">
	.popupWindow {
		display: flex;
		flex-direction: column;
		padding: 20px;
		position: absolute;
		background-color: white;
		height: 200px;
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
	}
</style>