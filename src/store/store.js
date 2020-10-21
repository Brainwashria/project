import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		setUserAction({commit}, payload) {
			commit('setUser', payload);
		},
		addNewsAction({commit}, payload) {
			commit('addNews', payload);
		},
		addApprovalAction({commit}, payload) {
			commit('AddApproval', payload);
		},
		deleteTheNewsAction({commit}, payload) {
			commit('deleteNews', payload);
		}
	},
	mutations: {
		setUser(state, payload) {
			state.userType = payload.userType;
			state.username = payload.username;
		},
		addNews(state, payload) {
			state.news.push({date: payload.date, title: payload.title, text: payload.text, approved: false, usernameAdded: payload.usernameAdded});
		},
		AddApproval(state, payload) {
			for(let news of state.news) {
				if(news.date === payload.date) {
					news.approved = true;
				}
			}
		},
		deleteNews(state, payload) {
			for(let news of state.news) {
				if(news.date === payload.date) {
					let index = state.news.indexOf(news);
					state.news.splice(index, 1);
				}
			}
		}
	},
	state: {
		userType: 'Гость',
		username: 'Гость',
		news: [
			{
				title: 'testTitle',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
				date: '19.10.2020',
				approved: true,
				usernameAdded: 'someUser'
			},
			{
				title: 'testTitle2',
				text: 'Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!',
				date: '20.10.2020',
				approved: true,
				usernameAdded: 'someUser'
			},
			{
				title: 'User title',
				text: 'Some text',
				date: '21.10.2020',
				approved: false,
				usernameAdded: 'Victoria'
			}
		]
	}
});