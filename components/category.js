import React from 'react'
import Link from 'next/link'

const Category  = ({ category }) => (
  <li className="category">
    <Link href={`/${category.slug}`}>
      <a>{category.title}</a>
    </Link>
    <style jsx global>{`
      .category {
        display: block;
        padding: 10px;
        background: #EEE;
      }

      .category a {
        color: #000;
      }
    `}
    </style>
  </li>
)

export default Category
