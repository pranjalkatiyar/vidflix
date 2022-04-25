import React from 'react'
import {JumbotronContainer} from './containers/jumbotron'
import { useAuthListener } from './hooks';

export default function App(){
  const{user} = useAuthListner();
  console.log(user); 
}

// const App = () => {
//   return (
//   <JumbotronContainer/>

//   )
// }


//export default App; 