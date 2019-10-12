import { APIGatewayEvent } from "aws-lambda";
import AWS = require("aws-sdk");
import { Response } from "../libs";


const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.getUploadPresignedUrl = async (event: APIGatewayEvent): Promise<any> => {
  if (!event.body) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }

  try {
    const { key: Key } = JSON.parse(event.body);
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const params = {Bucket, Key};
    const response = await s3.getSignedUrl('putObject', params);
    return Response({ statusCode: 200, body: response });
  } catch (err) {
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
