import styled from 'styled-components';

const ProductSectionWrapper = styled.div`
    padding: 120px 0 108px 0;
    overflow: hidden;
    position: relative;
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        z-index: 1;
        border-radius: 20px;
        background: rgba(0,0,0,.8);
        transition: all 0.3s ease-in;
    }
    .product-thumb-block{
        position: relative;
        a{
            z-index: 22;
            top: 52%;
            left: 0;
            right: 0;
            opacity: 0;
            text-align: center;
            margin: 0 auto;
            max-width: 160px;
            position: absolute;
            border-radius: 50px;
            padding: 13px 15px;
            transform: translateY(-35px);
            font-family: inherit;
            font-size: 16px;
            border: 1px solid ${props => props.theme.white};
            background: transparent;
            transition: all 0.3s ease-in;
            &:hover{
                background: ${props => props.theme.white};
                border-color: ${props => props.theme.white};
            }
        }
    }
    .product-block{
        &:hover{
            .product-thumb-block{
                a{
                    opacity: 1;
                    top: 50%;
                }
            }
            .overlay{
                opacity: 1;
            }
        }
    }
    .product-info{
        margin-top: 15px;
        h3{
            margin-bottom: 5px;
            font-weight: 400;
        }
        .rattings{
            color: #F88632;
            svg+svg{
                margin-left: 5px;
            }
        }
    }
    .product-price-block{
        display: flex;
        justify-content: space-between;
        width: 90%;
        align-items: center;
        margin: 20px 0 30px 0;
        .off-price{
            color: rgba(122,132,142,0.3);
            text-decoration: line-through;
        }
        .on-price{
            color: #FB7B81;
        } 
    }
    
    @media only screen and (max-width: 912px) {
        padding: 90px 0 78px 0;
        .product-block{
            margin-bottom: 30px;
            background: rgba(0,0,0,.1);
            padding: 30px;
            border-radius: 20px;
        }
    }
    
`

export default ProductSectionWrapper;