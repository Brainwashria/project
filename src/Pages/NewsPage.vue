<template>
  <div id="newsPage">
    <h1>Новости</h1>
    <label for="searchField">Поиск по новостям</label>
    <input type="search" id="searchField" v-model="searchField">
    <button v-if="checkTheType === 'user'" @click="openRecordsPopup" id="addTheNews">Добавить новость</button>
    <RecordAddingPopup v-if="isPopupShowing" @closeRecordsPopup="closeRecordsPopup"/>
    <News v-for="news of sortedNews" :record="news" :key="news.title"></News>
  </div>
</template>

<script>
  import RecordAddingPopup from "../components/RecordAddingPopup";
  import News from "../components/News";

  export default {
    name: "NewsPage",
    components: {RecordAddingPopup, News},
    data: function () {
      return {
       userType: '',
       isPopupShowing: false,
       searchField: '',
      }
    },
    methods: {
      openRecordsPopup() {
        this.isPopupShowing = true;
      },
      closeRecordsPopup() {
        this.isPopupShowing = false;
      },
      searchFilter(arr, news) {
        if(!this.searchField) {
          arr.push(news);
        } else if(news.title.includes(this.searchField) || news.text.includes(this.searchField)) {
          arr.push(news);
        }
      }
    },
    computed: {
      checkTheType() {
        return this.$store.state.userType;
      },
      sortedNews() {
        let arr = this.$store.state.news;
        console.log(arr);
        console.log(!this.searchField)
        let newsArr = []
        for(let news of arr) {
          if(this.$store.state.userType === 'user') {
            if(news.approved === true || news.usernameAdded === this.$store.state.username) {
              this.searchFilter(newsArr, news);
            }
          }
         if(this.$store.state.userType === 'Admin') {
           this.searchFilter(newsArr, news);
         }
         if(this.$store.state.userType === 'Гость') {
           if(news.approved === true) {
             this.searchFilter(newsArr, news);
           }
         }
        }
        return newsArr;
      }
    },
  }
</script>

<style scoped lang="less">
  #newsPage {
    display: flex;
    flex-direction: column;
    input {
      width: 400px;
      height: 45px;
      border: 2px solid black;
      border-radius: 5px;
    }
    #addTheNews {
      margin-top: 40px;
      width: 150px;
      height: 40px;
    }
    h1 {
      font-size: 30px;
    }
  }

</style>