import { useParams } from 'react-router-dom'
import ComingSoon from '../components/ComingSoon'

function Category() {
  const { categoryId } = useParams()

  return (
    <ComingSoon
      title="Category"
      description={`Products in category "${categoryId}" will be available soon.`}
    />
  )
}

export default Category
