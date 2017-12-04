<!--
表格组件
// todo 定制单元格
// todo
1.　

-->

<template>
  <div class="com-table">
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>列车车号</th>
        <th>弓网检测设备号</th>
        <th>受电弓型号</th>
        <th>受电弓主要参数</th>
        <th>受电弓滑板初试厚度</th>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 4">
        <td data-label="编号">001</td>
        <td data-label="列车车号">100</td>
        <td data-label="弓网检测设备号">000111</td>
        <td data-label="受电弓型号">000111fd</td>
        <td data-label="受电弓主要参数">000111fd</td>
        <td data-label="受电弓滑板初试厚度">100mm</td>
        <td data-label="操作">
          <button class="com-btn-edit">修改</button>
          <button class="com-btn-del">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: '',
    props: {
      tableBody: {
        type: Array,
        default () {
          return []
        }
      },
      tableHead: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    computed: {

    },
    methods: {},
    components: {},
    beforeCreate () {
    },
    created () {
    },
    beforeMount () {
    },
    mounted () {
    },
    beforeUpdate () {
    },
    updated () {
    },
    beforeDestroy () {
    },
    destroyed () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  /*小屏幕宽度*/
  $client-w: 900px;

  /*表格*/
  .com-table {
    width: 100%;
    table {
      width: 100%;
      font-size: 13px;
      thead {
        text-align: left;
        tr {
          //border-bottom: 1px solid #ccc;
          background-color: #EFEFEF;
        }
        th {
          padding: 10px 0;
          &:first-child {
            padding-left: 10px;
          }
          &.center {
            text-align: center;
          }
        }
      }
      tbody {
        tr {
          &:nth-of-type(2n) {
            background-color: #EFEFEF;
          }
        }
        td {
          padding: 10px 0;
          &:first-child {
            padding-left: 10px;
          }
          &.center {
            text-align: center;
          }
        }
      }
    }
    @media screen and (max-width: $client-w) {
      table {

        thead {
          display: none;
        }
        tbody {
          tr {
            display: block;
            margin-bottom: 16px;
            border-bottom: 2px solid #ddd;
          }
          td {
            display: block;
            text-align: right;
            font-size: 13px;
            border-bottom: 1px dotted #ccc;
            padding-left: 10px;
            padding-right: 10px;
            &:last-child {
              border-bottom: 0;
            }
            &:before {
              content: attr(data-label);
              float: left;
              text-transform: uppercase;
              font-weight: bold;
            }
            &.center {
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
