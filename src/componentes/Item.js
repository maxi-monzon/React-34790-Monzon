import { Link } from "react-router-dom"
import React from "react"
import { toast } from "react-toastify"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";



   
  const Item = ({titulo, imagen, precio, descripcion, id}) => {
    return (
        <div className="cards">
      <Card className="w-96">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={imagen}
            className="h-full w-full card__img"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
          {titulo}
          </Typography>
          <Typography className="card__description">
            {descripcion}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">Precio: {precio}</Typography>
          <Button className="card__button">
          <Link to={`/item/${id}`} >
                    Ver detalle
                </Link>
          </Button>
        </CardFooter>
      </Card>
      </div>
    );
  }

  export default Item




  // const Item = ({titulo, imagen, precio, id}) => {

//     return (
//         <article className="product__card card">
//             <h1 className="card__title">{titulo} </h1>
//             <h2>${precio}</h2>
//             <img src={imagen} alt={titulo} className="card__img" />
//             <button className="card__button">
//                 {}
//                 <Link to={`/item/${id}`} >
//                     Ver detalle
//                 </Link>
//             </button>
//         </article>
//     )
// }