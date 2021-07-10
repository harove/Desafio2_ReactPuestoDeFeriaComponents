import Producto from "../producto/Producto";
import stock from "../../data/productosSucursal2.json";
import styles from "./productos2.module.css";

const Productos2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className="card">
        <ul className="list-group">
          {stock.map((producto, index) => (
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

export default Productos2;
