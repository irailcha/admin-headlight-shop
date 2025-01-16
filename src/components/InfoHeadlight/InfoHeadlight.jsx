import React, { useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneAdvert } from '../../redux/adverts-redux/operations';
import { selectAdvert } from '../../redux/adverts-redux/selectors';
import SimpleLightBox from '../SimpleLighBox/SimpleLightBox';
import Loader from '../Loader/Loader';
import { IoChevronBackSharp } from "react-icons/io5";
import './InfoHeadlight.scss';

const InfoHeadlight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { advertId } = useParams();
  const advert = useSelector(selectAdvert);

  useEffect(() => {
    dispatch(getOneAdvert(advertId));
  }, [dispatch, advertId]);

  // Якщо рекламне оголошення не знайдено
  if (!advert) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  
  const {
    mark,
    model,
    state,
    typeOfLamps,
    side,
    isOriginal,
    partNumber,
    price,
    photo = [],
    description,
    videoUrl = '',
  } = advert;

  return (
    <section className="info-section">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <IoChevronBackSharp /> На попередню
      </button>
      <div className="info">
        <div className="info__first-section">
          <div className="info__first-section__thumb-img">
            {photo[0] && (
              <img src={photo[0]} className='info__first-section__main-img' alt="Головне фото" width='100%' />
            )}
          </div>
          <SimpleLightBox photo={photo}/>
        </div>
        <div className="info__second-section">
          <h2>{mark} {model}</h2>
          <h3>
            <strong className='info__second-section-title'>Номер деталі:</strong> {partNumber}
          </h3>
          <p className="info__second-section-price">{price} грн</p>
          <p><strong className='info__second-section-title'>Стан:</strong> {state}</p>
          <p><strong className='info__second-section-title'>Тип лампи:</strong> {typeOfLamps}</p>
          <p><strong className='info__second-section-title'>Сторона:</strong> {side}</p>
          <p><strong className='info__second-section-title'>Оригінал:</strong> {isOriginal ? "Так" : "Ні"}</p>
          <p>
            <strong className="info__second-section-title">Посилання на відеоогляд:</strong>
            {videoUrl ? (
              <a href={videoUrl}>Переглянути відео</a>
            ) : (
              <span>Відео відсутнє</span>
            )}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoHeadlight;