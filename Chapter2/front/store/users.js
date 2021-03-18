export const state = () => ({
  me: null, // null 로그인 안한상태
  followerList: ['제로초', '네로', '히어로'],
  followingList: ['제로초', '네로', '히어로'],
});

export const mutations = { // 단순한 동기적인 작업
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  removeFollower(state, payload) {
    // const index = state.followerList.findIndex(v => { v.id === payload.id; console.log(v)});
    state.followerList.splice(payload.id, 1);
  },
  removeFollowing(state, payload) {
    // const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followingList.splice(payload.id, 1);
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