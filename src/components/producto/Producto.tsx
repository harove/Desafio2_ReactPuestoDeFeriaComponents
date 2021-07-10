import { ProductoProps } from "../../models/models";

const Producto = ({nombre,img_producto,categoria,precio,stock}:ProductoProps)=>{
    return (
        <li className="list-group-item">
            {nombre}
        </li>
    )
}

export default Producto;