import React, { useState } from 'react';
import '../global.scss';
// import './NavBar.scss';
import './NavBarIndex2.scss';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../icon/logo/logo.svg';
import SearchIcon from '../icon/search.svg';
import CartIcon from '../icon/cart.svg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';


function  MyNavbar(props) {

  const [show, setShow] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    // 這裡可以監視目前的捲軸狀態
    console.log(currPos.x)
    console.log(currPos.y)
    if (currPos.y < -200) {
      setShow(false)
    } else {
      setShow(true)
    }
  })

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg-color .nav-normal  .nav-hide">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" width="160" height="33" />
          </Link>
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
                <Link className="nav-link" to="/site">
                  景點
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">
                  美食
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stays">
                  住宿
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ticket">
                  票卷
                </Link>
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
            <button type="button" className="btn">
              <Link className="nav-link login-btn-text" to="/logIn">
                登入
              </Link>
            </button>
            <Link className='signin-m' to="/signIn">
              <Button className="signin-btn" variant="primary" type="button">
                註冊
              </Button>
            </Link>
            <div className="cart icon">
              <Link className="nav-link" to="/cart">
                <img src={CartIcon} alt="" />
                <div className="cart-count">
                  <span>1</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;