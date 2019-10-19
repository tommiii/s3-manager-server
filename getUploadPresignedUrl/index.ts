import { APIGatewayEvent } from "aws-lambda";
import AWS = require("aws-sdk");
const error = require('debug')('lamba:getUploadPresignedUrl');
import { Response } from "../libs";


const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.getUploadPresignedUrl = async (event: APIGatewayEvent): Promise<any> => {
  if (!event.body) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }
  try {
    const { key: Key, type: ContentType } = JSON.parse(event.body);
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const params = { Bucket, Key, ContentType, Expires: 120 };
    const response = await s3.getSignedUrl('putObject', params);
    console.log(response)
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
