"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = require('debug')('lamba:getObjects');
const AWS = require("aws-sdk");
const libs_1 = require("../libs");
const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;
exports.getObjects = async (event) => {
    try {
        const s3 = new AWS.S3({ signatureVersion: "v4", region });
        const params = {
            Bucket: Bucket,
        };
        const response = await s3.listObjects(params).promise();
        return libs_1.Response({ statusCode: 200, body: response });
    }
    catch (err) {
        error(err);
        return libs_1.Response({ statusCode: 500, body: { message: "InternalServerError" } });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZXRPYmplY3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbkQsK0JBQWdDO0FBQ2hDLGtDQUFtQztBQUVuQyxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQU0vRCxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxLQUFzQixFQUFnQixFQUFFO0lBQ2xFLElBQUk7UUFDRixNQUFNLEVBQUUsR0FBVyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRSxNQUFNLE1BQU0sR0FBWTtZQUNwQixNQUFNLEVBQUUsTUFBZ0I7U0FDM0IsQ0FBQTtRQUNELE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4RCxPQUFPLGVBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDdEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLE9BQU8sZUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEY7QUFDSCxDQUFDLENBQUMifQ==