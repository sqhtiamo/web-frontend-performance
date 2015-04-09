onmessage = function (evt){
  var d = evt.data;//通过evt.data获得发送来的数据
  postMessage( d );//将获取到的数据发送会主线程
}