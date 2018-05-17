class Post extends Component {
  handleClick() {
    console.log(this.p.clientHeight);
  }
  render () {
    return (<p ref={(p) => this.p = p} onClick={this.handleClick.bind(this)}>{this.props.content}</p>)
  }
}
