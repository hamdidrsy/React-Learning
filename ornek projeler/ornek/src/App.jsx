import './App.css'
//import Login from './Login'
import UrunKarti from "./UrunKarti"
import UrunFiyati from './UrunFiyati';

function App() {

  return (
    <div>
      <UrunFiyati>
        <UrunKarti productName={"Şapka"} price={1500} />
      </UrunFiyati>
    </div>
  );
}

export default App;
