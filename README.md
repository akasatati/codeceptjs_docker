# codeceptjs_docker
codeceptjsをdockerで動かす

## SetUp
```
cp .env.example .env
cp conf/environments.example.js conf/environments.js

docker-compose build

# Sample Command
time docker-compose run --rm codeceptjs codeceptjs run --grep '(?=.*@yahoo)' --steps --verbose
```