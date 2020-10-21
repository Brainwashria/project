<template>
	<div id="recordAddingPopup">
		<button @click="closeRecordsPopup">x</button>
		<label for="recordTitle">Заголовок новости</label>
		<input type="text" id="recordTitle" v-model="title">
		<textarea id="textOfTheNews" v-model="text"/>
		<input type="submit" id="sendTheRecord" @click="sendNews">
	</div>
</template>

<script>
export default {
	name: 'RecordAddingPopup',
	data: function() {
		return {
			title: '',
			text: '',
			date: ''
		};
	},
	methods: {
		sendNews() {
			this.date = new Date().toDateString();
			let date = this.date;
			let title = this.title;
			let text = this.text;
			let usernameAdded = this.$store.state.username;
			this.$store.dispatch('addNewsAction', {date, title, text, usernameAdded});
			this.$emit('close-records-popup');
		},
		closeRecordsPopup() {
			this.$emit('close-records-popup');
		}
	}
};
</script>

<style scoped lang="less">

	#recordAddingPopup {
		font-size: 20px;
		display: flex;
		flex-direction: column;
		padding: 20px;
		position: absolute;
		transform: translate(50%, 0);
		border-radius: 10px;
		width: 900px;
		height: 600px;
		border: 2px solid black;
		background: white;
		button {
			width: 30px;
			height: 30px;
			align-self: flex-end;
		}
		label {
			font-size: 25px;
		}
		input, textarea {
			margin-bottom: 20px;
			border: 2px solid black;
			border-radius: 10px;
		}
		#recordTitle {
			width: 100%;
			height: 40px;
		}
		#textOfTheNews {
			height: 300px;
		}
		#sendTheRecord {
			height: 45px;
			width: 150px;
			align-self: center;
		}
	}
</style>