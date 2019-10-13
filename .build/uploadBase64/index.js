"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const error = require('debug')('lamba:uploadBase64');
const libs_1 = require("../libs");
const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;
exports.uploadBase64 = async (event) => {
    if (!event.body) {
        return libs_1.Response({ statusCode: 400, body: { message: "BadRequest" } });
    }
    try {
        const { base64, key } = JSON.parse(event.body);
        const s3 = new AWS.S3({ signatureVersion: "v4", region });
        const buffer = new Buffer(base64, "base64");
        const obj = {
            Body: buffer,
            Bucket: Bucket,
            ContentEncoding: "base64",
            Key: key,
        };
        const response = await s3.putObject(obj).promise();
        return libs_1.Response({ statusCode: 200, body: response });
    }
    catch (err) {
        error(err);
        return libs_1.Response({ statusCode: 500, body: { message: "InternalServerError" } });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91cGxvYWRCYXNlNjQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBZ0M7QUFDaEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDckQsa0NBQW1DO0FBV25DLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBRS9ELE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLEtBQXNCLEVBQWdCLEVBQUU7SUFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFBRSxPQUFPLGVBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztLQUFFO0lBRTNGLElBQUk7UUFDRixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE1BQU0sRUFBRSxHQUFXLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1QyxNQUFNLEdBQUcsR0FBVztZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxNQUFnQjtZQUN4QixlQUFlLEVBQUUsUUFBUTtZQUN6QixHQUFHLEVBQUUsR0FBRztTQUNULENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkQsT0FBTyxlQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3REO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFPLGVBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hGO0FBQ0gsQ0FBQyxDQUFDIn0=