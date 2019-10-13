"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const error = require('debug')('lamba:getUploadPresignedUrl');
const libs_1 = require("../libs");
const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;
exports.getUploadPresignedUrl = async (event) => {
    if (!event.body) {
        return libs_1.Response({ statusCode: 400, body: { message: "BadRequest" } });
    }
    try {
        const { key: Key } = JSON.parse(event.body);
        const s3 = new AWS.S3({ signatureVersion: "v4", region });
        const params = { Bucket, Key };
        const response = await s3.getSignedUrl('putObject', params);
        return libs_1.Response({ statusCode: 200, body: response });
    }
    catch (err) {
        error(err);
        return libs_1.Response({ statusCode: 500, body: { message: "InternalServerError" } });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZXRVcGxvYWRQcmVzaWduZWRVcmwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBZ0M7QUFDaEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDOUQsa0NBQW1DO0FBR25DLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBRS9ELE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsS0FBc0IsRUFBZ0IsRUFBRTtJQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUFFLE9BQU8sZUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQUU7SUFFM0YsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxFQUFFLEdBQVcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7UUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLGVBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDdEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLE9BQU8sZUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEY7QUFDSCxDQUFDLENBQUMifQ==