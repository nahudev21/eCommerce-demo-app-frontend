import './FiltersCategory.css'


export default function FiltersCategory() {
  return (
    <section className='category_container'>
      <div>
        <h3>Categorias</h3>
      </div>
      <div>
        <input value="Gama Baja"/>
        <input value="Gama Media"/>
        <input value="Gama Alta"/>
      </div>
    </section>
  )
}
