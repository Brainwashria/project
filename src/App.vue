<template>
	<div id="app">
		<Header/>
		<router-view/>
	</div>
</template>

<script>

import Header from './components/Header';
export default {
	name: 'App',
	components: {
		Header
	}
};
</script>

<style>
	@import 'styles/style.less';
</style>
