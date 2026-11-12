import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

// Public demo token used by the video APIs, so any username/password can log in
export const DEMO_JWT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username.trim() === '' && password.trim() === '') {
      this.onSubmitFailure('Please enter username and password')
    } else if (username.trim() === '') {
      this.onSubmitFailure('Please enter username')
    } else if (password.trim() === '') {
      this.onSubmitFailure('Please enter password')
    } else {
      this.onSubmitSuccess(DEMO_JWT_TOKEN)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
