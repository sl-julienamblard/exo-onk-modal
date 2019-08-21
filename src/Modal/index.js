/* eslint-disable no-unused-expressions */
import React from 'react';
import { Button } from '@ornikar/kitt';

export default function Modal({header = null, content, footer = null}) {
  return (
  <div className="modal">
    <div className="modal__header">
      {header !== null &&<div className="modal__header__content">{header}</div>}
      <div className="modal__header__close">
        <Button icon='cross'/>
      </div>
    </div>
    <div className="modal__content">
      <div>Pourquoi l'utiliser?
On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</div>
    </div>
    {footer !== null &&
    <div className="modal__footer">
      <div className="modal__footer__content">{footer}</div>
    </div>
    }
  </div>);
}