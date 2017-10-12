# gh-pages　分支

push 代码后
> `git subtree push --prefix=dist origin gh-pages`


实例：将项目　Doc目录下的_book目录作为gh-pages分支
先将项目push到master分支，git命令，执行下面代码
> `git subtree push --prefix=DOC/_book origin gh-pages`
意思就是把指定的_book目录文件提交到gh-pages分支上，

那这时候，我们看到已经多出了一个gh-pages分支，那么展示地址就是 Github用户名.github.io/创建的仓库名