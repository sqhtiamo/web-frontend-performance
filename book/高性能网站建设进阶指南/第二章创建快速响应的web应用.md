# 第二章 创建快速响应的web应用

Web应用和传统桌面应用有一个共同目标：尽可能快的响应用户输入。我们必须确保响应这些输入的js能快速的执行。<br>
浏览器使用单线程处理队列中的事件和执行用户代码。（web workers除外）

## 2.1 怎样才算足够的快
Jakob Nielsen：<br>
<b>0.1秒：</b>用户直接操作UI中对象的感觉极限。<br>
<b>1秒：</b>用户随意地在计算机指令空间进行操作而无需过度等待的感觉极限。（超过1秒要提示用户计算机正在解决这个问题）<br>
<b>10秒：</b>用户专注于任务的极限。（超过10秒的任何操作都需要有一个百分比完成指示器）

## 2.2 测量延迟时间
手动代码检测（记录）和自动代码检测（性能分析）<br>
手动代码检测：打log <br>
自动代码检测：工具 <br>
firebug包含的js代码性能分析器

## 2.3 线程处理
多线程将不会很快在JS上实现。

## 2.4 确保响应所读
Google浏览器插件Gears实现WorkerPool API。允许浏览器主JS线程创建后台“Worker”，接收浏览器线程的一些简单信息。<br>
### 2.4.1 Web Workers
<b>主线程：</b><br>
`var w = new Worker("worker.js");
w.postmessage(m);
w.onMessage = function(e) {
	...
}
w.terminate()`
<b>Worker:</b><br>
`onmessage = function(e) {
	postMessage()
}`
### 2.4.1 Gears