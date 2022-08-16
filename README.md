# personal-website

## Deployment
### Deploy to github pages
./deploy.sh

### Deploy to aws
## check aws s3 bucket
```aws --region us-east-1 --profile evdev3 s3 ls s3://evan-woods-dev```

## sync dist folder
```aws --region us-west-2 --profile evdev3 s3 sync ./dist s3://evan-woods-dev --delete```

## url
http://evan-woods-dev.s3-website-us-east-1.amazonaws.com

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Reusable Components

- BaseCheckbox
- BaseInput
- BaseRadio
- BaseRadioGroup
- BaseSelect
- DefaultVue
- DefaultService
- Auto-Import-Compnents
- VS Code Lint/Prettier Configurations