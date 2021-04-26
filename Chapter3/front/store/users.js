export const state = () => ({
  me: null, // null 로그인 안한상태
  followerList: [{
    id: 1,
    nickname: '제로초'
  },{
    id: 2,
    nickname: '네로'
  },{
    id: 3,
    nickname: '히어로'
  },],
  followingList: [{
    id: 1,
    nickname: '제로초'
  },{
    id: 2,
    nickname: '네로'
  },{
    id: 3,
    nickname: '히어로'
  },],
});

export const mutations = { // 단순한 동기적인 작업
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  addFollower(state, payload) {
    state.followerList.push(payload);
  },
  addFollowing(state, payload) {
    state.followingList.push(payload);
  },
  removeFollower(state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followerList.splice(index, 1);
  },
  removeFollowing(state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followingList.splice(index, 1);
  }
};

export const actions = { // 복잡한 작업 + 비동기 작업 시 사용 
  signUp({ commit, state }, payload) { // context 객체 : commit(mutations 실행), dispatch(actions 실행), state, getters, rootState, rootGetters ....
    // 서버에 회원 가입 요청 보내고
    // 응답에 따라 state 변경
    // console.log(context)
    commit('setMe', payload);
  }, 
  logIn(context, payload) {
    context.commit('setMe', payload);    
  },
  logOut(context, payload) {
    context.commit('setMe', null);
  }, 
  changeNickname({ commit }, payload) {
    commit('changeNickname', payload);
  },
  actionRemoveFollower({ commit }, payload) {
    commit('removeFollower', payload);
  },
  actionRemoveFollowing({ commit }, payload) {
    commit('removeFollowing', payload);
  }
}