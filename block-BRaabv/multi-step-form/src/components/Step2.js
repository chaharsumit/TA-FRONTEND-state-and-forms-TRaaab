function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username" className="flex-label flex">Message
        <textarea
          className="form-control"
          id="message"
          name="message"
          type="text"
          placeholder="Enter message"
          value={props.message}
          onChange={props.handleChange}
        />
      </label>
      
      <fieldset id="choice" className="choice flex">
        <label>
          <input onChange={props.handleChange} type="radio" id="choice1" value="The number one choice" name="choice" />
          The number one choice
        </label>
        <label>
          <input onChange={props.handleChange} type="radio" id="choice2" value="The number two choice" name="choice" />
          The number two choice
        </label>
      </fieldset>
    </div>
  );
}
export default Step2;