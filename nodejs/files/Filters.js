function byParams(params) {
    if (params) {
        if (params.status) {
            return [{'$match': {'statusCode': 1}}]
        }
        if (params.priority) {
            return [{'$match': {'priorityCode': 3}}]
        }
        if (params.location) { 
            return [{'$match': {'locationCode': params.location}}]
        }
    }
}
function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}
export { byParams, byId }