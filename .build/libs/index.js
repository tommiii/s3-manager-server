"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFhQSxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBbUIsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztJQUN4QyxNQUFNLFFBQVEsR0FBYTtRQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsVUFBVTtLQUNYLENBQUM7SUFDRixJQUFJLElBQUksRUFBRTtRQUNSLFFBQVEsQ0FBQyxPQUFPLEdBQUc7WUFDakIsNkJBQTZCLEVBQUUsR0FBRztZQUNsQyx3QkFBd0IsRUFBRSxHQUFHO1NBQzlCLENBQUM7S0FDSDtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9