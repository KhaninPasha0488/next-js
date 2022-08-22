import Link from "next/link";
import counter from "./store/counter";
import {observer} from "mobx-react-lite";
import Users from "./users";
const Home =observer( () => {
 return(<>
      <Link href="/users">
<a>
 users
</a>
      </Link>
      <h1>Hello world</h1>
         <div style={{width:"200px", height:"200px",border:" 1px solid black",margin:" 0 auto"}}>
           <div style={{ margin:"30px",fontSize:30,textAlign: 'center'}} >{counter.count}</div>
             <div style={{margin:"30px"}}>
                 <button style={{width:"60px", height:"20px"}} onClick={()=> counter.increment()}>+</button>
                 <button style={{width:"60px", height:"20px"}} onClick={()=> counter.decrement()}>-</button>
             </div>
         </div>

     </>
   
 )
});


 export default Home;