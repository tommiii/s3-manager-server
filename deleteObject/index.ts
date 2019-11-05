import { APIGatewayEvent } from "aws-lambda";
import AWS = require("aws-sdk");
const error = require('debug')('lamba:getUploadPresignedUrl');
import { Response } from "../libs";
const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.deleteObject = async (event: APIGatewayEvent): Promise<any> => {

  if (!event.pathParameters || !event.pathParameters.objectKey || !Bucket) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }
  try {
    const { objectKey: Key } = event.pathParameters;
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const params: AWS.S3.Types.DeleteObjectRequest = { Bucket, Key };
    const response = await s3.deleteObject(params).promise();
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
