def createSuccessResponse(data):
    return {
        'data': data,
        'status': 1,
    }


def createErrResponse(errMessage):
    return {
        'message': errMessage,
        'status': 0
    }
