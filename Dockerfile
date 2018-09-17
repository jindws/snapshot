 FROM node:10.9.0

 ADD . /src
 #RUN cd /src;npm i yarn -g;yarn

 RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
 RUN cd /src;cnpm i;npm run webpack;

 # 容器对外暴露的端口号
 EXPOSE 3000

 CMD ["node","src/index.js"]
