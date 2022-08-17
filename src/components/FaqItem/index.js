import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line " />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onChangeToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImageUrl = () => {
    const {isActive} = this.state
    console.log(isActive)
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imageAltText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="button "
        type="button"
        onClick={this.onChangeToggleIsActive}
      >
        <img src={imageUrl} alt={imageAltText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{faqDetails.questionText}</h1>
          {this.renderActiveImageUrl()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
