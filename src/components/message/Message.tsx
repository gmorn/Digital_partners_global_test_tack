import { MessageArrow, MessageBlock, MessageContent } from './styles'

type Props = {
	date?: string
	count?: number | null | string
}

export default function Message({ date, count }: Props) {
	return (
		<MessageBlock>
			<MessageContent>
				<h6>{count ? count : 'No'} contributions</h6>
				<p>{date}</p>
			</MessageContent>
			<MessageArrow />
		</MessageBlock>
	)
}
