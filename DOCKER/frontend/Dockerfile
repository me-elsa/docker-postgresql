# # Use an official Node.js image as the base image
# FROM node:18-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Use Nginx to serve the static files
# FROM nginx:stable-alpine

# # Copy the build output to the Nginx html directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3006

CMD [ "npm", "start" ]