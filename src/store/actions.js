/**
 * Created by allen on 17-4-14.
 */
import { Base64 } from 'js-base64'
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
        }).then((d)=>{
            commit('mut_userInfo', d)
            commit('mut_loginStatus', false)
            if (d.data.status === 'SUCCESS') {
                sessionStorage.u = Base64.encode(JSON.stringify(d.data.data))
                localStorage.u = Base64.encode(JSON.stringify(d.data.data))
                commit('mut_loginStatus', true)
            } else if (d.data.status === 'FAIL') {
                commit('mut_loginStatus', true) // todo false

                let dt = {status:"SUCCESS",data:{"authToken":"ba01ac32-b899-483e-80c9-7ee414852f8d","userId":42,"nickname":"18328718417","phoneNum":"18328718417","name":null,"idNum":null,"icon":null,"age":0,"gender":"MALE","birthday":"2017-08-18","signature":null,"soulCurrency":0,"soulBean":0,"commission":null,"createTime":"2017-08-18 15:19","status":"ACTIVE","anchorStatus":"NONE","like":null,"idAuthStatus":"NONE","idPic1":null,"idPic2":null,"idPic3":null}}

                console.log(dt.data)
                sessionStorage.u = Base64.encode(JSON.stringify(dt.data))
                localStorage.u = Base64.encode(JSON.stringify(dt.data))
            }

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
        $axios.get('/api/consume/total/'+param.userId,{
            headers: {
                'authToken': param.authToken
            }
        }).then((res)=>{
            return res.data
        }).then((d)=>{
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
        }).then(res=>{
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
        }).then(res=>{
            return res.data
        }).then((d)=>{
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
        }).then(res=>{
            return res.data
        }).then((d)=>{
            commit('mut_rechargeDetail', d.data)
        })
    }
}
