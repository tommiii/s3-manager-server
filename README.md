## Available Scripts

In the project directory, you can run:

### `npm run start.local`

Runs the app in the development mode [http://localhost:3000](http://localhost:4000) 

### `serverless deploy`

Deploy on aws 

## Do not forget

### Set your aws variables

Copy and paste the following variable in the same console where you run the app

`export AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY`

`export AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS`

`export AWS_DEFAULT_REGION=YOUR_AWS_DEFAULT_REGION`

### Set your aws s3 bucket

Set your aws s3 bucket into the file `uploadOnS3/serveless.functions.yml`::`environment`

### Try it out with s3-manager-client
There's also available a simple client (react + typescritp) that provide you a user interface in order to upload a file.
Do not forget to set the `API_URL` into the `.env` file


## API

### PUT upload-on-s3

Upload a file on the selected s3 bucket. Body: `base64` and `key` where:
`base64`: your file converted in base64
`key`: s3 key
