import React, { useState } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import API from '../api/api';
import { URL } from './url';

function FileUpload(props) {

    const { cookie } = props;

    const { refreshFunction } = props;
    const [images, setImages] = useState([])

    const onDrop = (files) => {
        
        // 이미지를 ajax로 업로드 할 때, 페이지 전환없이 폼 데이터 제풀하고 싶을 때 formData 객체 사용.
        let formData = new FormData();
        const config = {
            headers: {
                "content-type": 'multipart/form-data',
                "authorization": cookie.x_auth
            }
        }
        formData.append("file", files[0]);

        // save the images we've chosen into the Node Server
        API.uploadImage(formData, config).then(res => {
            
            // 경로가 안 맞아서 preview에 불러 올 때 에러가 났음. 그래서 경로 정리
            const replacedImgUrl = res?.data?.image?.replace('/home/ubuntu/server/server/', '');

            if(res.data.success) {
                setImages([...images, replacedImgUrl]);
                refreshFunction([...images, replacedImgUrl]);
            } else {
                alert("이미지를 저장하는데에 실패했습니다.");
            }
        })
    }

    const onClickDeletePreviewImg = (img) => {
        const currentImgIndex = images.indexOf(img);

        let newImages = [...images];
        newImages.splice(currentImgIndex, 1);

        setImages(newImages);
        refreshFunction(newImages);
    }

    const previewImgs = () => {

        return images && images.map(
            (img, index) => (   
               <div key={index} onClick={() => onClickDeletePreviewImg(img)}>
                    <img className="preview-img" src={`${URL}/${img}`} alt={`productImage-${index}`} />
                </div>
            )
        )
    }
    

    return (
        <div className={props.className}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={8000000000}
            >
                {({getRootProps, getInputProps}) => (
                    <div className="drop-zone" {...getRootProps()}>
                        <input name="file" {...getInputProps()} />
                        <p>사진 업로드</p>
                    </div>
                )}
            </Dropzone>

            <div className="preview">
                {previewImgs()}
            </div>
        </div>
    )
}

export default styled(FileUpload)`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    & {
        .drop-zone {
            border: 1px solid lightgray;
            width: 270px;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            > p {
                font-weight: bold;
                color: gray;
            }
        }
        .preview {
            border: 1px dotted black;
            display: flex;
            width: 300px;
            height: 240px;
            overflow-x: scroll;
            .preview-img {
                min-width: 300px;
                width: 300px;
                height: 240px;
            }
        }
    }
`;
