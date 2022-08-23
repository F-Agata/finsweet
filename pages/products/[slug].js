import Box from '../../styles/Box'
import ProductHeader from '../../components/routes/products/productSingle/ProductHeader'
import Product2ColorfulTitle from '../../components/routes/products/productSingle/Product2ColorfulTitle'
import ProductInfo from '../../components/routes/products/productSingle/ProductInfo'

const ProductSingle = ({ chosenProduct }) => {
  return (
    <Box>
      <ProductHeader />
      <Product2ColorfulTitle />
      <ProductInfo chosenProduct={chosenProduct} />
    </Box>
  )
}

export default ProductSingle

export async function getStaticPaths() {
  let productInfoItems

  await fetch('http://localhost:4000/data')
    .then((res) => res.json())
    .then((data) => {
      productInfoItems = data
    })
    .catch((err) => console.log(err))

  const paths = []

  productInfoItems.forEach((product) => {
    paths.push({ params: { slug: `${product.id}` } })
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const slug = context.params?.slug

  let productInfoItems

  await fetch('http://localhost:4000/data')
    .then((res) => res.json())
    .then((data) => {
      productInfoItems = data
    })
    .catch((err) => console.log(err))

  const chosenProduct = productInfoItems.find((item) => item.id === slug)

  return {
    props: { chosenProduct: chosenProduct },
  }
}
