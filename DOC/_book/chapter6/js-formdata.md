# js 文件上传FormData对象

```html
<input type="file" @change="importFile($event)">
```

```js
importFile (e) {
    let files = e.target.files || e.dataTransfer.files
//         实例化一个表单数据对象
    let formData = new FormData()
    formData.append('filename', files[0].name)
    formData.append('xls', files[0])

    var request = new XMLHttpRequest();
    request.open("POST", "");
    request.send(formData);
}

```

建一个FormData对象，然后通过调用它的append()方法添加字段

```
$.ajax({
  url: "",
  type: "POST",
  data: formData,
  processData: false,  // 不处理数据
  contentType: false   // 不设置内容类型
});
```