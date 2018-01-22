import React from 'react'
import Link from 'next/link'

const Category  = ({ category }) => (
  <div className="category">
    <Link href={`/${category.slug}`}>
      <a>
        {
          category.image ? <img src={category.image} alt={category.title} /> : null
        }
        <h2>{category.title}</h2>
      </a>
    </Link>
    <style jsx global>{`
      .category {
        width: 50%;
        display: inline-block;
        height: 150px;
        border: 1px solid #FFF;
        box-sizing: border-box;
      }

      .category a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: #000;
        background: #EEE;
        position: relative;
      }

      .category a h2 {
        font-size: 2rem;
        font-weight: normal;
        opacity: 1;
      }

      .category img {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.3;
      }
    `}
    </style>
  </div>
)

export default Category
