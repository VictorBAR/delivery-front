import React from "react";
import bag from "../../assets/bag-black.png";
import "./modal.css";

function Modal({
  item,
  handleAddToCart,
  handleCloseModal,
}) {
  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal} />
      <div className="modal">
        <div className="modal-content">
          <img src={item.foto} />
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <div>
            <label>Borda Recheada?</label>
            <select
              /* value={isBorderFilled ? "filled" : "unfilled"}
              onChange={(e) => setIsBorderFilled(e.target.value === "filled")} */
            >
              <option value="unfilled">Não</option>
              <option value="filled">Sim</option>
            </select>
          </div>
          <div>
            <label>Algum pedido especial?</label>
            <input
              type="text"
             /*  value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)} */
            />
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn btn-cart" onClick={handleAddToCart}><img src={bag} className="icon" />Adicionar ao carrinho</button>
          <button className="btn btn-cart" onClick={handleCloseModal}>Cancelar</button>
        </div>
      </div>
    </>
  );
}

export default Modal;