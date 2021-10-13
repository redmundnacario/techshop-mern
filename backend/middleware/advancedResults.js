const advancedResults = (model, populate) => async (req, res, next) => {
    let query;

    //Copy req.query
    const reqQuery = { ...req.query };

    // fields to exclude in matching
    const removeFields = ["select", "sort", "page", "limit"];
    removeFields.forEach((param) => delete reqQuery[param]);

    // stringify object
    let queryStr = JSON.stringify(reqQuery);

    // MATCHING: create operators i.e gt -> $gt
    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
    );
    // Finding resource
    query = model.find(JSON.parse(queryStr));

    // filter the fields if "select" is in the query params
    if (req.query.select) {
        const fields = req.query.select.split(",").join(" ");
        query = query.select(fields);
    }

    // Sort items
    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
    } else {
        query = query.sort("-createdAt");
    }

    // pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 16;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments();

    query = query.skip(startIndex).limit(limit);

    if (populate) {
        query = query.populate(populate);
    }
    // Executing resource
    const bootcamps = await query;

    //Pagination results
    const pagination = {};

    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit,
        };
    }

    res.advancedResults = {
        success: true,
        pagination,
        count: bootcamps.length,
        data: bootcamps,
    };
    next();
};

export default advancedResults;
