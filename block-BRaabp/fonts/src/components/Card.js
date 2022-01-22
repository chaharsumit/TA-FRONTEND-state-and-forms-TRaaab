function Card(props){
  return (
    <section className='flex'>
      {
        props.fonts.map(font => (
          <article key={font.author} className='style-card flex' style={{fontFamily: font.name}}>
            <div className='style-info-container flex'>
              <h3>{font.name}</h3>
              <p>variable</p>
            </div>
            <p>{font.author}</p>
            <div className='font-text' style={{fontSize: `${props.state.range}px`}}>
              {props.state.text}
            </div>
          </article>
        )
        )
      }
    </section>
  );
}

export default Card;