import React, { useState } from "react";
import { Button } from "@ornikar/kitt";
import Modal from "../Modal";

export default function ModalLaucher() {
  const [isOpen, toggleModal] = useState(false);

  const handleModalToggle = () => {
    toggleModal(!isOpen);
  };

  const handleModalConfirmation = () => {
    toggleModal(false);
    console.log("click");
  };

  return (
    <>
      <Modal
        confirmationText="Appliquer"
        isOpen={isOpen}
        onModalConfirmation={handleModalConfirmation}
        onModalClose={handleModalToggle}
        title="Titre"
      >
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker. Le Lorem Ipsum est
        simplement du faux texte employé dans la composition et la mise en page
        avant impression. Le Lorem Ipsum est le faux texte standard de
        l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
        ensemble des morceaux de texte pour réaliser un livre spécimen de
        polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est
        aussi adapté à la bureautique informatique, sans que son contenu n'en
        soit modifié. Il a été popularisé dans les années 1960 grâce à la vente
        de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
        récemment, par son inclusion dans des applications de mise en page de
        texte, comme Aldus PageMaker. Le Lorem Ipsum est simplement du faux
        texte employé dans la composition et la mise en page avant impression.
        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les
        années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
        de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
        fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
        informatique, sans que son contenu n'en soit modifié. Il a été
        popularisé dans les années 1960 grâce à la vente de feuilles Letraset
        contenant des passages du Lorem Ipsum, et, plus récemment, par son
        inclusion dans des applications de mise en page de texte, comme Aldus
        PageMaker.
      </Modal>
      <Button onClick={handleModalToggle} type="primary">
        Show Modal{" "}
        <span role="img" aria-label="so cool">
          😎
        </span>
      </Button>
    </>
  );
}
