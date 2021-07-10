import Producto from "../producto/Producto";
import styles from "./productos.module.css";
import { ProductoProps } from "../../models/models";

interface ProductosPros {
    productos: ProductoProps[]
}

const Productos = ({productos}:ProductosPros) => {
  return (
    <div className={styles.wrapper}>
      <div className="card">
        <ul className="list-group">
          {productos.map((producto, index) => (
            <Producto
              key={index}
              nombre={producto.nombre}
              img_producto={producto.img_producto}
              categoria={producto.categoria}
              precio={producto.precio}
              stock={producto.stock}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Productos;
