class Input extends Component {
  handleOnchange(e) {
    this.props.showNum && this.props.showNum(e.target.value)
  }

  render () {
    return (
      <div>
        <input type='text' onChange={this.handleOnchange.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  static defaultProps = {
    FloatNum: 0
  }
  render () {
    let ans = this.props.FloatNum;
    return (
      <div>{ans > 0 && (ans*100).toFixed(2)+"%"}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }
  
  handleInput(num) {
    this.setState({
      num:num
    })
  }

  render () {
    return (
      <div>
        <Input showNum={this.handleInput.bind(this)} />
        <PercentageShower FloatNum={this.state.num}/>
      </div>
    )
  }
}
