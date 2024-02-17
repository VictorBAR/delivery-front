import React from "react";
import bag from "../../assets/bag-black.png";
import "./modal.css";

function Modal({
  item,
  handleAddToCart,
  handleCloseModal,
}) {

  console.log(item)

  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal} />
      <div className="modal">
        <div className="modal-content">
          <img src={item.foto} />
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          {item.detalhes && item.detalhes.map((detail, index) => {
            if (detail.tipo === "select") {
              return (
                <div key={index}>
                  <label>{detail.nome}</label>
                  <select>
                    {detail.opcoes.map((opcao, index) => (
                      <option key={index} value={opcao}>{opcao}</option>
                    ))}
                  </select>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <label>{detail.nome}</label>
                  <input type="text" />
                </div>
              );
            }
          })}
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