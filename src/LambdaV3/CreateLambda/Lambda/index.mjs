export const handler = (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from JavaScript'),
  };
  console.log(response);
  return response;
};
