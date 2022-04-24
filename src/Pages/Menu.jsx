import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div>
    <div className="food-container">
      <header>
        <nav>
          <div className="bars">
            <i className="fas fa-bars" />
          </div>
          <p>my food</p>
          <p>mail</p>
        </nav>
      </header>
      <div className="food-menu">
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1533450823749-791a21b4692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        {/*--------------------------------------------------*/}
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich,<br /> A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1517314597476-e1788060b6cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
        <div className="menu-img">
          <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
          <div className="food-description">
            <h2>The Perfect Sandwich, A Real NYC Classic</h2>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
      </div>
      <div className="btn">
        <span><i className="fas fa-angle-double-left" /></span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span><i className="fas fa-angle-double-right" /></span>
      </div>
      <br />
      <hr />
      <section className="about" id="about">
        <h1>About Me, The Food Man</h1>
        <img src="https://images.unsplash.com/photo-1572054466274-25b4ed6d6899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
        <div className="food-man">
          <h2>I am Who I Am!</h2>
          <p className="italic">With Passion For Real, Good Food</p>
        </div>
      </section>
      <p className="about-man">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <br />
      <hr />
      <section className="footer">
        <footer>
          <h1>footer</h1>
          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          <a href>Powered by Rahul kumar Raidas </a>
        </footer>
        <div className="blog-post">
          <h1>blog post</h1>
          <div className="blog">
            <img src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=352&q=80" alt="" />
            <p>Lorem <br />Sed mattis nunc</p>
          </div>
          <div className="blog">
            <img src="https://images.unsplash.com/photo-1587487899776-610ed24d2ea7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <p>Ipsum <br />Praes tinci sed</p>
          </div>
        </div>
      </section>
    </div>
    <div className="sidenav">
      <div className="close-btn">×</div>
      <a href>home</a>
      <a href="#food">food</a>
      <a href="#about">about</a>
    </div>
  </div>
  )
}

export default Menu;