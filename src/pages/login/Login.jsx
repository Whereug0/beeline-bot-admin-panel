import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { Navigate } from 'react-router-dom';

import {Form, Input, Button} from 'antd';


import { AuthService } from '../../services/AuthService';
import {setCurrentUser, setAccessToken, loginUser} from '../../store/user/userSlice';
import { useDispatch } from 'react-redux';

import styles from './Login.module.scss';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const dispatch = useDispatch()

  const usernameInputRef = useRef(null); // Ссылка на поле ввода электронной почты
  const passwordInputRef = useRef(null); // Ссылка на поле ввода пароля

  // const handleLogin = async () => {
  //   try {
  //     const response = await AuthService.login(email, password); // Выполняем запрос на авторизацию
  //     // Добавьте дополнительную логику здесь, например, обновление состояния пользователя в хранилище Redux
  //     dispatch(setCurrentUser(response.data.user));
  //     dispatch(setAccessToken(response.data.access_token));
  //     console.log('Успешная авторизация', response);

  //     setRedirectToHome(true)
  //   } catch (error) {
  //     console.error('Ошибка авторизации', error);
  //     // Добавьте обработку ошибки, например, отображение сообщения об ошибке в интерфейсе
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await dispatch(loginUser({ username, password }));
      // Добавьте дополнительную логику здесь, например, обновление состояния пользователя в хранилище Redux
      dispatch(setCurrentUser(response.payload.user));
      dispatch(setAccessToken(response.payload.access_token));
      console.log('Успешная авторизация', response);

      setRedirectToHome(true);
    } catch (error) {
      console.error('Ошибка авторизации', error);
      // Добавьте обработку ошибки, например, отображение сообщения об ошибке в интерфейсе
    }
  };

  if (redirectToHome) {
    return <Navigate to="/home" />; // Перенаправление на страницу /home при успешной авторизации
  }

  return (
    <div className={styles.Login}>
      <Form className={styles.Form}>
        <Form.Item
          className={styles.fomrItem}
          name='username'
          rules={[
            {required: true, message: 'Введите username'},
            {
              type: 'login',
              message: 'Please enter a valid login address',
            },]}
       
        >
          <Input
            className={styles.Input} 
            type='text' 
            placeholder='username' 
            size='large' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
          />
         

        </Form.Item>
        <Form.Item
          className={styles.fomrItem}
          name='password'
          rules={[{required: true, message: 'Введите пароль'}]}
        >
  
          <Input.Password 
            className={styles.Input} 
            placeholder='password' 
            size='large'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordInputRef}

          />
      
        </Form.Item>
        <Button type='primary' className={styles.loginBtn} onClick={handleLogin}>Войти</Button>
        <NavLink to={ROUTES.HOME}><p>Home</p></NavLink>
      </Form>
    </div>
  )
}

export default Login;
