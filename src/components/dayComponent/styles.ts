import styled, { css } from 'styled-components'

type T_Active = {
	active: boolean
	count?: any
}

export const Container = styled.div`
	position: relative;
	max-width: 15px;
	max-height: 15px;
`

export const MessageBlock = styled.div<T_Active>`
	display: none;

	${(props) =>
		props.active &&
		css`
			z-index: 1;
			position: absolute;
			display: block;
			bottom: 22px;
			left: 50%;
			transform: translateX(-50%);
		`}
`

export const DayBlock = styled.div<T_Active>`
	width: 15px;
	height: 15px;

	${(props) => {
		
		if (props.count === undefined || props.count === null || props.count === 0) {
			return css`background:#EDEDED;`
		} else if (props.count === '1-9' || (props.count <= 9 && props.count >= 1)) {
			return css`background:#ACD5F2;`
		} else if (props.count === '10-19' || (props.count <= 19 && props.count >= 10)) {
			return css`background:#7FA8C9;`
		} else if (props.count === '20-29' || (props.count >= 19 && props.count <= 29)) {
			return css`background:#527BA0;`
		} else if (props.count >= 30 || props.count === '30+') {
			return css`background:#254E77;`
		} else {
			return css`background:#EDEDED;`
		}
	}}

	&:hover {
		cursor: pointer;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}

	${(props) =>
		props.active &&
		css`
			border: 1px solid #000;

			&:hover {
				border: 1px solid #000;
			}
		`}
`
