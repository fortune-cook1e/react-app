interface Props {
  onSubmitSuccess: () => void
}

const UserTestForm = ({ onSubmitSuccess }: Props): JSX.Element => {
  return (
    <div>
      <input type='text' placeholder='user form placeholder' />
      <button onClick={onSubmitSuccess}>user form click</button>
    </div>
  )
}

export default UserTestForm
