import React from 'react';
import { useState, useContext } from 'react';
import '../../global.scss';
import './style/ResetPassword.scss';
import Swal from 'sweetalert2';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import EyeClosed from '../../icon/eye_closed.svg';
import Eye from '../../icon/eye.svg';
import axios from 'axios';
import { RESET_PASSWORD_API } from '../../config';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/context/AuthContext';

function ResetPassword() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    againNewPassword: '',
    sid: JSON.parse(localStorage.getItem('auth')).sid,
  });

  const [passwordOldFieldType, setPasswordOldFieldType] = useState('password');
  const [passwordFieldType, setPasswordFieldType] = useState('password');
  const [passwordAgainFieldType, setPasswordAgainFieldType] =
    useState('password');

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(RESET_PASSWORD_API, formData);

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: '重設密碼成功,請重新登入',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
      navigate('/');
      e.preventDefault();
      logout();
    } else {
      Swal.fire({
        icon: 'error',
        title: '重設密碼失敗',
        confirmButtonText: '確認',
        confirmButtonColor: '#59d8a1',
      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="givePadding profile_padding d-flex">
          <SideBar />
          <div className="profile col-5">
            <h1>重設密碼</h1>
            <form className="form" onSubmit={mySubmit}>
              <div className="mb-3 profile-input">
                <label className="form-label">舊密碼</label>
                <div className="password-group">
                  <input
                    type={passwordOldFieldType}
                    className="form-control"
                    id="oldPassword"
                    placeholder="請輸入舊密碼"
                    onChange={handler}
                    value={formData.oldPassword}
                  />
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordOldFieldType(
                        passwordOldFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordOldFieldType === 'text' ? (
                      <div className="icon comment-icon">
                        <img src={EyeClosed} alt="" />
                      </div>
                    ) : (
                      <div className="icon comment-icon">
                        <img src={Eye} alt="" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-3 profile-input">
                <label className="form-label">新密碼</label>
                <div className="password-group">
                  <input
                    type={passwordFieldType}
                    className="form-control"
                    id="newPassword"
                    placeholder="8位以上英數密碼，請區分大小寫"
                    onChange={handler}
                    value={formData.newPassword}
                  />
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordFieldType(
                        passwordFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordFieldType === 'text' ? (
                      <div className="icon comment-icon">
                        <img src={EyeClosed} alt="" />
                      </div>
                    ) : (
                      <div className="icon comment-icon">
                        <img src={Eye} alt="" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-3 profile-input">
                <label className="form-label">再次輸入新密碼</label>
                <div className="password-group">
                  <input
                    type={passwordAgainFieldType}
                    className="form-control"
                    id="againNewPassword"
                    placeholder="請輸入相同密碼"
                    onChange={handler}
                    value={formData.againNewPassword}
                  />
                  <button
                    className="icon login-eye-btn"
                    type="button"
                    onClick={() => {
                      setPasswordAgainFieldType(
                        passwordAgainFieldType === 'text' ? 'password' : 'text'
                      );
                    }}
                  >
                    {passwordAgainFieldType === 'text' ? (
                      <div className="icon comment-icon">
                        <img src={EyeClosed} alt="" />
                      </div>
                    ) : (
                      <div className="icon comment-icon">
                        <img src={Eye} alt="" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-3 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary profile-button d-flex mx-auto"
                >
                  儲存
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
