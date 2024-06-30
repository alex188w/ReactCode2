import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../reducers/productsSlice'
import { changeAvailable } from '../reducers/productsSlice'
import UpdateProduct from './UpdateProduct'

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const [updateProductId, setUpdateProductId] = useState(null)

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    const handleUpdate = (id) => {
        setUpdateProductId(id === updateProductId ? null : id)
    }

    const handleSubmitUpdate = () => {
        setUpdateProductId(null)
    }

    const handleChangeAvailable = (id) => {
        dispatch(changeAvailable(id))
    }

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div className="product_list">
            <button className='button_visible' onClick={handleClick}>Показать/скрыть "Все Товары Каталога "</button>
            {products.map((product) => (
                <div key={product.id} className="product_form">
                    {updateProductId === product.id ? (
                        <UpdateProduct
                            product={product}
                            onFinishEdit={handleSubmitUpdate}
                        />
                    ) : (

                        <div className="product" style={{ display: isShown ? 'block' : 'none' }}>
                            <div className='product_item'>
                                <h3>{product.name}</h3>
                                <p>Описание: {product.description}</p>
                                <p>Цена: {product.price}</p>
                                <p>
                                    Доступность:{' '}
                                    {product.available ? 'доступен для заказа' : 'отсутствует'}
                                </p>
                                <div>
                                    <button onClick={() => handleDelete(product.id)}>Удалить</button>
                                    <button onClick={() => handleUpdate(product.id)}>Изменить</button>
                                    <button onClick={() => handleChangeAvailable(product.id)}>Доступен/недоступен</button>
                                </div>
                            </div>



                        </div>

                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductList