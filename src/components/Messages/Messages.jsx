import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, markMessageAsRead } from '../../redux/messages-redux/operations';
import { selectMessages, selectLoading, selectError } from '../../redux/messages-redux/selectors';
import Loader from '../Loader/Loader';
import './Messages.scss';

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  const toggleMessage = (id, isRead) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);

    // Позначаємо повідомлення як прочитане
    if (!isRead) {
      dispatch(markMessageAsRead(id));
    }
  };

  return (
    <div className="messages-container">
      <h2>Список повідомлень</h2>
      {error && <p className="error">{error}</p>}
      {messages.length > 0 ? (
        messages.map((message) => (
          <div
            className={`message-item ${!message.isRead ? 'unread' : ''}`} // Додаємо клас для непрочитаних повідомлень
            key={message._id}
          >
            <div className="message-header">
              <p><strong>Оголошення:</strong> {message.advert?.compatibility || "Оголошення не знайдено"}</p>
              <p><strong>ID:</strong> {message.advert?._id || "ID не знайдено"}</p>
            </div>
            <div className="message-meta">
              <p><strong>Телефон:</strong> {message.phone}</p>
              <p><strong>Дата:</strong> {new Date(message.createdAt).toLocaleString()}</p>
            </div>
            <button
              className="message-toggle"
              onClick={() => toggleMessage(message._id, message.isRead)}
            >
              {expandedMessageId === message._id ? "Закрити" : "Відкрити"}
            </button>
            {expandedMessageId === message._id && (
              <div className="message-content">
                <p><strong>Повідомлення:</strong> {message.message}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Немає повідомлень</p>
      )}
    </div>
  );
};

export default Messages;
