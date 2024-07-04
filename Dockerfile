FROM node:14

#wd
WORKDIR /app

# Copy .json files
COPY package*.json ./

# dependencies
RUN npm install

# copying all files
COPY . .

# react build
RUN npm run build

# port on
EXPOSE 5000

# run on
CMD ["npm", "start"]
