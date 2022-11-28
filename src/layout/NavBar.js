import React from 'react';
import { useContext } from 'react';
import '../global.scss';
import './NavBar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../icon/logo/logo.svg';
import SearchIcon from '../icon/search.svg';
import CartIcon from '../icon/cart.svg';
import AuthContext from '../pages/member/context/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  const location = useLocation();
  const { myAuth, logout } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="logo" width="160" height="33" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/site">
                  景點
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/food">
                  美食
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/stays">
                  住宿
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ticket">
                  票卷
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="input-group">
                <span className="icon" id="basic-addon1">
                  <img src={SearchIcon} alt="" />
                </span>
                <input
                  className="form-control search-border me-4"
                  type="search"
                  placeholder="搜尋"
                  aria-label="Search"
                />
              </div>
            </form>
            <div>
              {myAuth.authorised ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link login-user-text"
                      variant="success"
                      id="dropdown-basic"
                    >
                      {myAuth.email}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/profile"
                      >
                        修改個人資料
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/reset_password"
                      >
                        重設密碼
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/orders"
                      >
                        訂單記錄
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/itinerary"
                      >
                        我的行程規劃
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/ticket_qrcode"
                      >
                        我的票夾
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/comment"
                      >
                        我的評論
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="/collect"
                      >
                        我的收藏
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-user-item"
                        href="#/"
                        onClick={(e) => {
                          e.preventDefault();
                          logout();
                        }}
                      >
                        登出
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <button type="button" className="btn">
                    <NavLink className="nav-link login-btn-text" to="/logIn">
                      登入
                    </NavLink>
                  </button>
                  <NavLink className="signin-m" to="/signIn">
                    <Button
                      className="signin-btn"
                      variant="primary"
                      type="button"
                    >
                      註冊
                    </Button>
                  </NavLink>
                </>
              )}
            </div>
            <div className="cart icon">
              <NavLink className="nav-link" to="/cart">
                <img src={CartIcon} alt="" />
                <div className="cart-count">
                  <span>1</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
