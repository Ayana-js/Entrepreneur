# pull the official base image
FROM node:14
# set working direction
USER node
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY main/package.json ./
# COPY Main/package-lock.json ./

# RUN chmod +x /usr/src/app/node_modules/.bin/react-scripts
# RUN npm install --save react react-dom react-scripts
RUN npm install --legacy-peer-deps
RUN chmod +x /app/node_modules/.bin/react-scripts
# RUN chmod a+x /Main/node_modules/.bin/react-scripts
# RUN npm i
# add app
COPY ..
# start app
CMD ["npm", "start"]
