
export default function buildPipeline() {
    const pipeline = [
     {
        $lookup: {
            from: 'products', // השם של הקולקציה השנייה
            let: { combinedProductsArray: "$combinedProducts" }, // מקשרים את שדה combinedProducts מהמוצר
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ["$_id", "$$combinedProductsArray"] // בודקים אם _id מהמוצרים נמצא במערך combinedProducts
                        }
                    }
                }
            ],
            as: 'productDetails' // השם שבו נשמור את המוצרים שהתאמנו
        }
    }
    ]

    return pipeline;
}