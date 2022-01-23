function Header(props){
  return (
    <header className='header flex'>
      <p className='flex-8 custom'>Custom <span>▼</span></p>
      <input onChange={props.handleText} value={props.state.text} placeholder='Type something...' className='flex-50' />
      <div className='range-container flex-30 flex'>
        <p className='flex-20'>{props.state.range}px <span>▼</span></p>
        <input onChange={props.handleRange} value={props.state.range} type="range" min="8" max="300" className='flex-75 slider' />
      </div>
      <p className='flex-5 reload' onClick={props.refresh}>↻</p>
    </header>
  )
}

export default Header;