# preactapp

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).



## Docker stuff
change dockerfile paths to match project name

## create an image
docker build -t preact-node-image .
## running an Image
docker run -it -p  3080:3080 --name preact-node-ui preact-node-image