import React, { useState } from "react";
import { Button } from "@ornikar/kitt";
import Modal from "../Modal";

export default function ModalLaucher() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setIsOpen(!isOpen)}>
        Show Modal{" "}
        <span role="img" aria-label="so cool">
          😎
        </span>
      </Button>
      <Modal isOpen={isOpen} title={"Titre"} onClose={() => setIsOpen(false)}>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
      </Modal>
    </>
  );
}
