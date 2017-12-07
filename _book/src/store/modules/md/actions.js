/**
 * Created by allen on 17-4-14.
 */

export default {
  test ({commit}, param) {
    // ajax
    console.log('dispatch', param)
    commit('mut_Test', 'action')
    commit('mut_Test','由md模块提交', {root: true})
  }
}
