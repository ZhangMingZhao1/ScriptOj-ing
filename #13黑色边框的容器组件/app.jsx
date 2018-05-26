// css:

// .border {
//   border: solid 1px red;
// }

// js:
class BlackBorderContainer extends Component {
  render() {
    return (<div>{this.props.children.map( el => {
      return (
        <div className="border">{el}</div>
      )
    } )}</div> )
    
  }
}
