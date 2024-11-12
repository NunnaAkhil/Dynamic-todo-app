import { useState } from "react"
function Year() {
    const highLightYear =<h1>2024</h1>;
    const [ishighlight, setIsHighlight]= useState(false);
    const handleclick = ()=> {
        setIsHighlight(!ishighlight);
    }

  return (
    <div>
    <h1 className={ishighlight ? "highlight" : "" } >{highLightYear}</h1>
    <button onClick={handleclick}>Click Me</button>
    </div>
  )
}

export default Year;
