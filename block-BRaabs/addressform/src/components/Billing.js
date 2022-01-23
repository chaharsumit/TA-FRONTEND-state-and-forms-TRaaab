function Billing(props){
  return (
    <form className='Login-form' id="billing">
      {
        props.state.isSame 
        ?
          <>
          <label>
          <input onChange={props.handleCheckbox} type="checkbox" name="isSame" id="isSame" />Same as billing address
          </label>

          <label htmlFor='address'>Address</label>
          <input value={props.state.shipping.address} onChange={props.handleInput} type="text" name="address" id="address" placeholder='Enter address'/>

          <label htmlFor='zip'>Zip/Postal Code</label>
          <input value={props.state.shipping.zip} onChange={props.handleInput} type="text" name="zip" id="zip" placeholder='Enter zip'  />

          <label htmlFor='city'>City</label>
          <input value={props.state.shipping.city} onChange={props.handleInput} type="text" name="city" id="city" placeholder='Enter city' />

          <label htmlFor='country'>Country</label>
          <input value={props.state.shipping.country} onChange={props.handleInput} type="text" name='country' id="country" placeholder='Enter Password again' />
          </>
        :
          <>
          <label>
          <input onChange={props.handleCheckbox} type="checkbox" name="isSame" id="isSame" />Same as billing address
          </label>

          <label htmlFor='address'>Address</label>
          <input value={props.state.billing.address} onChange={props.handleInput} type="text" name="address" id="address" placeholder='Enter address'/>

          <label htmlFor='zip'>Zip/Postal Code</label>
          <input value={props.state.billing.zip} onChange={props.handleInput} type="text" name="zip" id="zip" placeholder='Enter zip'  />

          <label htmlFor='city'>City</label>
          <input value={props.state.billing.city} onChange={props.handleInput} type="text" name="city" id="city" placeholder='Enter city' />

          <label htmlFor='country'>Country</label>
          <input value={props.state.billing.country} onChange={props.handleInput} type="text" name='country' id="country" placeholder='Enter Password again' />
          </>
      }
    </form>
  )
}

export default Billing;

/* 

<form className='Login-form' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input onChange={this.handleInput} type="username" name="username" id="username" placeholder='Enter Username' className={username && "error"} />
        <span>{username}</span>

        <label htmlFor='email'>Email</label>
        <input onChange={this.handleInput} type="email" name="email" id="email" placeholder='Enter Email' className={email && "error"}  />
        <span>{email}</span>

        <label htmlFor='password'>Password</label>
        <input onChange={this.handleInput} type="password" name="password" id="password" placeholder='Enter Password' className={password && "error"} />
        <span>{password}</span>

        <label htmlFor='confirmPass'>Confirm Password</label>
        <input onChange={this.handleInput} type="password" name='confirmPass' id="confirmPass" placeholder='Enter Password again' className={confirmPass && "error"} />
        <span>{confirmPass}</span>

        <input onChange={this.handleInput} type="submit" value="submit" />

    </form>


*/


/*
{
        props.state.isSame 
        ?
          <>
          <label>
          <input onChange={props.handleCheckbox} type="checkbox" name="isSame" id="isSame" />Same as billing address
          </label>

          <label htmlFor='address'>Address</label>
          <input value={props.state.shipping.address} onChange={props.handleInput} type="text" name="address" id="address" placeholder='Enter address'/>

          <label htmlFor='zip'>Zip/Postal Code</label>
          <input value={props.state.shipping.zip} onChange={props.handleInput} type="text" name="zip" id="zip" placeholder='Enter zip'  />

          <label htmlFor='city'>City</label>
          <input value={props.state.shipping.city} onChange={props.handleInput} type="text" name="city" id="city" placeholder='Enter city' />

          <label htmlFor='country'>Country</label>
          <input value={props.state.shipping.country} onChange={props.handleInput} type="text" name='country' id="country" placeholder='Enter Password again' />
          </>
        :
          <>
          <label>
          <input onChange={props.handleCheckbox} type="checkbox" name="isSame" id="isSame" />Same as billing address
          </label>

          <label htmlFor='address'>Address</label>
          <input onChange={props.handleInput} type="text" name="address" id="address" placeholder='Enter address'/>

          <label htmlFor='zip'>Zip/Postal Code</label>
          <input onChange={props.handleInput} type="text" name="zip" id="zip" placeholder='Enter zip'  />

          <label htmlFor='city'>City</label>
          <input onChange={props.handleInput} type="text" name="city" id="city" placeholder='Enter city' />

          <label htmlFor='country'>Country</label>
          <input onChange={props.handleInput} type="text" name='country' id="country" placeholder='Enter Password again' />
          </>
      }

 */