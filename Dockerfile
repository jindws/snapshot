 FROM node:10.10.0

 ADD . /
 #RUN cd /src;npm i yarn -g;yarn;yarn build

 RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
 RUN cd /;cnpm i;cnpm run build


 # 容器对外暴露的端口号
 EXPOSE 3000

 CMD ["node","/dist"]
