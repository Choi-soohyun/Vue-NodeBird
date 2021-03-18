export const state = () => ({
  mainPosts: [],
});

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload); // push는 맨 뒤로 삽입
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  },
  editMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    // 수정  
  }
}

export const actions = {
  add({ commit }, payload) {
    // 서버에 게시글 등록 요청 보냄

    commit('addMainPost', payload);
  },
  remove({ commit }, payload) {
    commit('removeMainPost', payload);
  },
  addComment({ commit }, payload) {
    commit('addComment', payload);
  },
  edit({ commit }, payload) {
    commit('editMainPost', payload);
  }
}