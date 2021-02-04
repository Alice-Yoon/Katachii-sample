import React from 'react'

function ItemDescription({ descValues, onChangeDescValues }) {
    const { title, description, price, selectCategory } = descValues;

    const Categories = [
        {key: 1, value: "마음"},
        // {key: 2, value: "어항"},
        // {key: 3, value: "물방울"},
        // {key: 4, value: "영화"},
        // {key: 5, value: "음악"}
    ];

    return (
        <>
        <div className="form-area flex-colum">
            <label>상품이름</label>
            <input name="title" value={title} onChange={onChangeDescValues} />
        </div>

        <div className="form-area flex-colum">
            <label>상품설명</label>
            <textarea name="description" value={description} onChange={onChangeDescValues} />
        </div>

        <div className="form-area flex-colum">
            <label>가격</label>
            <input name="price" value={price} onChange={onChangeDescValues} type="number" />
        </div>

        <div className="form-area flex-colum">
            <label>카테고리</label>
            <select name="selectCategory" value={selectCategory} onChange={onChangeDescValues}>
                {Categories && Categories.map(category => (
                    <option key={category.key} value={category.key}>{category.value}</option>
                ))}
            </select>
        </div>
        </>
    )
}

export default ItemDescription
