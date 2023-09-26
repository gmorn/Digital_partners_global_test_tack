import styled from 'styled-components'

export const MessageBlock = styled.div`
	position: relative;
	background: #000;
	width: 100%;
	white-space: nowrap;
	border-radius: 3px;
	
`

export const MessageContent = styled.div`
	gap: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6px;
	h6 {
    color: #fff;
		font-size: 12px;
    font-weight: 400;
	}
  
	p {
    color: #7c7c7c;
		font-family: Inter;
		font-size: 10px;
	}
`

export const MessageArrow = styled.div`
	transform: rotate(45deg) translateX(-50%);
	width: 10px;
	height: 10px;
	background: #000;
	position: absolute;
	display: block;
	bottom: -8px;
	left: 50%;
`
