import { APIGatewayEvent } from "aws-lambda";
import AWS = require("aws-sdk");
const error = require('debug')('lamba:uploadBase64');
import { Response } from "../libs";

const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.uploadBase64 = async (event: APIGatewayEvent): Promise<any> => {
  if (!event.body || !Bucket) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }

  try {
    const { base64, key } = JSON.parse(event.body);
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const buffer = new Buffer(base64, "base64");
    const params: AWS.S3.Types.PutObjectRequest = {
      Body: buffer,
      Bucket,
      ContentEncoding: "base64",
      Key: key,
    };
    const response = await s3.putObject(params).promise();
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
