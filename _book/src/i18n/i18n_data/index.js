/**
 * Created by allen on 17-4-18.
 */
import $ from 'jquery'
import md from './module/md1'
const data = {
  en: {
    allen: {
      say: 'hello world',
    }
  },
  cn: {
    allen: {
      say: '你好世界',
    }
  },
  ja: {
    allen: {
      say: 'こんにちは、世界'
    }
  }
}
const mergeData = $.extend(true, {}, data, md)

export default mergeData
