// QualificationItem.jsx
import React from "react";

const QualificationItem = ({ item, modalState, toggleModal }) => {
  const isLeft = item.position === "left";

  return (
    <>
      <div className="qualification__data">
        {/* Left content */}
        {isLeft ? (
          <div
            onClick={() => toggleModal(item.id)}
            className="qualification__content-clickable">
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">{item.calendar}</div>
          </div>
        ) : (
          <div></div>
        )}

        {/* Center timeline */}
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>

        {/* Right content */}
        {!isLeft ? (
          <div
            onClick={() => toggleModal(item.id)}
            className="qualification__content-clickable">
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">{item.calendar}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Modal */}
      <div
        className={
          modalState === item.id
            ? "qualification__modal active-modal"
            : "qualification__modal"
        }>
        <div className="qualification__modal-content">
          <i
            onClick={() => toggleModal(null)}
            className="uil uil-x qualification__modal-close"></i>

          <div className="modal__header">
            <img
              src={item.logo}
              alt={`${item.modalTitle} Logo`}
              className="company__logo"
            />
            <h3 className="qualification__modal-title">{item.modalTitle}</h3>
          </div>

          <p
            className="qualification__modal-description"
            dangerouslySetInnerHTML={{ __html: item.modalDescription }}
          />

          <ul className="qualification__modal-details grid">
            {item.modalDetails.map((detail, index) => (
              <li key={index} className="qualification__modal-detail">
                <i className="uil uil-check-circle qualification__modal-icon"></i>
                <p
                  className="qualification__modal-info"
                  dangerouslySetInnerHTML={{ __html: detail }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default QualificationItem;
