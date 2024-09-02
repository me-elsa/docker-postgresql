FROM node

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

EXPOSE 5000

# Use nodemon to run the server
CMD ["nodemon", "server.js"]


# FROM node

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD [ "npm", "start" ]