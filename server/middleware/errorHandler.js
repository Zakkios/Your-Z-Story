const errorHandler = (err, c) => {
    console.error(err.stack);
    return c.json(
        { error: err.message || 'Internal Server Error' },
        err.status || 500
    );
};

export default errorHandler;
