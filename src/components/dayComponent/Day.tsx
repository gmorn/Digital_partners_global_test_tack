import 'inter-ui/inter.css'
import { useState } from 'react'
import Message from '../message/Message'
import { Container, DayBlock, MessageBlock } from './styles'

type Props = {}

export default function Day({}: Props) {
	const [messageState, setMessageState] = useState(false)

	return (
		<Container>
			<MessageBlock active={messageState}>
				<Message />
			</MessageBlock>
			<DayBlock
				active={messageState}
				onClick={() => setMessageState(!messageState)}
			/>
		</Container>
	)
}
