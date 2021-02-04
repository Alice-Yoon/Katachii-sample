import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductAPI from '../../../api/product';

import HomeBanner from './Section/HomeBanner/HomeBanner';
import CategoryTab from './Section/CategoryTab/CategoryTab';
import GalleryContainer from './Section/Gallery/GalleryContainer';
import Loader from '../../common/Loader/Loader';
import Footer from '../../common/Footer/Footer';

function Home({className, history, match}) {
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0);
        setLoading(true);
        fetchAllProducts();
    }, []);

    const fetchAllProducts = () => {
        ProductAPI.getProducts()
            .then(res => {
                setGalleryData(res?.data?.products);
                setLoading(false);
            })
    }

    const fetchProductsByCategory = (category) => {
        ProductAPI.getCategorizedProducts(category)
            .then(res => {
                setGalleryData(res?.data.products);
                setLoading(false);
            });
    }

    const switchCategory = (list) => {
        switch(list) {
            case 1:
                fetchProductsByCategory(1);
                break;
            case 2:
                fetchProductsByCategory(2);              
                break;
            case 3:
                fetchProductsByCategory(3);
            break;
            case 4:
                fetchProductsByCategory(4); 
                break;
            case 5:
                fetchProductsByCategory(5);
                break;
            default:
                fetchAllProducts();
        }
    }

    return (
        <div className={className}>
            <HomeBanner />
            <div className="home-desc"></div>
            <div className="gallery">
                <CategoryTab switchCategory={switchCategory} />
                {
                loading ?
                    <Loader />
                    :
                    <GalleryContainer 
                        galleryData={galleryData} 
                        history={history} 
                    />
                }
            </div>
            <Footer />
        </div>
    )
}

export default styled(Home)`
    height: 100vh;
    & {
        .home-desc {
            text-align: center;
            padding: 100px 0;
            color: gray;
        }
        .gallery {
            position: relative;
            min-height: 500px;
        }
    }
`;