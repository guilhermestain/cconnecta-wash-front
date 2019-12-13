import React, { Component } from 'react'
import './index.css'
import { Input, Button, Icon } from 'antd'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {

  state = {
    redirect: false,
    email: '',
    senha: '',
    client: true,
  }

  onChangeLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeButtonClient = () => {
    this.setState({
      client: true
    })
  } 

  changeButtonEmpresa = () => {
    this.setState({
      client: false
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  render() {
    return (
      <div className='div-bg-login'>
        <div className='div-card-login'>
          <div className='div-main-form-login'>
            <div className='icon-home-login'>
              {this.renderRedirect()}
              <Icon type="home" style={{ fontSize: '22px', margin: '10px 15px 0 0' }} onClick={this.setRedirect}/>
            </div>
            <div className='div-form-login'>
              {this.state.client ? 
                <h1 className='h1-bv-login'>Bem vindos ao Connecta Wash Cliente</h1> : 
                <h1 className='h1-bv-login'>Bem vindos ao Connecta Wash Empresa</h1> 
              }
              <p className='p-login'>Obrigado por estar fazendo parte da nossa plataforma online.</p>
              <div className='div-inputs'>
                <h4 className='p-inputs'>Email:</h4>
                <Input
                placeholder="Digite seu email"
                className='input-login'
                name='email'
                value={this.state.email}
                onChange={this.onChangeLogin}
              />
              </div>
              <div className='div-inputs'>
                <h4 className='p-inputs'>Senha:</h4>
              <Input.Password
                placeholder="Digite sua senha"
                className='inputsenha-login'
                name='senha'
                value={this.state.senha}
                onChange={this.onChangeLogin}
              />
              </div>
              <div className='div-buttons-client-login'>
                {
                  this.state.client ? 
                  <Button className='button-client-login-true' onClick={this.changeButtonClient}>Cliente</Button> 
                  : <Button className='button-client-login-false' onClick={this.changeButtonClient}>Cliente</Button>
                } 
                {
                  !this.state.client ? 
                  <Button className='button-empresa-login-true' onClick={this.changeButtonEmpresa} >Empresa</Button> 
                  : <Button className='button-empresa-login-false' onClick={this.changeButtonEmpresa}>Empresa</Button>
                } 
              </div>
              <Button className='button-entrar'>Logar</Button>
              {this.state.client ? 
              <h4 className='p-login'>Gostaria de se cadastrar? <a href='/cadastroClient'>Clique aqui</a></h4>
              : <h4 className='p-login'>Gostaria de se cadastrar? <a href='/cadastroEmpresa'>Clique aqui</a></h4>}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage