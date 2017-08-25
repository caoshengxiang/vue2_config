/**
 * Created by allen on 17-4-14.
 */
import {Base64} from 'js-base64'
import pingpp from 'pingpp-js'

export default {
    ac_user_login({commit}, param) {
        /*$axios.post('/api/user/login', {

        }).then((res)=>{
            return res.data
        }).then((d)=>{
            commit('mut_userInfo', d)
        })*/
        $axios({
            url: '/api/user/login',
            method: 'post',
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify(param)
        }).then((res) => {
            commit('mut_userInfo', res)
            commit('mut_loginStatus', 'FAIL')
            return res.data
        }).then((d)=>{
            if (d.status === 'SUCCESS') {
                sessionStorage.u = Base64.encode(JSON.stringify(d.data))
                // localStorage.u = Base64.encode(JSON.stringify(d.data))
                commit('mut_loginStatus', 'SUCCESS')
            } else if (d.status === "FAIL") {
                commit('mut_loginStatus', d.errMsg)
            }
        })

    },
    ac_verifyLogin({commit}, param) { // 三方登陆后获取用户信息
        alert(JSON.stringify(param)) // TODO
        $axios({
            method: 'get',
            url: '/api/user/verifyLogin',
            headers: {
                'authToken': param.authToken,
                // "Content-Type": "application/json"
            }
        }).then(res => {
            alert('aixos') // TODO
            return res.data
        }).then((d) => {
            console.log('三方登录用户信息',+ d)
            sessionStorage.u = Base64.encode(JSON.stringify(d.data))
            // localStorage.u = Base64.encode(JSON.stringify(d.data))
            commit('mut_loginStatus', 'SUCCESS')
        })
    },
    ac_send_sms({commit}, param) { // 验证码
        $axios.get('/api/user/sendSms', {
            params: {
                phone: param.phone
            }
        })
        /*$axios({
            url: '/api/user/sendSms',
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                'Accept': '*!/!*'
            },
            params: {
                phone: param.phone
            },
        })*/
    },
    ac_consume_total({commit}, param) { // 魂豆币
        $axios.get('/api/consume/total/' + param.userId, {
            headers: {
                'authToken': param.authToken
            }
        }).then((res) => {
            return res.data
        }).then((d) => {
            commit('mut_totalBeans', d.data.receiveSoulBean)
            commit('mut_totalCurrency', d.data.rewardSoulCurrency)
        })
    },
    ac_apply_withdraw({commit}, param) { // 提现
        commit('mut_isWithdrawSuc', false)
        $axios({
            method: 'post',
            url: '/api/consume/applyWithdraw',
            headers: {
                'authToken': param.authToken,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(param.data)
        }).then(res => {
            if (res.status === 200) {
                commit('mut_isWithdrawSuc', true)
            } else {
                commit('mut_isWithdrawSuc', false)
            }
        })
    },
    ac_list_withdraw({commit}, param) {
        $axios({
            method: 'get',
            url: '/api/consume/list/withdraw',
            headers: {
                'authToken': param.authToken,
                // "Content-Type": "application/json"
            },
            params: param.data
        }).then(res => {
            return res.data
        }).then((d) => {
            commit('mut_withdrawDetail', d.data)
        })
    },
    ac_list_reword({commit}, param) {
        $axios({
            method: 'get',
            url: '/api/consume/list/recharge',
            headers: {
                'authToken': param.authToken,
                // "Content-Type": "application/json"
            },
            params: param.data
        }).then(res => {
            return res.data
        }).then((d) => {
            commit('mut_rechargeDetail', d.data)
        })
    },
    ac_recharge({commit}, param) {
        $axios({
            method: 'post',
            url: '/api/consume/applyRecharge',
            headers: {
                'authToken': param.authToken,
                // "Content-Type": "application/json"
            },
            data: param.rechargeParam
        }).then((res) => {
            let charge = {}

            pingpp.createPayment(charge, function (result, err) {
                console.log(result);
                console.log(err.msg);
                console.log(err.extra);
                if (result === "success") {
                    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                } else if (result === "fail") {
                    // charge 不正确或者微信公众账号支付失败时会在此处返回
                } else if (result === "cancel") {
                    // 微信公众账号支付取消支付
                }
            });
        })
    }
}
