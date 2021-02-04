import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProductAPI from '../../../../api/product';
import { URL } from '../../../../utils/url';
import { priceFormatter } from '../../../../utils/priceFormatter';
import Loader from '../../../common/Loader/Loader';

const ManageProducts = ({ className, history, cookie }) => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    ProductAPI.getProducts().then(res => {
      setProductsData(res?.data?.products);
      setLoading(false);
    })
  }, [])

  const category = (categoryId) => {
    switch (categoryId) {
      case 1:
        return '마음'
      default:
        return '미정'
    }
  }

  const moveToItemPage = (productId) => {
    history.push(`/products/${productId}`)
  }

  const deleteProduct = (productId) => {
    // 1. 화면에 적용 - state 속 array에서 삭제
    const newProducts = productsData.filter(product => product._id !== productId);
    setProductsData(newProducts);

    // 2. DB에 적용 - state 속 array에서 삭제
    ProductAPI.deleteProduct(productId, cookie).then(res => {
      if (!res.data.success) alert(res.data.msg);
    })
  }

  return (
    <div className={className}>
      <div className='products-container'>
        <h1>상품관리</h1>
        <table>
          <thead className='thead'>
            <tr>
              <td>No.</td>
              <td>사진</td>
              <td>상품명</td>
              <td>가격</td>
              <td>카테고리</td>
              <td>재고</td>
              <td>등록일</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {
              !productsData || productsData.length === 0 ?
                <tr>
                  <td colSpan={8}>
                    {
                      loading ?
                        <Loader />
                      :
                      <h3>아직 상품이 없습니다.</h3>
                    }
                  </td>
                </tr>
              :
              productsData && productsData.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td className='cursor-pointer' onClick={() => moveToItemPage(product._id)}>
                    <img src={`${URL}/${product.images[0]}`} alt={product.images[0]} className='img' />
                  </td>
                  <td className='cursor-pointer' onClick={() => moveToItemPage(product._id)}>
                    {product.title}
                  </td>
                  <td>{priceFormatter(product.price)}원</td>
                  <td>{category(product.categories)}</td>
                  <td>{product.sold ? 'X' : 'O'}</td>
                  <td>{product.createdAt}</td>
                  <td>
                    <button className='cursor-pointer' onClick={() => deleteProduct(product._id)}>삭제</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default styled(ManageProducts)` 
  background-color: lightgray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & {
    h1 {
      text-align: center;
    }
    .products-container {
      height: 600px;
      width: 85%;
      overflow: auto;
    }
    table {
      border: 1px solid black;
      border-collapse: collapse;
      width: 100%;
      margin-top: 35px;

      thead > tr > td {
        /* border: 1px solid red; */
        border-bottom: 1px solid gray;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
      }
      tbody > tr > td {
        /* border: 1px solid blue; */
        padding: 10px;
        text-align: center;
      }
    }
    .img {
      width: 50px;
      height: 50px;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  }

`;
