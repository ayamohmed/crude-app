import {useParams} from "react-router-dom"
function ProductDetails(){
    const [product ,setProducts]=useState({})
    let{productID} = useParams();

     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productID}`)
        .then((res)=> res.json())
        .then((product)=>{
            console.log(product);
        })

     },[])
        return(
            <>
            <h1>
              ProductDetails # {productID}
            </h1>
            </>
        )
}
export default ProductDetails;