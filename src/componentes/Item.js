import { Link } from "react-router-dom"
import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";


const Item = ({ id, titulo, precio, foto,description }) => {
    return (
        <div className="w-full md:w-4/12 px-4">
            <Card>
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full h-64 bg-purple-500 rounded-t"></div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <img
                                alt="..."
                                src={foto}
                                className="shadow-lg rounded-full max-w-full mx-auto"
                                style={{ maxWidth: "120px" }}
                            />
                        </div>
                        <div className="w-full px-4 text-center">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                        {titulo}
                                    </span>
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                        {description}
                                    </span>
                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                        {precio}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-center">
                        <Button
                            color="purple"
                            buttonType="link"
                            size="lg"
                            ripple="light"
                        > 
                            <Link to={`./item/${id}`}>Comprar</Link>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Item;



  // const Item = ({titulo, foto, precio, description, id}) => {
  //   return (
  //       <div className="cards">
  //     <Card className="w-96">
  //       <CardHeader color="blue" className="relative h-56">
  //         <img
  //           src={foto}
  //           className="h-full w-full card__img"
  //         />
  //       </CardHeader>
  //       <CardBody className="text-center">
  //         <Typography variant="h5" className="mb-2">
  //         {titulo}
  //         </Typography>
  //         <Typography className="card__description">
  //           {description}
  //         </Typography>
  //       </CardBody>
  //       <CardFooter divider className="flex items-center justify-between py-3">
  //         <Typography variant="small">Precio: {precio}</Typography>
  //         <Button className="card__button">
  //         <Link to={`/item/${id}`} >
  //                   Comprar
  //               </Link>
  //         </Button>
  //       </CardFooter>
  //     </Card>
  //     </div>
  //   );
  // }

  // export default Item




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