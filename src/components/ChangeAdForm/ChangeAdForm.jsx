import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, updateAdvert } from "../../redux/adverts-redux/operations";
import { selectAdverts } from "../../redux/adverts-redux/selectors";
import './ChangeAdForm.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoMdClose } from "react-icons/io";
import { Alert } from '@mui/material';
import { RiSendPlaneFill } from "react-icons/ri";


const advertSchema = Yup.object().shape({
  mark: Yup.string().required('Це поле обов\'язкове'),
  model: Yup.string().required('Це поле обов\'язкове'),
  state: Yup.string().required('Це поле обов\'язкове'),
  typeOfLamps: Yup.string().required('Це поле обов\'язкове'),
  side: Yup.string().required('Це поле обов\'язкове'),
  isOriginal: Yup.boolean(),
  partNumber: Yup.string().required('Це поле обов\'язкове'),
  price: Yup.number().required('Це поле обов\'язкове').min(0, 'Ціна не може бути від\'ємною'),
  photo: Yup.array()
    .test("fileFormat", "Файли мають бути у форматі JPEG, WEBP або PNG", (value) =>
      value.every((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type))
    )
    .test("fileSize", "Розмір файлу не має перевищувати 5 МБ", (value) =>
      value.every((file) => file.size <= 5 * 1024 * 1024)
    ),
    description: Yup.string().required('Це поле обов\'язкове')
  });


const ChangeAdForm = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adverts = useSelector(selectAdverts);
  const [initialValues, setInitialValues] = useState(null);
  const [currentPhotos, setCurrentPhotos] = useState([]); 
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (id && adverts.length === 0) {
      dispatch(fetchAdverts());
    } else {
      const advert = adverts.find((item) => item._id === id);
      if (advert) {
        setInitialValues({
          mark: advert.mark,
          model: advert.model,
          state: advert.state,
          typeOfLamps: advert.typeOfLamps,
          side: advert.side,
          isOriginal: advert.isOriginal,
          partNumber: advert.partNumber,
          price: advert.price,
          description: advert.description,
          photo: [], 
          videoUrl: advert.videoUrl,
        });
        setCurrentPhotos(advert.photo || []);
      }
    }
  }, [id, adverts, dispatch]);

  const handleSubmit = async (values) => {
    if (!id) {
      console.error("ID не определено!");
      return;
    }
  
    const formData = new FormData();
    formData.append("mark", values.mark);
    formData.append("model", values.model);
    formData.append("state", values.state);
    formData.append("typeOfLamps", values.typeOfLamps);
    formData.append("side", values.side);
    formData.append("isOriginal", values.isOriginal);
    formData.append("partNumber", values.partNumber);
    formData.append("price", values.price);
    formData.append("description", values.description);
  
    // Добавляем новые фотографии
    if (values.photo) {
      values.photo.forEach((file) => {
        formData.append("photo", file);
      });
    }
  
    // Добавляем текущие фотографии
    currentPhotos.forEach((photo) => {
      if (typeof photo === "string") {
        formData.append("currentPhotos", photo);
      }
    });
  
  
    await dispatch(updateAdvert({ id, formData }));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    navigate("/headlightslist");
  };
  
  

  const removePhoto = (index) => {

    setCurrentPhotos((prev) => prev.filter((_, i) => i !== index));
  };


  if (!initialValues) {
    return <p>Завантаження...</p>;
  }

  return (
    <section className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={advertSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
        <Form className="form">
        {showSuccess && (
              <Alert
                icon={<RiSendPlaneFill fontSize="inherit" />}
                severity="success"
                className="success-alert"
              >
                Повідомлення успішно відправлено!
                Протягом декількох хвилин з Вами зв'яжеться наш спеціаліст!
              </Alert>
            )}
          <h2 className="form-title">Редагувати оголошення</h2>

          <div className="field-container">
            <label htmlFor="mark">Марка:</label>
            <Field type="text" name="mark" />
            <ErrorMessage name="mark" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="model">Модель:</label>
            <Field type="text" name="model" />
            <ErrorMessage name="model" component="div" className="error-message" />
          </div>
           <div className='field-container'>
              <label htmlFor="state">Стан</label>
              <Field as="select" name="state">
             <option value="нове">Нова</option>
             <option value="вживане">Вживана</option>
           </Field>
              <ErrorMessage name="state" component="div" className="error-message" />
            </div>
          <div className="field-container">
            <label htmlFor="typeOfLamps">Тип ламп:</label>
            <Field type="text" name="typeOfLamps" />
            <ErrorMessage name="typeOfLamps" component="div" className="error-message" />
          </div>
          <div className='field-container'>
              <label htmlFor="side">Сторона</label>
              <Field as="select" name="side">
             <option value="ліва">Ліва</option>
             <option value="права">Права</option>
             <option value="комплект">Комплект</option>
           </Field>
              <ErrorMessage name="side" component="div" className="error-message" />
            </div>
          <div className="field-container">
            <label htmlFor="isOriginal">Оригінальність:</label>
            <Field type="checkbox" name="isOriginal" />
            <ErrorMessage name="isOriginal" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="partNumber">Номер деталі:</label>
            <Field type="text" name="partNumber" />
            <ErrorMessage name="partNumber" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="price">Ціна:</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" component="div" className="error-message" />
          </div>

            <div className="field-container ">
  <label htmlFor="photo">Додати нові фото:</label>
  <div className="photo-field">
  <input
  className="field-container__photo-field"
    name="photo"
    type="file"
    multiple
    onChange={(event) => {
      const files = Array.from(event.currentTarget.files);
      const previews = files.map((file) => URL.createObjectURL(file));
      setFieldValue("photo", files);
      setCurrentPhotos((prev) => [...prev, ...previews]); 
    }}
  />
  <div className="photo-preview-container">
 <ul> {currentPhotos.map((photo, index) => (
      <li key={index} className="photo-item">
        <img src={photo} alt={`Фото ${index + 1}`} className="photo-preview" />
        <button
          type="button"
          onClick={() => removePhoto(index)}
          className="remove-photo-button"
        >
          <IoMdClose />
        </button>
      </li>
    ))}</ul>
  </div>
  </div>
  <ErrorMessage name="photo" component="div" className="error-message" />

</div>

                      <div className='field-container'>
                        <label htmlFor="videoUrl">Посилання на відео</label>
                        <Field name="videoUrl" type="url" />
                        <ErrorMessage name="videoUrl" component="div" className="error-message" />
                      </div>
          <div className="field-container">
            <label htmlFor="description">Опис:</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <button type="submit">Зберегти зміни</button>
        </Form>
        )}
      </Formik>
    </section>
  );
};

export default ChangeAdForm;
