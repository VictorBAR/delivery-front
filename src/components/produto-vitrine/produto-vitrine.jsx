import "./produto-vitrine.css";
import { CartContext } from "../../contexts/cart-context";
import { useContext, useEffect, useState } from "react";
import bag from "../../assets/bag-black.png";
import "../modal/modal.css";
import Modal from "../modal/modal";
// import Modal from "../modal/modal";

function ProdutoVitrine(props) {
    const { AddItemCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    function AddItem() {
        setShowModal(true);
    }

    function handleAddToCart() {
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1
        };

        AddItemCart(item);
        setShowModal(false);
    }

    function handleCloseModal() {
        setShowModal(false);
    }
    

    return (
        <div className="produto-box text-center" onClick={AddItem}>
            <img src={props.foto} alt="Foto" />

            <div>
                <h2>{props.nome}</h2>
                <p className="prod-vitrine-descricao">{props.descricao}</p>
                <p className="prod-vitrine-preco">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.preco)}
                </p>
            </div>

            {showModal && (
                <Modal item={props} handleAddToCart={handleAddToCart} handleCloseModal={handleCloseModal} />
            )}
        </div>
    );
}

export default ProdutoVitrine;