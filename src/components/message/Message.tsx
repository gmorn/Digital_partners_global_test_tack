import { MessageArrow, MessageBlock, MessageContent } from './styles'

type Props = {}

export default function Message({}: Props) {
	return (
		<MessageBlock>
			<MessageContent>
				<h6>25 contributions</h6>
				<p>Четверг, Ноябрь 28, 2022</p>
			</MessageContent>
			<MessageArrow />
		</MessageBlock>
	)
}
