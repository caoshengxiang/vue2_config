/**
 * Created by allen on 17-4-14.
 */

export default {
    mut_lang (st, data) {
        st.lang = data;
    },
    mut_userInfo(st, data) {
       st.userInfo = data
    },
    mut_loginStatus(st, data) {
        st.loginStatus = data
    },
    mut_totalBeans(st, data) {
        st.totalBeans = data;
    },
    mut_totalCurrency(st, data) {
        st.totalCurrency = data
    },
    mut_isWithdrawSuc(st, data) {
        st.isWithdrawSuc = data
    },
    mut_withdrawDetail(st, data) {
        st.withdrawDetail = data
    },
    mut_rechargeDetail(st, data) {
        st.rechargeDetail = data
    },
    mut_rechargeRatio(st, data) {
        st.rechargeRatio = data
    },
    mut_withdrawRatio(st, data) {
        st.withdrawRatio = data
    }
}
