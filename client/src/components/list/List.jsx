import useFetch from '../../hooks/useFetch';
import FeaturedCard from '../featuredCard/featuredCard';
import './list.scss';


const List = ({ maxPrice, sort, catId, selectedSubCats }) => {

    const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCats.map(
        (category) => `&[filters][sub_categories][id][$eq]=${category}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}
      `
    );

  return (
    <div className="list">
        {data?.map(product => (
            <FeaturedCard product={product} key={product.id} />
        ))}
    </div>
  )
}

export default List
