# PM2 常驻进程

pm2 是一个基于 nodejs 的在服务端可以管理常驻任务的程序，它不仅可以管理 nodejs 的程序，还可以管理其他语言的程序，比如
python、php、ruby 等等。  
pm2 的功能非常强大，可以实现自动重启、负载均衡、日志管理、进程守护等等功能，并且相比传统的 nohup、supervisor 等工具，pm2
可以一行命令唤起类 UI 的管理界面，非常简单方便。

## 实际应用

Fiapp 的后端服务虽然使用了 .net、python 等多种语言和 runtime，但也可以通过 pm2 来进行管理，并且在 Fiapp 的实践中，pm2
已经稳定工作了数年，且使用 `pm2 save` 就可以直接保存当前的进程列表，下次重启后自动恢复，非常方便。

## 安装 pm2

我们服务器的系统基于最新版 debian，我们不用担心软件源落后，并且 pm2 基于 nodejs，所以我们只先使用一行命令安装 nodejs，然后再使用
npm 安装 pm2，具体步骤如下：

```bash
# 安装 nodejs
apt install nodejs

# 检查 nodejs 版本，输出类似于 v18.x
node --version

# 安装 npm
apt install npm

# 检查 npm 版本，输出类似于 9.x
npm --version

# 安装 pm2
npm install pm2@latest -g
```

这时候我们的 pm2 就准备就绪了。  
现在我们需要使用 pm2 来快速管理其他进程和程序。

## 常驻进程

以 python 程序为例，假如在当前目录下存在一个 app.py 的 python 程序，

```bash
pm2 start app.py --interpreter=python3 --name myApp
```

这样就可以启动一个名为 myApp 的 python 程序，并且 pm2 会自动监控该程序的运行状态。  
请注意，interpreter 参数可以替换为任何其他 runtime，例如 `dotnet` 等，这样你就可以常驻任何想要的程序。  
当然你也可以加入 `--watch` 参数来监控文件的变化，这样当文件发生变化时，pm2 会自动重启该程序，不过这个参数有点危险，有可能导致无限死循环内存爆炸。

## 检验常驻进程

你可以通过使用 `pm2 ls` 来查看现有的所有常驻进程。  
当然也可以使用 `pm2 logs [id]`，把 [id] 替换为常驻进程的 id，例如 `pm2 logs 1` 来查看该进程的日志。  
同时你可以使用 `pm2 restart [id]` 来重启该进程，使用 `pm2 stop [id]` 来停止该进程。

## 保存当前的进程信息

当你使用 `pm2 start` 启动了多个常驻进程后，你可以使用 `pm2 save` 来保存当前的进程信息，这样下次重启后，pm2 就会自动恢复这些进程。