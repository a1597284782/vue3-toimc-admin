import { receiveCode } from '@/api/page/login'
import { HttpResponse } from '@/api/sys/model/http'
import { reactive, computed } from 'vue'
import _ from 'lodash-es'

export default () => {
  const state = reactive({
    sending: false,
    count: 60
  })

  const leftCount = computed<string>(() => {
    return state.count < 10 ? '0' + state.count : state.count + ''
  })

  const sendCode = () => {
    state.sending = true
    const ctrl = setInterval(() => {
      state.count--
      if (state.count === 0) {
        clearInterval(ctrl)
        state.count = 60
        state.sending = false
      }
    }, 1000)
  }
  const handleSendCode = async (phone = '18782731215') => {
    console.log('handleSendCode', phone)
    sendCode()
    receiveCode({ phone }).then((res: HttpResponse) => {
      console.log('res:', res)

      if (res.code !== 0) {
        ElMessage.error(res.message)
        return
      }
      // ElMessage.success('发送成功')
      ElMessage({
        type: 'success',
        message: '发送成功',
        duration: 1500
      })
      _.delay(
        () => {
          ElNotification({
            title: '验证码',
            message: h(
              'i',
              { style: 'color: teal' },
              `你的验证码为：${res.data.code}, 有效期为5分钟`
            ),
            duration: 0
          })
        },
        2000,
        'later'
      )
    })
  }

  return {
    state,
    sendCode,
    leftCount,
    handleSendCode
  }
}
