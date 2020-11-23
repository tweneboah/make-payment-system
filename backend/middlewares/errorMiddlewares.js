const errorMiddlewareHandler = (err, res, req, next) => {
  //set status code
  const errorStatusCode = res.statusCode === 200 ? 500 : res.status.statusCode;
  //set
  res.status(errorStatusCode);
  //send
  res.json({
    message: err.message,
  });
};

export { errorMiddlewareHandler };
