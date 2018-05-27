const getDefaultStyledPost = (defaultStyle) => (
  class Post extends React.Component {
    render (){
      const style = {...defaultStyle, ...this.props.style};
      return (
        <p style={style}>test</p>
      )
    }
  }
)
  

  
