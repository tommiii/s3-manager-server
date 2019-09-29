interface Response {
  statusCode: number;
  body: string | Blob | ArrayBuffer;
  headers?: any;
  cors?: boolean;
}

export const Response = (args: Response) => {
  const { statusCode, body, cors } = args;
  const response: Response = {
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
