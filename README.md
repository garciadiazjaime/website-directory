# Restaurants Places Directory

[![Build Status](https://travis-ci.org/garciadiazjaime/website-directory.svg)](https://travis-ci.org/garciadiazjaime/website-directory)

## Run project:
a) Install Dependencies

`yarn`

b) Start Server

`yarn dev`

By default server will run on http://localhost:3000


## Docker commands
docker build -t garciadiazjaime/website-directory .
docker run -d -p 49193:3000 -e 'API_URL=http://api.playami.com/' --name directory garciadiazjaime/website-directory
docker push garciadiazjaime/website-directory

NODE_ENV=production API_URL=http://api.playami.com/ npm start

## upload to google cloud bucket

```
gsutil mb gs://www.playami.mx/
gsutil -m rm -r gs://www.playami.com/*
gsutil -m cp -r ./out/. gs://www.playami.com/
gsutil iam ch allUsers:objectViewer gs://www.playami.com/
gsutil web get gs://www.playami.com
```
