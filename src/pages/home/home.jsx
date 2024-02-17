import { useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
/* import api from "../../services/api.js"; */
import { lista_produtos, categorias } from "../../dados.js"
import HeaderMenu from "../../components/headerMenu/headerMenu.jsx";

function Home(){

    const [produtos] = useState(lista_produtos);
    const [categoriasList] = useState(categorias);

    return <>
        <Navbar showMenu={true} />
    
        <HeaderMenu/>

        <div className="text-center">
            {categoriasList.map(function (categoria) {
                return (
                    <>
                        <h1>{categoria.nome}</h1>
                        <div key={categoria.id} id={categoria.id} className="produtos text-left">
                            {produtos.map(function (prod) {
                                if (prod.categoria === categoria.nome) {
                                    return (
                                    <ProdutoVitrine
                                        key={prod.id_produto}
                                        id={prod.id_produto}
                                        nome={prod.nome}
                                        descricao={prod.descricao}
                                        preco={prod.preco}
                                        foto={prod.foto}
                                        detalhes={prod.detalhes}
                                    />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </>
                );
            })}
        </div>
    </>
}

export default Home;