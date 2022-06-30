import styled from 'styled-components';
const BannerSectionWrapper = styled.div`
    padding: 190px 0 120px 0;
    margin: 80px 0 0 0;
    background-size: 50%;
    background-position: center right 35px;
    p{
        font-size: 16px;
        font-weight: 300; 
        margin: 0 0 70px 0;
    }
    h4{
        margin-bottom: 8px;
        font-size: 18px;
        color: ${props => props.theme.secondaryColor};
        text-transform: uppercase;
    }
    .section-title{
        h1{
            font-weight: 300;
            font-size: 60px;
            line-height: 75px;
            margin: 0 0 38px 0; 
            span{
                font-weight: 600;
            }
        }
        
    }
    .banner-btn{
        width: 215px;
        padding: 16px 20px;
    }
    .banner-btn.one{
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
        &:hover{
            background: ${props => props.theme.primaryLightColor};
        }
    }
    .banner-btn.two{
        background: ${props => props.theme.primaryLightColorTwo};
        color: ${props => props.theme.white};
        &:hover{
            background:  ${props => props.theme.secondaryColor};
        }
    }
    .banner-btn+.banner-btn{
        margin-left: 30px;
    }
    .banner-img-block{
        transform: translateY(50px);
    }
    @media only screen and (max-width: 912px) {
        margin: 30px 0 0 0;
        padding: 120px 0 60px 0;
        .banner-img-block{
            transform: translateY(0px);
        }
        .section-title{
            h1{
                font-size: 32px;
                line-height: 42px;
                margin: 0 0 25px 0;
            }
            h4{
                font-size: 16px;
            }
        }
        p{ 
            margin: 0 0 30px 0;
        }
        .banner-btn{
            display: block;
        }
        .banner-btn+.banner-btn{
            margin-left: 0px;
            margin-top: 15px
        }
     }
     @media only screen and (max-width: 760px) {
        padding: 130px 0 60px 0;
     }
     @media only screen and (max-width: 568px) {
        .banner-img-block{
            margin-top: 120px;
        }
        .banner-btn{
            display: inline-block;
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
            margin-top: 0px
        }
     }
     @media only screen and (max-width: 480px) {
        padding: 120px 0 100px 0;
        .section-title{
            h1{
                font-size: 35px;
                line-height: 50px;
            }
        }
        .banner-btn{
            display: block;
            margin: 0 auto;
        }
        .banner-btn+.banner-btn{
            margin: 15px auto 0 auto;
        }
     }
     @media only screen and (max-width: 380px) {
        .banner-img-block{
            margin-top: 80px;
        }
        .section-title{
            h1{
                font-size: 30px;
                line-height: 46px;
                margin: 0 0 30px 0;
            }
            h4{
                font-size: 15px;
            }
        }
       
     }
     @media only screen and (max-width: 330px) {
        .section-title{
            h1{
                font-size: 23px;
                line-height: 35px;
            }
        }
     }
     
`

export default BannerSectionWrapper;