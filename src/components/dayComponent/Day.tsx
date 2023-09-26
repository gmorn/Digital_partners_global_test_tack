
import { useEffect, useState, useRef } from 'react'
import Message from '../message/Message'
import { Container, DayBlock, MessageBlock } from './styles'

type Props = {
  date?: string
  count?: number | null | string
}

export default function Day({ date, count }: Props) {
  const [messageState, setMessageState] = useState(false)
  const messageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    console.log(date, count)
  }, [date])

  const convrtDate = (inputDateString: string) => {
    const dateObject = new Date(inputDateString);
    const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const dayOfWeek = dayNames[dateObject.getDay()];
    const month = monthNames[dateObject.getMonth()];
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
      setMessageState(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container >
      <MessageBlock ref={messageRef} active={messageState}>
        <Message date={date && convrtDate(date)} count={count} />
      </MessageBlock>
      <DayBlock
        active={messageState}
        onClick={() => setMessageState(!messageState)}
				count={count}
      />
    </Container>
  )
}
