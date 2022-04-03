import Jumbotron from './components/jumbotron/index'
import jumbodata from './fixtures/jumbo.json';
function App() {
  return (
    <div>
   <Jumbotron.Container>
   {jumbodata.map((item)=>(
     <Jumbotron key={item.id} direction={item.direction}>
       <p>{item.title}</p>
     </Jumbotron>
   ))}
   </Jumbotron.Container>
   </div>
  );
}

export default App;
