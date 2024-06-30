import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../reducers/productsSlice'

const AddProduct = () => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        available: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        if (productData.name && productData.description && productData.price) {
            dispatch(addProduct(productData))
            setProductData({ name: '', description: '', price: '', available: true, })
            alert("Товар добавлен в Каталог!");
        } else {
            alert("Заполните все поля!");
        }

    }

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    return (
        <div className='form'>
            <h3>Форма добавления нового товара</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                    placeholder="Название продукта"
                />
                <input
                    type="text"
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
                    placeholder="Описание продукта"
                />
                <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    placeholder="Цена"
                />
                <button className='add_product' type="submit">Добавить товар</button>
            </form>
        </div>

    )
}

export default AddProduct;