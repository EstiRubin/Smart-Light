// <<<<<<< HEAD
// export default function buildPipeline(id) {
// =======
// export default function buildPipeline() {
// >>>>>>> ac625ac90f4f11b2e7a6a68fa41b78a422f0b0aa
//     const pipeline = [
//         {
//             '$lookup': {
//                 'from': "status",
//                 'localField': "statusCode",
//                 'foreignField': "_id",
//                 'as': "statusInfo"
//             }
//         }, {
//             '$lookup': {
//                 'from': 'location',
//                 'localField': 'locationCode',
//                 'foreignField': '_id',
//                 'as': 'locationInfo'
//             }
//         }, {
//             '$lookup': {
//                 'from': 'priority',
//                 'localField': 'priorityCode',
//                 'foreignField': '_id',
//                 'as': 'priorityInfo'
//             }
//         }, {
//             '$unwind': {
//                 'path': '$statusInfo',
//             }
//         }, {
//             '$unwind': {
//                 'path': '$locationInfo',
//             }
//         }, {
//             '$unwind': {
//                 'path': '$priorityInfo'
//             }
//         }, {
//             '$addFields': {
// <<<<<<< HEAD
//                 // 'location':'$locationInfo.city',
// =======
// >>>>>>> ac625ac90f4f11b2e7a6a68fa41b78a422f0b0aa
//                 'priority': '$priorityInfo.name',
//                 'status': '$statusInfo.type'
//             }
//         }, {
//             '$project': {
// <<<<<<< HEAD
//                 '_id': 0,
//                 'statusInfo': 0,
//                 'statusCode': 0,
//                 'locationCode': 0,
//                 'priorityCode': 0,
//                 'priorityInfo': 0,
//                 'locationInfo._id':0
//             }
//         }
//     ]
//     if (id != null) {
//         for (let i of id) {
//             pipeline.splice(pipeline.length - 1, 0, i);
//         }
//     }
// =======
//                 'statusCode': 0,
//                 'locationCode':0,
//                 'priorityCode': 0 
//             }
//         }
//     ]
//     // for (let i of smallPipe) {
//     //     pipeline.splice(pipeline.length - 1, 0, i);
//     // }

// >>>>>>> ac625ac90f4f11b2e7a6a68fa41b78a422f0b0aa
//     return pipeline;
// }