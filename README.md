# cbt-ng-css

This project is generated with [yo angular generator]

## Build & development

Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the unit tests with karma.


# deploy for nodejs
mkdir -p /home/jincm/zuohaoshi/develop/
scp node-v4.4.4-linux-x64.tar root@172.17.0.9:/home/jincm/zuohaoshi/develop/
cat /root/.profile :export PATH=/home/jincm/zuohaoshi/develop/node-v4.4.4-linux-x64/bin:$PATH

#install some additional package
cd /home/jincm/zuohaoshi/client
bower install --allow-root 

#update ubuntu
apt-get update && apt-get install -y git

#update npm
npm install -g npm
vi ~/.npmrc
registry = https://registry.npm.taobao.org
npm install -g gulp bower yo  #generator-angular
npm install gulp yo
chmod g+rwx /root /root/.config /root/.config/configstore (otherwise:yo will error:permission denied, open '/root/.config/configstore/insight-yo.json')
chmod g+rwx -R /home/jincm/zuohaoshi/client/app     (otherwise:permission denied, open '/home/jincm/zuohaoshi/client/app/scripts/app.js)


#for docker
docker run --name=ubuntu_client -p 9000:9000 -p 35729:35729 -it ubuntu_client /bin/bash
source /root/.profile

#copy file to docker:beyond compare
/var/lib/docker/aufs/mnt/9b3536e8cfd6401cd0f3ac6a4a7742774ea0ad321db3005cf0d33367698e851e/home/jincm/zuohaoshi

#docker中安装bower组件
bower search ngDialog --allow-root
#对话框组件（不用bootstrap插件？）
bower install ng-dialog --allow-root（https://github.com/likeastore/ngDialog）

#参考的bootstrap和angularjs
http://v3.bootcss.com/components/#dropdowns
http://www.runoob.com/angularjs/angularjs-forms.html

#add new module
pushd /home/jincm/zuohaoshi/client
yo angular:route new_module

#编译运行
pushd /home/jincm/zuohaoshi/client
gulp build
gulp serve
