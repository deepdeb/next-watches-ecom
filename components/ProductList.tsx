import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    const products = ["", "", ""]
  return (
    <div id="product">
        <div>
            {products.map((product, index) => (
                <Link href="/product/123" key={index}>
                    <Image src="/dummy-img.jpg" alt='img' width={1000} height={1000}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductList