import FeaturedCard from '../featuredCard/featuredCard';
import './featured.scss';
import useFetch from '../../hooks/useFetch';


const Featured = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featured">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, voluptates molestias. Assumenda dolores animi
          dignissimos, deserunt doloremque reiciendis quasi ducimus hic ea nulla
          sit rem labore adipisci sequi magnam iste?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Fetch product error..."
          : loading
          ? "loading"
          : data?.map((data) => <FeaturedCard product={data} key={data.id} />)}
      </div>
    </div>
  );
}

export default Featured
