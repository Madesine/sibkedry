import React from "react";
import "./css/Contacts.css";

function Contacts() {
  return (
    <>
      <h1 className="contacts__header">КОНТАКТНЫЕ ДАННЫЕ</h1>
      <hr/>
      <section className="contacts__contact-information">
        <h4 className="visually-hidden">Как с нами связаться</h4>
        <ul>
          <li className="contacts__list__element time">
            <h5>Время работы:</h5>
            <p>9:00-21:00</p>
          </li>
          <li className="contacts__list__element phone-number">
            <h5>Телефон:</h5>
            <p>+375295480202 </p>
          </li>
          <li className="contacts__list__element email">
            <h5>Email:</h5>
            <p>alex-bitner@yandex.ru</p>
          </li>
        </ul>
      </section>
      <section className="contacts__details">
        <h2 className="contacts__details__header">Реквизиты</h2>
        <p>
          <strong>ИП Битнер Александр Юрьевич </strong>
          <br />
          Адрес (юридический и почтовый) 224011, г. Брест, ул. Луцкая, д. 18.,
          оф. 171 <br/> Р/с BY50BPSB30133230320159330000 <br/> ОАO "БПС- Сбербанк" BIC Swift
          BPSBBY2X, 220005, г. Минск, бульвар имени Мулявина, 6 УНП 291721247
        </p>
      </section>
    </>
  );
}

export default Contacts;
