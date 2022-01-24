function handleImage(step){
  let result = '';
  switch (step){
    case 1:
      result = "image_1.jpeg";
      break;
    case 2:
      result = "image_2.jpeg";
      break;
    case 3:
      result = "image_3.jpeg";
      break;
    default:
      break;
  }
  return result;
}

function Aside(props){
  return (
    <div className="aside-image-container">
      <img src={handleImage(props.currentStep)} />
    </div>
  )
}

export default Aside;