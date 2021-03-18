<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          labe="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>올리기</v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      hideDetails: false,
      successMessages: '',
      success: false,
      content: '',
      valid: false
    }
  },
  computed: {
    //...mapState(['users/me'])
    ...mapState('users', ['me'])
    // ...mapState({ 
    //   me: state => this.$store.state.users.me
    // })
    // me() {
    //   return this.$store.state.users.me;
    // },
  },
  methods: {
    onChangeTextarea(value) {
      if(value.length) {
        this.hideDetails = true,
        this.successMessages = '',
        this.success = false
      }
    },
    onSubmitForm() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('posts/add', {
          // 서버 개발자와 이야기 후 이러한 항목들을 미리 정의할 수 있다.
          content:this.content,
          User : {
            nickname: this.me.nickname,
          }, 
          Comment: [],
          Images: [],
          id: Date.now(),
          createdAt: Date.now(),
        }).then(() => {
          this.hideDetails = false,
          this.success = true,
          this.successMessages = '게시글 등록 성공',
          this.content = ''
        }).catch(() => {

        })
      }
    }
  }
}
</script>

<style>

</style>