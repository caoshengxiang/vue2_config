/**
 * Created by allen on 17-4-14.
 */

export default {
  a_test ({commit}, param) {
    // ajax
    console.log('dispatch', param)
    commit('mut_Test', 'action')
  }
}
