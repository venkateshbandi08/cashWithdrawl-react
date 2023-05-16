// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    currentBalanceAmount: 2000,
  }

  onDenominationClick = value => {
    this.setState(prevState => ({
      currentBalanceAmount: prevState.currentBalanceAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalanceAmount} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-pic-container">
              <p className="profile-pic-letter"> S </p>
            </div>
            <p className="profile-name"> Sarah Williams </p>
          </div>
          <div className="balance-container">
            <p className="your-balance-text"> Your Balance </p>
            <div className="balance-amount-container">
              <p className="balance-amount"> {currentBalanceAmount} </p>
              <p className="in-rupess-text"> In rupees </p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading"> Withdraw </p>
            <p className="choose-sum-text"> CHOOSE SUM (IN RUPEES) </p>
            <ul className="denominations-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  eachDenominationItem={eachDenomination}
                  onDenominationClick={this.onDenominationClick}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
