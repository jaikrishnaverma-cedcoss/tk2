import './App.css';

function App() {
  return (
    <div className="App">
<div className="card">

<div className="box">
  <img src="image-removebg-preview (5).png" className="header" alt="" />
  <div className="row btn">
    <button>Sign up</button>
    <button>Sign in</button>
  </div>
</div>
          <form action="" style={{marginTop:"10vh"}}>
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Full name' />
          <input type="text" placeholder='E-mail' />
          <input type="text" placeholder='Password' />
          <div className="row flexAIC inp flexJCC">
          <input type="checkbox" className="checkbox" />
          <label htmlFor=""><span >Agree with </span> Terms & Conditions</label>
          </div>
        </form>

        <button className='signup'>Sign Up</button>
        <p>I'm already a member</p>
      </div>
      </div>


  );
}

export default App;
