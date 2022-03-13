import {
  BrowserRouter,  /*  Aqui ficam os componentes de rotas da biblioteca do from abaixo*/
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
     /* Aqui você inicia a rota, e a navbar ta ai pq ela vai estar em tdas*/
     /* O routes vai configurar rota por rota  */
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
