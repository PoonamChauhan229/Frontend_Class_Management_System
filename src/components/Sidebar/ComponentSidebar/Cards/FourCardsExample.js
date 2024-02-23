import { firstcardExample, secondcardExample } from "../../../../utilis/constant";
import CardExample from './CardExample'

const FourCardsExample=()=>{
  return (

    <>
    
    <div className="row">
          <div className="col-lg-6">
            {firstcardExample.map((element,index)=>(
              <CardExample {...element} key={index}/>
            ))}
          </div>

          <div className="col-lg-6">
            {secondcardExample.map((element,index)=>(
              <CardExample {...element} key={index}/>
            ))}
          </div>
         
        </div>
    </>
  )

}

export default FourCardsExample;
