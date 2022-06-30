import styled from 'styled-components';
import Vintage1 from 'assets/images/watch/features/vintage-1.png';

const FeturesSectionWrapper = styled.div`
   padding: 95px 0 50px 0;
  
   .fetures-icon-block{
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        position: relative;
        border-radius: 50%;
        background: #f3676d; 
        background: -moz-linear-gradient(45deg,  #f3676d 0%, #fda44e 50%, #fda44e 51%, #fec945 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg,  #f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg,  #f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3676d', endColorstr='#fec945',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        svg{
            font-size: 30px;
            margin: 0 auto;
            color: #fff;
        }
        &:before{
                position: absolute;
                display: inline-block;
                top: -2px;
                right: 0px;
                height: 66px;
                width: 72px;
                content: '';
                border-radius: 50%;
                z-index: -1;
                opacity: 0;
                transition: all 0.3s linear;
                background: url(${Vintage1});
            }
        
   }
    .fetures-block{
        
        &:hover{
            .fetures-icon-block{
                &:before{
                    opacity: 1;
                    right: -15px;
                }
            }
        }
        h3{
            font-size: 22px; 
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
        }
        p{
            margin: 0 0 50px 0;
            font-weight: 300;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 60px 0 0 0;
    }
    @media only screen and (max-width: 760px) {
        padding: 50px 0;
    }
    @media only screen and (max-width: 568px) {
        padding: 50px 0 0 0;
        .fetures-block{
            text-align: center;
        }
        .fetures-icon-block{
            margin: 0 auto 25px auto;
        }
    }
    
`

export default FeturesSectionWrapper;