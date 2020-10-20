<template>
  <article>
    <h1>{{record.title}}</h1>
    <p>{{record.text}}</p>
    <small>{{record.date}}</small>
    <div class="buttonContainer" v-if="checkTheType === 'Admin'">
      <button v-if="record.approved === false" @click="onApproval">Одобрить</button>
      <button @click="onDelete">Удалить</button>
    </div>
  </article>
</template>

<script>
  export default {
    name: "News",
    props: {
      record: Object
    },
    computed: {
      checkTheType() {
        return this.$store.state.userType;
      }
    },
    methods: {
      onApproval() {
        this.$store.dispatch('addTheApprovalAction', this.record);
      },
      onDelete() {
        this.$store.dispatch('deleteTheNewsAction', this.record);
      }
    }
  }
</script>

<style scoped lang="less">
  article {
    margin-top: 40px;
    .buttonContainer {
      button {
        margin-right: 10px;
        width: 140px;
        height: 35px;
      }
    }
    h1 {
      font-weight: bold;
      font-size: 25px;
    }
    p {
      font-size: 20px;
    }
  }

</style>