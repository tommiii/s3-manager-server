"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = (args) => {
    const { statusCode, body, cors } = args;
    const response = {
        body: JSON.stringify(body),
        statusCode,
    };
    if (cors) {
        response.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Max-Age": 600,
        };
    }
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT2EsUUFBQSxRQUFRLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRTtJQUN6QyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDeEMsTUFBTSxRQUFRLEdBQWE7UUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLFVBQVU7S0FDWCxDQUFDO0lBQ0YsSUFBSSxJQUFJLEVBQUU7UUFDUixRQUFRLENBQUMsT0FBTyxHQUFHO1lBQ2pCLDZCQUE2QixFQUFFLEdBQUc7WUFDbEMsd0JBQXdCLEVBQUUsR0FBRztTQUM5QixDQUFDO0tBQ0g7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUMifQ==