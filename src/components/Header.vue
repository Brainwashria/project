<template>
	<header>
		<router-link to="/">Главная</router-link>
		<router-link to="/news">Новости</router-link>
		<button v-if="this.$store.state.userType !== 'Гость'" @click="onLogout">Выйти</button>
		<button v-if="this.$store.state.userType === 'Гость'" @click="isPopupShowing=true">Войти</button>
    <button v-if="this.$store.state.userType === 'Гость'" @click="isSignUpShowing=true">Регистрация</button>
		<PopupWindow v-if="isPopupShowing" @close-popup="onCloseThePopup" @authorization="onAuthorized"/>
    <SignUpPopup v-if="isSignUpShowing" @close-signup="onCloseSignUp"/>
	</header>
</template>

<script>
import PopupWindow from './PopupWindow';
import SignUpPopup from "@/components/SignUpPopup";
export default {
	name: 'Header',
	components: {SignUpPopup, PopupWindow},
	data: function() {
		return {
			isUserAuthorized: false,
			isPopupShowing: false,
      isSignUpShowing: false,
		};
	},
	methods: {
    onCloseSignUp() {
      this.isSignUpShowing = false;
    },
		onCloseThePopup() {
			this.isPopupShowing = false;
		},
		onAuthorized() {
		},
		onLogout() {
			this.$store.dispatch('setUserAction', {username: 'Гость', userType: 'Гость'});
		}
	}
};
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