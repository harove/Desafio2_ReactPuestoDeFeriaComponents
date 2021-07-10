import Productos from "../../components/productos/Productos";
import stock1 from '../../data/productosSucursal1.json';
import stock2 from '../../data/productosSucursal2.json';
import { ProductoProps } from "../../models/models";

const Home = () => {

  const hayFrutilla = (stock: ProductoProps[]):boolean => stock.some(({nombre})=>nombre==="Frutilla")
  const hayProducto = (stock: ProductoProps[], name:string):boolean => stock.some(({nombre})=>nombre===name)
  

  return (
    <>
      <h1 className="text-center">Bienvenidos a mi Puesto de Feria Sucursal 1</h1>
      {hayProducto(stock1,"Manzana")&&<Productos productos = {stock1} />}
      <h1 className="text-center">Bienvenidos a mi Puesto de Feria Sucursal 2</h1>
      {stock2.some(({nombre})=>nombre==="Frutilla")&&<Productos productos = {stock2} />}
    </>
  );
};

export default Home;
