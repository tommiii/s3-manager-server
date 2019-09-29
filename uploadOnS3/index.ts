import { APIGatewayEvent } from "aws-lambda";
import AWS = require("aws-sdk");
import { Response } from "../libs";

interface S3Object {
  Bucket: string;
  Key: string;
  Body: Buffer;
  ContentType?: string;
  ContentEncoding?: string;
  ACL?: string;
}

const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;

exports.uploadOnS3 = async (event: APIGatewayEvent): Promise<any> => {
  if (!event.body) { return Response({ statusCode: 400, body: { message: "BadRequest" } }); }
  try {
    const { base64, key } = JSON.parse(event.body);
    const s3: AWS.S3 = new AWS.S3({ signatureVersion: "v4", region });
    const buffer = new Buffer(base64, "base64");
    const obj: S3Object = {
      Body: buffer,
      Bucket: Bucket as string,
      ContentEncoding: "base64",
      Key: key,
    };
    await s3.putObject(obj).promise();
  } catch (err) {
    return Response({ statusCode: 500, body: { message: "InternalServerError" } });
  }
};
