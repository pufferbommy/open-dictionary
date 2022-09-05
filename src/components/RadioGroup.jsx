const RadioGroup = ({ name, handleClickRadioGroup, defaultChecked, idx }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{name}</span>
        <input
          onChange={() => handleClickRadioGroup(idx)}
          defaultChecked={defaultChecked}
          type="radio"
          name="dictionary-radio"
          className="radio checked:bg-blue-500"
        />
      </label>
    </div>
  )
}

export default RadioGroup
