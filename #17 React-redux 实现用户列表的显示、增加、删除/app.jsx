const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user]
    case 'DELETE_USER':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'UPDATE_USER':
      return [...state.slice(0, action.index), {...state[action.index], ...action.user}, ...state.slice(action.index + 1)]
    default:
      return state
  }
}

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={this.props.onDeleteUser}>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  constructor () {
    super()
    this.state = { username: '', age: 0, gender: '' }
  }
  
  handleClickAddUser () {
    this.props.onAddUser(this.state)
  }
  
  handleChangeGender (gender) {
    this.setState({ gender })
  }
  
  handleAgeChange (event) {
    this.setState({ age: event.target.value * 1 })
  }
  
  handleUsernameChange (event) {
    this.setState({ username: event.target.value })
  }
  
  render () {
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: <input type='text' name='jerry' onChange={this.handleUsernameChange.bind(this)} value={this.state.username} /></div>
          <div>Age: <input type='number' onChange={this.handleAgeChange.bind(this)} value={this.state.age} /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleChangeGender.bind(this, 'male')} /></label>
            <label>Female: <input type='radio' name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleChangeGender.bind(this, 'female')} /></label>
          </div>
          <button onClick={this.handleClickAddUser.bind(this)}>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>
          {this.props.users.map((user, i) =>
            <User user={user} onDeleteUser={this.props.onDeleteUser.bind(this, i)} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ users: state })
const mapDispatchToProps = (dispatch) => ({
  onDeleteUser (index) {
    dispatch({ type: 'DELETE_USER', index })
  },
  onAddUser (user) {
    dispatch({ type: 'ADD_USER', user })
  }
})

UsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)