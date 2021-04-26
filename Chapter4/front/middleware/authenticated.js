export default function( context ) {
  if(!context.store.state.users.me) { // 로그인 안한 상태이면
    context.redirect('/');
  }

}