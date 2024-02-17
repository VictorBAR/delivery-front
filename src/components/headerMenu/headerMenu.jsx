import React, { useState, useEffect } from 'react';
import "./headerMenu.css"
import { categorias } from '../../dados';

const HeaderMenu = () => {
  const [categoriasList] = useState(categorias);

  const [categoriaAtiva, setCategoriaAtiva] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const firstElement = document.getElementById(categoriasList[0].id)
      // Verifica se a rolagem está acima da primeira categoria e desativa categoriaAtiva
      if (scrollPosition < firstElement.offsetTop) {
        setCategoriaAtiva('');
      } else {
        // Lógica para determinar a categoria ativa com base na posição de rolagem
        const novaCategoriaAtiva = categoriasList.find((categoria) => {
          const elemento = document.getElementById(categoria.id);
          if (elemento) {
            const { offsetTop, offsetHeight } = elemento;
            return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
          }
          return false;
        });

        if (novaCategoriaAtiva && novaCategoriaAtiva.id !== categoriaAtiva) {
          setCategoriaAtiva(novaCategoriaAtiva.id);
        }
      }

      // Lógica para mostrar/ocultar a barra de navegação com base na direção de rolagem
      const shouldShowNav = scrollPosition > firstElement.offsetTop;
      const navStyle = shouldShowNav ? 'fixed' : 'relative';
      console.log(navStyle);
      const topStyle = shouldShowNav ? 0 : 'auto';
    
      const navElement = document.getElementById('categoriaNav');
      if (navElement) {
        navElement.style.position = navStyle;
        navElement.style.top = topStyle;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categoriasList, categoriaAtiva]);

  const handleClickCategoria = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      window.scrollTo({
        top: elemento.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div id="categoriaNav" className='container'>
          <ul className='category-list'>
            {categoriasList.map((categoria) => (
              <li
                key={categoria.id}
                onClick={() => handleClickCategoria(categoria.id)}
                style={{ color: categoria.id === categoriaAtiva ? 'red' : 'black' }}
                className='category-item'
              >
                {categoria.nome}
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
