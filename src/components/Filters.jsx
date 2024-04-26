import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filtros">
      <div>
        <label htmlFor={minPriceFilterId}>precio</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2000"
          value={filters.minPrice}
          onChange={handleChangePrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          name="category"
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Teléfonos</option>
        </select>
      </div>
    </section>
  );
}