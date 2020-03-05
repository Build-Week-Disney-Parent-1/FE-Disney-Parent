import styled, { css } from 'styled-components';
import BgImage from '../../assets/disney.png';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

export const inputStyles = css`
width: 20rem;
background: #ffffff;
border: 1px solid #2f2f2f;
border-radius: 5px;
font-family: Gentium Basic;
margin-top: 0.8rem;
font-size: 1.2rem;
padding: 1rem;
font-weight: bold;
color: #918383;
`;

export const Main = styled.main`
width: 100%;
text-align: center;
display: flex;
flex-direction: column;

@media (min-width: 700px) {
  flex-direction: row;
  height: 100vh;
}
`;

export const Wrapper = styled.section`
background: #eeeeee;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;

@media (min-width: 700px) {
  background-image: url(${BgImage});
  background-size: 232px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 282px;
  width: 40%;
}
@media (min-width: 1000px) {
  background-size: 380px;
}

@media (min-width: 1400px) {
  background-size: 462px;
}
`;

export const FormWrapper = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
width: 100%;
@media (min-width: 700px) {
  width: 60%;
}
`;

export const H2 = styled.h2`
font-size: 2.8rem !important;
font-weight: bold;
font-size: 48px;
line-height: 56px;
color: #2f2f2f;
text-align: center;
margin: 0 auto;
@media (min-width: 700px) {
  font-size: 4.8rem;
}
`;

export const P = styled.p`
font-size: 2rem;
width: 95%;
line-height: 28px;
@media (min-width: 700px) {
  font-size: 2.4rem;
  width: 70%;
}
@media (min-width: 1000px) {
  width: 50%;
}
`;

export const StyledLink = styled(NavLink)`
font-family: Gentium Basic;
font-style: normal;
background: #009ddc;
border: 1px solid #2f2f2f;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 2rem;
font-size: 1.4rem;
line-height: 16px;
padding: 1.2rem 1.3rem;
width: 15rem;
font-weight: bold;
text-decoration: none;
color: inherit;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transition: transform 0.4s ease-in-out;

&:hover {
  cursor: pointer;
  transform: scale(1.05);
}

&:focus {
  outline: none;
}
`;

export const Div = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Label = styled.label`
font-family: Gentium Basic;
font-style: normal;
font-weight: bold;
font-size: 1.4rem;
line-height: 16px;
color: #2f2f2f;
padding-bottom: 1.5rem;
text-align: left;
`;

export const Input = styled(Field)`
${inputStyles}
@media (min-width: 700px) {
  width: 37rem;
}
`;

export const Select = styled(Field)`
${inputStyles}
-webkit-appearance: none;
@media (min-width: 700px) {
  width: 37rem;
}
`;

export const SubmitButton = styled.button`
font-family: Gentium Basic;
font-style: normal;
background: #eeeeee;
border: 1px solid #2f2f2f;
box-sizing: border-box;
border-radius: 5px;
width: 14.2rem;
padding: 1rem;
margin-top: 3rem;
transition: all 0.4s ease-in-out;
&:hover {
  cursor: pointer;
  transform: scale(1.05);
}

&:focus {
  outline: none;
}
`;

export const ErrorMessage = styled.p`
font-size: 1rem;
color: gray;
`;