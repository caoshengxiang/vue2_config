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

              /*  {"status":"SUCCESS",
                    "data":{
                    "authToken":"171ac1e2-8a00-4b0c-9727-2ef0cccccc51",
                        "userId":35,"nickname":"水中的彷徨",
                        "phoneNum":"17358684442","name":"水中的彷徨",
                        "idNum":null,
                        "icon":"http://47.95.6.138:8080/moralvoice-img/user/e75c3948-5253-4e29-beca-9f1b7008d16d.png",
                        "age":0,"gender":"MALE","birthday":"2017-07-24","signature":"你就是最好的,没有唯一",
                        "soulCurrency":999999999,"soulBean":0,"commission":null,
                        "createTime":"2017-07-24 22:00","status":"ACTIVE","anchorStatus":"NONE",
                        "like":null,"idAuthStatus":"NONE","idPic1":null,
                        "idPic2":null,"idPic3":null}}
                */

                commit('mut_loginStatus', d.errMsg)
            }
        })

    },
    ac_verifyLogin({commit}, param) { // 三方登陆后获取用户信息
        $axios({
            method: 'get',
            url: '/api/user/verifyLogin',
            headers: {
                'authToken': param.authToken,
                // "Content-Type": "application/json"
            }
        }).then(res => {
            return res.data
        }).then((d) => {
            console.log('三方登录用户信息',+ JSON.stringify(d))
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
        alert(JSON.stringify(param)) // TODO
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
            alert(JSON.stringify(res)) // TODO
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
