import styled from 'styled-components';

const ProductCTASectionWrapper = styled.div`
    padding: 120px 0 370px 0;
    overflow: hidden;
    position: relative;
    background: #f3676d; 
    background: -moz-linear-gradient(45deg,  #f3676d 0%, #fda44e 50%, #fda44e 51%, #fec945 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg,  #f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg,  #f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3676d', endColorstr='#fec945',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
   
   .productCTA-block{
       text-align: center;
       h2{
            color: ${props => props.theme.white};
            font-size: 50px;
            font-weight: 600;
            line-height: 60px;
            
       }
       p{
            color: ${props => props.theme.white};
            margin: 15px 0 90px 0;
       }
       a{
            text-align: center;
            margin: 0 auto;
            max-width: 250px;
            border-radius: 50px;
            padding: 16px 50px;
            transform: translateY(-35px);
            font-family: inherit;
            font-size: 16px;
            background: ${props => props.theme.white};
            box-shadow: 0px 0px 28px 2px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in;
       }
   }
   .particle{
        position: absolute;
        bottom: -105px;
        left: 0;
        right: 0;
        width: 58%;
        margin: 0 auto;
   }
   
   @media only screen and (max-width: 1366px) {
          padding: 120px 0 260px 0;
          .particle{
               bottom: -80px;
          }

    }

    @media only screen and (max-width: 1024px) {
          padding: 120px 0 240px 0;
          .particle{
               bottom: -45px;
          }

    }
    @media only screen and (max-width: 912px) {
          padding: 120px 0 200px 0;
          .particle{
               bottom: -45px;
          }
    }
    @media only screen and (max-width: 760px) {
          padding: 75px 0 170px 0;
          .particle{
               bottom: -35px;
          }
          .productCTA-block{
               p{
                    margin: 15px 0 60px 0;
               }
          } 
    }
    @media only screen and (max-width: 568px) {
          padding: 75px 0 150px 0;
    }
    @media only screen and (max-width: 480px) {
     .particle{
          bottom: -10px;
     }
     .productCTA-block{
          h2{
               font-size: 40px;
               line-height: 55px; 
          }
     }
    }
    @media only screen and (max-width: 375px) {
     .particle{
          bottom: -10px;
     }
     .productCTA-block{
          h2{
               font-size: 33px;
               line-height: 40px;
          }
     }
    }
    @media only screen and (max-width: 320px) {
     padding: 75px 0 120px 0;
     .particle{
          bottom: -10px;
     }
     .productCTA-block{
          h2{
               font-size: 30px;
               line-height: 35px;
          }
     }
    }
    
`

export default ProductCTASectionWrapper;