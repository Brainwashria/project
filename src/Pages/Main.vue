<template>
	<div>
		<h1>Hello, {{this.$store.state.username}}</h1>
	</div>
</template>

<script>
export default {
	name: 'Main',
	data: function() {
		return {
			username: ''
		};
	},
};
</script>

<style scoped lang="less">
	h1 {
		font-size: 30px;
	}
</style>