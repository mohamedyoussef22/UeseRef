import { Button} from 'react-bootstrap'
import {useRef} from 'react'
export default function Ref() {
  const lastPAR= useRef()

  const moveDown=()=>{
   lastPAR.current.scrollIntoView({behavior:"smooth" ,block:"center"})
  }
  return (
 
  <>

  <h1>how to use...useRefRef</h1>
  <h2>go to down</h2>
  
  <Button  onClick={moveDown} type="button"class="btn btn-warning">Base class</Button>
  

  <section>
  <img src="https://picsum.photos/id/400/400/300"  />
  <h2>mohamed youssef</h2>
  <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
  </section>
  
  <section>
  <img src="https://picsum.photos/id/600/400/300"  />
  <h2>WWFs Symbol</h2>
  <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
  </section>
  <section>
  <img src="https://picsum.photos/id/600/400/300"  />
  <h2>WWFs Symbol</h2>
  <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
  </section>
  <section>
  <img src="https://picsum.photos/id/700/400/300"  />
  <h2>WWFs Symbol</h2>
  <p ref={lastPAR}>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
  </section>
  
  </>
  )
}

 
