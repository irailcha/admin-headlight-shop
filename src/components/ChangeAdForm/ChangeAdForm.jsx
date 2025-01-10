import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, updateAdvert } from "../../redux/adverts-redux/operations";
import { selectAdverts } from "../../redux/adverts-redux/selectors";
import './ChangeAdForm.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const advertSchema = Yup.object().shape({
  compatibility: Yup.string().required('Це поле обов\'язкове'),
  state: Yup.string().required('Це поле обов\'язкове'),
  typeOfLamps: Yup.string().required('Це поле обов\'язкове'),
  isOriginal: Yup.boolean(),
  partNumber: Yup.string().required('Це поле обов\'язкове'),
  material: Yup.string().required('Це поле обов\'язкове'),
  typeOfGlass: Yup.string().required('Це поле обов\'язкове'),
  price: Yup.number().required('Це поле обов\'язкове').min(0, 'Ціна не може бути від\'ємною'),
  description: Yup.string().required('Це поле обов\'язкове'),
});

const ChangeAdForm = () => {
  const { id } = useParams(); // Отримуємо ID оголошення з URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adverts = useSelector(selectAdverts);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    // Завантажуємо оголошення, якщо їх ще немає
    if (adverts.length === 0) {
      dispatch(fetchAdverts());
    } else {
      const advert = adverts.find((item) => item._id === id);
      if (advert) {
        setInitialValues({
          compatibility: advert.compatibility,
          state: advert.state,
          typeOfLamps: advert.typeOfLamps,
          isOriginal: advert.isOriginal,
          partNumber: advert.partNumber,
          material: advert.material,
          typeOfGlass: advert.typeOfGlass,
          price: advert.price,
          description: advert.description,
        });
      }
    }
  }, [id, adverts, dispatch]);

  const handleSubmit = async (values) => {
    const updatedAdvert = { ...values, _id: id }; // Додаємо ID до даних
    await dispatch(updateAdvert(updatedAdvert));
    navigate("/"); // Повертаємося до списку оголошень
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
        <Form>
          <h2 className="form-title">Редагувати оголошення</h2>

          <div className="field-container">
            <label htmlFor="compatibility">Сумісність:</label>
            <Field type="text" name="compatibility" />
            <ErrorMessage name="compatibility" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="state">Стан:</label>
            <Field type="text" name="state" />
            <ErrorMessage name="state" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="typeOfLamps">Тип ламп:</label>
            <Field type="text" name="typeOfLamps" />
            <ErrorMessage name="typeOfLamps" component="div" className="error-message" />
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
            <label htmlFor="material">Матеріал:</label>
            <Field type="text" name="material" />
            <ErrorMessage name="material" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="typeOfGlass">Тип скла:</label>
            <Field type="text" name="typeOfGlass" />
            <ErrorMessage name="typeOfGlass" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="price">Ціна:</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" component="div" className="error-message" />
          </div>
          <div className="field-container">
            <label htmlFor="description">Опис:</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <button type="submit">Зберегти зміни</button>
        </Form>
      </Formik>
    </section>
  );
};

export default ChangeAdForm;
