import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useState} from 'react'; /*Importação do Arquivo ou componente*/




function App() { //função ou metodo - OO

  const [cont, setCont] = useState(0);
  
  function clicando() {
    setCont(cont + 1);
   }

   function zerarCont() {
     setCont(0);
   }
   function diminuirCont() {
     setCont(cont - 1);
   }
  
  return (
    //JSX 
    <div className="App">
      <Header title= {cont}/>
        
        
        <input type="button" value ="Aumentar" onClick={clicando}/>
        <input type="button" value ="Diminuir" onClick={diminuirCont}/>
        <input type="button" value ="Zerar" onClick={zerarCont}/>

    </div>
  );
}

export default App;
