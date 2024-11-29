import { useState } from 'react';
import './FiltersCategory.css'


export default function FiltersCategory() {

    const [active, setActive] = useState(0);

    const handleClick = (index) => {
      setActive(index)
    };

  return (
    <section className="category_container">
      <div className="category_container-buttons">
        <button
          onClick={() => handleClick(0)}
          className={active === 0 ? "filters_button active" : "filters_button"}
        >
          Nuevos
        </button>
        <button
          onClick={() => handleClick(1)}
          className={active === 1 ? "filters_button active" : "filters_button"}
        >
          Usados
        </button>
        <button
          onClick={() => handleClick(2)}
          className={active === 2 ? "filters_button active" : "filters_button"}
        >
          Cargadores
        </button>
      </div>
    </section>
  );
}
