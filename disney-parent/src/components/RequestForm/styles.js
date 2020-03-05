import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';

export const Content = styled.section`
	display: flex;
	color: #2f2f2f;
	background: #eee;
	width: 90%;
	margin: 3rem auto;
`;

export const inputStyles = css`
	width: 100%;
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

export const FormWrapper = styled(Form)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	width: 70%;
	padding: 2rem;
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
`;

export const Select = styled(Field)`
	${inputStyles}
	-webkit-appearance: none;
`;

export const SubmitButton = styled.button`
	font-family: Gentium Basic;
	font-style: normal;
	background: #fff;
	border: 1px solid #2f2f2f;
	box-sizing: border-box;
	border-radius: 5px;
	width: 20%;
	padding: 1rem;
	margin-bottom: -0.4rem;
	margin-right: 0;
	font-weight: bold;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;