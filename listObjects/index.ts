import { APIGatewayEvent } from "aws-lambda";
const error = require('debug')('lamba:getObjects');
import AWS = require("aws-sdk");
import { Response } from "../libs";

const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

interface Params {
  Bucket: string;
}

exports.listObjects = async (event: APIGatewayEvent): Promise<any> => {
  try {
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const params: Params = {
      Bucket: Bucket as string,
    }
    const response = await s3.listObjects(params).promise();
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
