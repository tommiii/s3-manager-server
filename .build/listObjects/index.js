"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = require('debug')('lamba:getObjects');
const AWS = require("aws-sdk");
const libs_1 = require("../libs");
const { S3_BUCKET_NAME: Bucket, REGION: region } = process.env;
exports.listObjects = async (event) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saXN0T2JqZWN0cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25ELCtCQUFnQztBQUNoQyxrQ0FBbUM7QUFFbkMsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFNL0QsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsS0FBc0IsRUFBZ0IsRUFBRTtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQVcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQVc7WUFDckIsTUFBTSxFQUFFLE1BQWdCO1NBQ3pCLENBQUE7UUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEQsT0FBTyxlQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3REO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxPQUFPLGVBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hGO0FBQ0gsQ0FBQyxDQUFDIn0=