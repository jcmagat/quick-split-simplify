import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello, World! I'm Juan!"),
  };
  return response;
};
