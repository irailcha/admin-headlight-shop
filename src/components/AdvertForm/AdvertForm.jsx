import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createAdvert } from '../../redux/adverts-redux/operations';
import './AdvertForm.scss';
import { IoMdClose } from "react-icons/io";


const advertSchema = Yup.object().shape({
  mark: Yup.string().required('Це поле обов\'язкове'),
  model: Yup.string().required('Це поле обов\'язкове'),
  state: Yup.string().required('Це поле обов\'язкове'),
  typeOfLamps: Yup.string().required('Це поле обов\'язкове'),
  side: Yup.string().required('Це поле обов\'язкове'),
  isOriginal: Yup.boolean().required('Це поле обов\'язкове'),
  partNumber: Yup.string().required('Це поле обов\'язкове'),
  price: Yup.number().required('Це поле обов\'язкове').min(0, 'Ціна не може бути від\'ємною'),
  photo: Yup.array()
  .min(1, 'Має бути хоча б одне фото')
  .test("fileFormat", "Файли мають бути у форматі JPEG, WEBP або PNG", (value) =>
    value.every((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type))
  )
  .test("fileSize", "Розмір файлу не має перевищувати 5 МБ", (value) =>
    value.every((file) => file.size <= 5 * 1024 * 1024)
  ),
  videoUrl: Yup.string().url('Невірне посилання на відео'),
  description: Yup.string().required('Це поле обов\'язкове'),
});

const AdvertForm = () => {
  const dispatch = useDispatch();
const [currentPhotos, setCurrentPhotos] = useState([]); 
  const handleSubmit = async (values) => {
    const formData = new FormData();
    
    // Додаємо всі поля до FormData
    formData.append('mark', values.mark);
    formData.append('model', values.model);
    formData.append('state', values.state);
    formData.append('typeOfLamps', values.typeOfLamps);
    formData.append('isOriginal', values.isOriginal);
    formData.append('side', values.side);
    formData.append('partNumber', values.partNumber);
    formData.append('price', values.price);
    formData.append('description', values.description);

    // Додаємо фото
    values.photo.forEach((file) => {
      formData.append("photo", file);
    });

    // Додаємо відео
    if (values.videoUrl) {
      formData.append('videoUrl', values.videoUrl);
    }

    try {
      // Викликаємо action для додавання оголошення
      await dispatch(createAdvert(formData));
      alert('Оголошення додано!');

    } catch (error) {
      alert('Сталася помилка при додаванні оголошення');
    }

    
  };


  const removePhoto = (index) => {
    setCurrentPhotos((prev) => prev.filter((_, i) => i !== index));
  };


  const validateFiles = (files) => {
    if (!files.length) return 'Має бути хоча б одне фото';
    for (let file of files) {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        return 'Файли мають бути у форматі JPEG, WEBP або PNG';
      }
      if (file.size > 5 * 1024 * 1024) {
        return 'Розмір файлу не має перевищувати 5 МБ';
      }
    }
    return undefined;
  };
  



  return (
    <section className="form-container">
      <Formik
        initialValues={{
          mark: '',
          model: '',
          state: '',
          typeOfLamps: '',
          side: '',
          isOriginal: false,
          partNumber: '',
          price: 0,
          photo: [],
          videoUrl: '',
          description: '',
        }}
        validationSchema={advertSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, setErrors }) => (
          <Form>
             <h2 className="form-title">Створити оголошення</h2>
            <div className='field-container'>
              <label htmlFor="mark">Марка</label>
              <Field name="mark" type="text" />
              <ErrorMessage name="mark" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="model">Модель</label>
              <Field name="model" type="text" />
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
            <div className='field-container'>
              <label htmlFor="typeOfLamps">Тип ламп</label>
              <Field name="typeOfLamps" type="text" />
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
            <div className='field-container'>
              <label htmlFor="isOriginal">Оригінальність</label>
              <Field type="checkbox" name="isOriginal" />
              <ErrorMessage name="isOriginal" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="partNumber">Номер деталі</label>
              <Field name="partNumber" type="text" />
              <ErrorMessage name="partNumber" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="price">Ціна</label>
              <Field name="price" type="number" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="photo">Фото</label>
              <div className="photo-field">
              <input
              className="field-container__photo-field"
                name="photo"
                type="file"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files);
                  const error = validateFiles(files);
                  const previews = files.map((file) => URL.createObjectURL(file));
                  if (error) {
                    setFieldValue('photo', []);
                    setErrors({ photo: error });
                  } else {
                    setFieldValue('photo', files);
                    setCurrentPhotos((prev)=> [...prev, ...previews])

                  }
                }}
              />
              
               <div className="photo-preview-container">
                {currentPhotos.map((photo, index) => (
                    <div key={index} className="photo-item">
                      <img src={photo} alt={`Фото ${index + 1}`} className="photo-preview" />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="remove-photo-button"
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  ))}
                </div>
                </div>
              <ErrorMessage name="photo" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="videoUrl">Посилання на відео</label>
              <Field name="videoUrl" type="url" />
              <ErrorMessage name="videoUrl" component="div" className="error-message" />
            </div>
            <div className='field-container'>
              <label htmlFor="description">Опис</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>
            <button type="submit">Додати оголошення</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AdvertForm;
