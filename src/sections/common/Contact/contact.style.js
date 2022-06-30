import styled from 'styled-components';

const ContactWrapper = styled.div`
    margin-bottom: -200px;
    position: relative;
    z-index: 99;
    .subscribe-from-block{
        text-align: center;
        padding: 80px;
        border-radius: 20px;
        background: #FEC945;
        background: -moz-linear-gradient(45deg,#f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%);
        background: -webkit-linear-gradient(45deg,#f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%);
        background: linear-gradient(45deg,#f3676d 0%,#fda44e 50%,#fda44e 51%,#fec945 100%);
        -webkit-filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3676d',endColorstr='#fec945',GradientType=1 );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3676d',endColorstr='#fec945',GradientType=1 );
    }
    .section-title{
        padding: 0 20%;
        margin-bottom: 55px;
        h2{
            margin-bottom: 25px;
        }

        h2,p{
          color:  ${props => props.theme.white};
        }
    }
    form{
        width: 100%;
    }
    .form-elements{
        width: 60%;
        margin: 0 auto;
        position: relative;
    }
    input{
        display: block;
        padding: 15px;
        width: 100%;
        height: 60px;
        font-size: 16px;
        border-radius: 5px;
        margin: 0 auto 0px auto;
        box-shadow: none;
        transition: 450ms all;
        border: 1px solid transparent;
    }
    button{
        background: ${props => props.theme.white};
        border: none;
        color:  ${props => props.theme.primaryColor};
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0;
        width: 80px;
        cursor: pointer;
        border-radius: 5px;
        svg{
            font-size: 25px;
            transition: all 0.3s ease-in;
        }
        &:hover{
            svg{ 
                color:  ${props => props.theme.secondaryColor};
                
            }
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0px 0 80px 0;
        form{
            padding: 0px;
            input{
                width: 100%;
            }
        }
        .section-title,
        .form-elements{
            width: 100%;
            padding: 0;
        }
    }
    @media only screen and (max-width: 568px) {
        p{
            display: none;
        }
        .section-title{
            margin-bottom: 20px;
            h2{
                margin-bottom: 0;
            }
        }
        .subscribe-from-block{
            padding: 50px 30px;
        }
        form{
            padding: 30px 0px;
            display: block;
            input{
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 375px) {
        .subscribe-from-block{
            padding: 50px 15px;
        }
    }
`

export default ContactWrapper;