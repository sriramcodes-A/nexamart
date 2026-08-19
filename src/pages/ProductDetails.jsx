import { useParams } from 'react-router-dom'
import ComingSoon from '../components/ComingSoon'

function ProductDetails() {
  const { productId } = useParams()

  return (
    <ComingSoon
      title="Product Details"
      description={`Product #${productId} details will be available soon.`}
    />
  )
}

export default ProductDetails
