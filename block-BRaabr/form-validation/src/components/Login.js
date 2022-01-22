function Login(){
  return (
    <form className='Login-form'>
      <label htmlFor='text'>Text Input</label>
      <input type="text" name="text" id="text" />
      <label htmlFor='date'>Date</label>
      <input type="data" name="data" id="date" />
      <label htmlFor='file'>File Input</label>
      <input type="file" name="file" id="file"/>
      <label htmlFor='read'>Read-Only Input</label>
      <input type="text" name='read' id="read" value="this can only be copied" readOnly />
      <label htmlFor='disab_input'>Disabled Input</label>
      <input type="text" name='disab_input' id="disab_input" disabled/>
      <label htmlFor='textarea'>Textarea</label>
      <textarea rows='4' name='textarea' id='textarea' />
      <label htmlFor='textarea_diabled'>Textarea Disabled</label>
      <textarea rows='4' name='textarea_disabled' id='textarea_disabled' disabled />
    </form>
  )
}

export default Login;