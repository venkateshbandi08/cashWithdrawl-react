// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenominationItem, onDenominationClick} = props
  const {id, value} = eachDenominationItem
  const onClickOnDenomination = () => {
    onDenominationClick(value)
  }
  return (
    <li>
      <button
        className="each-denomination"
        type="button"
        onClick={onClickOnDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
