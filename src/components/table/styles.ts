import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	bottom: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: grid;
	grid-template-columns: 1fr 1fr;

	p {
		font-size: 12px;
		color: #959494;
	}
`

export const Months = styled.div`
	grid-column: 2;
	grid-row: 1;

	display: flex;
	justify-content: space-around;
	width: 850px;

	margin-bottom: 5px;
`

export const Weeks = styled.div`
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 18.5px;
	align-items: end;
	margin-right: 5px;
`

export const TableContent = styled.div`
	grid-column: 2;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 2px;
`

export const Explanation = styled.div`
	grid-column: 2;
	grid-row: 3;
  display: flex;
  gap: 7px;
  margin-top: 15px;
  align-items: center;

  p {
    font-size: 8px;
  }
`

export const Flex = styled.div`
	display: flex;
	gap: 2px;
`
