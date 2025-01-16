const [product, setProduct] = useState(null);

const API_URL_PRODUCT = `http://localhost:3000/api/product`; 
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    axios.get(API_URL_PRODUCT)
        .then((response) => {
            setProduct(response.data);
            console.log(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
}, [id]);

export const productReducer = (state = product, action) => {
    switch (action.type) {
        case ("ADDQTY"):
            const add_state = [...state]
            action.payload.unitsInStock += 1;
            action.payload.cartQTY -= 1;

            return add_state;
        case ("DECREASEQTY"):
            const dec_state = [...state]
            if (action.payload.unitsInStock > 0) {
                action.payload.unitsInStock -= 1;
                action.payload.cartQTY += 1
            }
            return dec_state;
        case ("ADDALLQTY"):
            const dec_state1 = [...state]
            action.payload.unitsInStock += action.howMany;
            action.payload.cartQTY = 0;
            return dec_state1;
    }
    return state;
}