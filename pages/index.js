import React, {useState} from "react";
import {Context} from "../context";
import {useRouter} from 'next/router';
import axios from 'axios';
import { useContext } from "react";


export default function Auth() {
  const{username, secret ,setUsername,setSecret} = useContext(Context)
  const router = useRouter()
  // eecd6d4d-c78a-41a9-8392-8f19386c525b
  function onSubmit(e) {
    e.preventDefault()
    if (username.length ===0 || secret.length === 0) return
    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers:{"Private-key": 'eecd6d4d-c78a-41a9-8392-8f19386c525b'}}

    )
    .then(r => router.push('/chats'))
  }
  return (
  <div className="background">
    <div className="auth-container" >
      <form className="auth-form" onSubmit={e =>onSubmit(e)}>
        <div className="auth-title">
          Taimoor Chat app
        </div>
        {/* email text */}
        <div className="input-container">
          <input
          placeholder="Email"
          className="text-input"
          required
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* password */}
        <div className="input-container">
          <input
          placeholder="password"
          type = 'password'
          className="text-input"
          required
          onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <button
        type = 'submit'
        className="submit-button"
        >
          login
        </button>
      </form>
    </div>
  </div>
  );
}
