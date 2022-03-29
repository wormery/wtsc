#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# git pull
# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
git pull git@github.com:wormery/wtsc.git docs-pages

# 生成静态文件
npm run docs:build

git a -A

git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
# git push -f git@github.com:wangxifa/qinFeng.git master:gh-pages
git push git@github.com:wormery/wtsc.git docs-pages

cd ../
# rm -rf dist 