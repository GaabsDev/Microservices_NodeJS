exports.success = (res, msg, data = [],code = 200) => {
    const response = {
        status: 'sucess',
        message: msg,
        code: code,
        data: data
    }

    return res.json(response);
}
exports.error = (res, msg, data = [],code = 200) => {
    const response = {
        status: 'error',
        message: msg,
        code: code,
        data: data
    }

    return res.json(response);
}

