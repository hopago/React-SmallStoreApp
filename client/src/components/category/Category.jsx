import './category.scss';
import { Link } from 'react-router-dom';


const Category = () => {
  return (
    <div className="category">
        <div className="col">
            <div className="row">
                <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l-242e74.png" alt="" />
                <button>
                    <Link to='/products/1' className='link'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-chronograph-44-mm-21030445101001-l-bf18d2.png" alt="" />
                <button>
                    <Link to='/products/2' className='link'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103004-l-21523f.png" alt="" />
                <button>
                    <Link to='/products/3' className='link'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l-242e74.png" alt="" />
                <button>
                    <Link to='/products/cat' className='link'>Sale</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-planet-ocean-600m-co-axial-master-chronometer-gmt-45-5_mm-21592462201001-l-738889.png" alt="" />
                <button>
                    <Link to='/products/cat' className='link'>Sale</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-racing-co-axial-master-chronometer-chronograph-44-25-mm-32930445104001-l-2d7fa5.png" alt="" />
                <button>
                    <Link to='/products/cat' className='link'>Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Category
