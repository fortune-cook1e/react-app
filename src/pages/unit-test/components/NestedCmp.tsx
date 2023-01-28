import ButtonTest from './ButtonTest'

interface Props {
  title: string
}

const NestedCmp = ({ title }: Props): JSX.Element => {
  return (
    <div>
      this is NestedCmp
      <ButtonTest>test button</ButtonTest>
      <div>
        user title:<span>{title}</span>
      </div>
    </div>
  )
}

export default NestedCmp
