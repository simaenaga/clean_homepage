import React, { useEffect } from "react"
import { Link } from "gatsby"

import "../css/general.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faSuitcase, faBook, faArrowUp } from "@fortawesome/free-solid-svg-icons"

import Header from "../../content/assets/site_image.png"
import Loader from "react-loaders"


const Layout = ({ location, title, children }) => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("wrapper")[0].className = "wrapper"
      document.getElementsByClassName("loader")[0].className = "loader loader-undefined loader-hidden"
    },
    1000)
  }, [location, title, children])
  const rootPath = `${__PATH_PREFIX__}/`
  const header = (
    <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // MEMO:幅と高さは決まってたら、つけておいたほうがいい。
        height: "64px",
        padding: "0 16px"
      }}
    >
      <Link
        style={{
          textDecoration: "none",
        }}
        // 現在のURLと一致すれば、スタイルを適用
        activeStyle={{
          // リンクの無効化
          pointerEvents: "none",
        }}
        activeClassName="headerTitle-pushed"
        className="headerTitle"
        to={`/`}
      >
      {
        location.pathname === rootPath ?
      <h1 className="title">
        <FontAwesomeIcon
          style={{marginRight: "5px"}}
          icon={faHome}
        />
        <span className="myNameTitle">{title}</span>
      </h1>
      :
      <div className="title">
        <FontAwesomeIcon
          style={{marginRight: "5px"}}
          icon={faHome}
        />
        <span className="myNameTitle">{title}</span>
      </div>
      }  
      

      </Link>
      <nav
        style={{
          fontFamily: "mini-wakuwaku-maru"}}
      >
        <div
          className="menu-box"
          onClick={() => {
            const menuBox = document.getElementsByClassName("menu-box")[0]
            const menuLink = document.getElementsByClassName("menu-link")[0]
            const wrapper = document.getElementsByClassName("wrapper")[0]

            if(menuBox.className === "menu-box"){
              menuBox.className = "menu-box active"
              menuLink.className = "menu-link modal"
              wrapper.style.position = "fixed" 
            }else{
              menuBox.className = "menu-box"
              menuLink.className = "menu-link display-none" 
              wrapper.style.position = "" 
            }
          }}
          onKeyPress={()=>console.log("test!")}
          role="button"
          tabIndex={0}
        >
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
            <span>Menu</span>
          </div>
        </div>
        <ul className="menu-link display-none">
          <Link
            style={{
              textDecoration: "none",
              color: `inherit`
            }}
            activeStyle={{
              // リンクの無効化
              pointerEvents: "none",
            }}
            activeClassName="menu-pushed"
            to={`/about_me/`}
          >
            <li>
              <FontAwesomeIcon
                style={{marginRight: "5px"}}
                icon={faUser} 
              />
              About me
            </li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: `inherit`
            }}
            activeStyle={{
              // リンクの無効化
              pointerEvents: "none",
            }}
            activeClassName="menu-pushed"
            to={`/works/`}
          >
            <li>
            <FontAwesomeIcon
              style={{marginRight: "5px"}}
              icon={faSuitcase}
            />
            Works
            </li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: `inherit`
            }}
            activeStyle={{
              // リンクの無効化
              pointerEvents: "none",
            }}
            activeClassName="menu-pushed"
            to={`/skills/`}
          >
            <li>
            <FontAwesomeIcon
              style={{marginRight: "5px"}}
              icon={faBook}
            />
            Skills
            </li>
          </Link>
        </ul>
      </nav>
    </div>
    {
      location.pathname === rootPath &&
      <div style={{marginBottom: "32px"}} >
        <img
          src={Header}
          alt="自分らしさを追求したい　何が足りない？　人間の心理の真理とは？　自分とは？　どう生きる？　何が好き？　人生を最大限に味わうには？"
          className="header_img"
        />
      </div>
    }
    </div>
  )
  
  
  return (
    <div
      style={{backgroundColor: `#FCBF4C`}}
    >
      <Loader type="ball-pulse" />
      <div className="wrapper loading"/>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `1108px`,
          padding: `16px 16px 0`
        }}
      >
        <header>{header}</header>
        <main style={{fontFamily: "JK Gothic M", minHeight: "100vh"}}>{children}</main>
        <footer style={{position: "relative"}}>
          <div style={{fontSize: "14px", marginTop: "36px", flexGrow: 1.6, textAlign: "center", padding: "32px"}}>
            <span style={{fontWeight: "bold"}}>© </span>
            <span style={{fontFamily: "mini-wakuwaku-maru"}}>2020 Tamie Taniguchi</span>
            <div style={{position: "absolute", right: "0", bottom: "16px"}}>
              <Link
                  style={{
                    display: "block",
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#3A5CD4",
                    borderRadius: "50%",
                    textAlign: "center",
                    color: "#D6DBEC"
                  }}
                  to={location.pathname+"#"}
                  className="top_link"
              >
                <FontAwesomeIcon
                  className="toTop"
                  icon={faArrowUp}
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
