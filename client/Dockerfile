# Fetching the latest node image on apline linux
FROM node:18-alpine as builder

# Declaring env
ENV PATH="./node_modules/.bin:$PATH"

# Setting up the work directory
WORKDIR /movie_app

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# because only static files => need server
# Fetching the latest nginx image
FROM nginx:1.21-alpine

# Copying built assets from builder
COPY --from=builder /movie_app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# -f: Path to the docker file
# -t: Name and tag for the image
# . : Context for the build process

# create a docker image by using the docker build command
# docker build -f Dockerfile.dev -t <name:tag> .

# create a docker container by running 
# docker run -d -it –rm -p [host_port]:[container_port] –name [container_name] [image_id/image_tag]

# -d: Run container in background and print container ID
# -it: Create an interactive container
# -p: Map host port to container port
# –name: Assign a name to the container
# –rm: Automatically remove the container when it exits.