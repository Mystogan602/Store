const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        res.status(res.statusCode).json({ message: error.message });
    });
};


export default asyncHandler;


