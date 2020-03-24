exports.OK = (values, res) => {
    let response = {
        code: 200,
        status: 'ok',
        data: values
    }
    res.json(response)
        .end()
}

exports.INTERNAL_SERVER_ERROR = (res) => {
    let response = {
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
    }
    res.json(response)
        .end()
}

exports.BAD_REQUEST = (values, res) => {
    let response = {
        code: 400,
        status: 'BAD_REQUEST',
    }
    res.json(response)
        .end()
}