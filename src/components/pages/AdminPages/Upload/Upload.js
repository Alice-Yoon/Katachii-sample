import React, {useState} from 'react';
import styled from 'styled-components';
import FileUpload from '../../../common/FileUpload/FileUpload';
import UploadAPI from '../../../../api/upload';
import ItemDescription from './Section/ItemDescription/ItemDescription';

function Upload({ className, cookie, history}) {
    const [Images, setImages] = useState([]);

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const [descValues, setDescValues] = useState({
        title: '',
        description: '',
        price: 0,
        selectCategory: 1
    })
    const { title, description, price, selectCategory } = descValues;

    const onChangeDescValues = (e) => {
        const { name, value } = e.target;
        setDescValues({
            ...descValues,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!title || !description || !price || !selectCategory || !Images) {
            return alert("상품정보 항목을 다 채워주세요!")
        }
        const payload = {
            title,
            description,
            price,
            images: Images,
            categories: selectCategory,
        }
        UploadAPI.uploadProduct(payload, cookie).then(res => {
            if(res.data.success) {
                alert("상품 등록에 성공하였습니다!! :)");
                history.push('/');
            } else {
                alert('상품 등록에 실패하였습니다.');
            }
        })
    }

    return (
        <div className={className}>
            <div className="container">
                <h2>상품 업로드</h2>
                <form className="form" onSubmit={onSubmit}>
                    <FileUpload refreshFunction={updateImages} cookie={cookie} />
                    <ItemDescription descValues={descValues} onChangeDescValues={onChangeDescValues} />
                    <button onClick={onSubmit}>
                        등록
                    </button>
                </form>
            </div>
        </div>
    )
}

export default styled(Upload)`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    & {
        .container {
            /* border: 1px solid green; */
            margin: 0 auto;
            margin-bottom: 100px;
            width: 50%;
        }
        .form {
            /* border: 1px solid blue; */
            .form-area {
                margin-bottom: 20px;
                > label {
                    margin-bottom: 10px;
                }
            }
        }
        .flex-colum {
            display: flex;
            flex-direction: column;
        }
    }
`