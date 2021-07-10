import Productos from "../../components/productos/Productos";
import Productos2 from "../../components/productos2/Productos2";
import stock1 from '../../data/productosSucursal1.json';
import stock2 from '../../data/productosSucursal2.json';



const Home = () => {
  return (
    <>
      <h1 className="text-center">Bienvenidos a mi Puesto de Feria Sucursal 1</h1>
      {stock1.some(({nombre})=>nombre==="Frutilla")&&<Productos productos = {stock1} />}
      <h1 className="text-center">Bienvenidos a mi Puesto de Feria Sucursal 2</h1>
      {stock2.some(({nombre})=>nombre==="Frutilla")&&<Productos productos = {stock2} />}
    </>
  );
};

export default Home;
