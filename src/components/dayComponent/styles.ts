import styled, { css } from 'styled-components'

type T_Active = {
	active: boolean
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
	background: #ededed;

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
