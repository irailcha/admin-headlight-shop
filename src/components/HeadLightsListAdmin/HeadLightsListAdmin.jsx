import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAdverts, selectLoading, selectError } from "../../redux/adverts-redux/selectors";
import { fetchAdverts, removeAdvert } from "../../redux/adverts-redux/operations";
import Loader from "../Loader/Loader";
import "./HeadLightsListAdmin.scss";
import SearchForm from '../SearchForm/SearchForm';

const HeadLightsListAdmin = () => {
  const dispatch = useDispatch();
  const [query, setQuery]=useState('');
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleRemove = async (id) => {
    await dispatch(removeAdvert(id));
    dispatch(fetchAdverts());
  };

  const filteredAdverts = adverts.filter((advert)=> advert.mark.toLowerCase().includes(query.toLowerCase()) ||
    advert.model.toLowerCase().includes(query.toLowerCase()) ||
    advert.partNumber.toLowerCase().includes(query.toLowerCase()));
  
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <SearchForm onSearch={setQuery}/>
    <div className="headlights">
      {error && <p className="error">{error}</p>}
      {filteredAdverts.length === 0 ? (
        <p>Оголошень немає.</p>
      ) : (
        <ul className="headlights__list">
          {filteredAdverts.map((advert) => (
          <li className="headlights__item" key={advert._id}>
          <div className="headlights__img-thumb">
            <img className="headlights__img" 
            src={advert.photo[0]} alt={`photo of ${advert.mark}`} loading="lazy" width={250} />
          </div>
          <p className="headlights__compatibility block">{advert.mark}{" "}{advert.model}</p>
          <p className="headlights__partNumber block"><strong>Номер деталі:</strong> {advert.partNumber}</p>
          <p className="headlights__price block">{advert.price} грн </p>
          <div className="headlights__buttons">
          <Link className="headlights__button block" to={advert._id}>Детальніше</Link>
          <button className="headlights__button" onClick={() => handleRemove(advert._id)}>Видалити</button>
          <Link className="headlights__button" to={`/edit/${advert._id}`}>Змінити</Link>

          </div>
        </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
};

export default HeadLightsListAdmin;
