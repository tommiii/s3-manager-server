import { APIGatewayEvent } from "aws-lambda";
const error = require('debug')('lamba:getObjects');
import AWS = require("aws-sdk");
import { Response } from "../libs";

const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.listObjects = async (event: APIGatewayEvent): Promise<any> => {
  if (!Bucket) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }
  try {
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const params: AWS.S3.Types.ListObjectsRequest = {
      Bucket,
    }
    const response = await s3.listObjects(params).promise();
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
