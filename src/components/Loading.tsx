import { ReactElement, FC } from 'react'
import { LoadingProps } from '../types';

const Loading: FC<LoadingProps> = ({ attributes, text = "Loading ..." }): ReactElement => {
  return (
    <div {...attributes}>{text}</div>
  )
}

export default Loading;