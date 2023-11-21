import React, { useState } from "react";
import Ex3Modal from "./Ex3Modal";

const Ex3State = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <button onClick={onOpen}>모달창 열기</button>
      {isOpen && <Ex3Modal onClose={onClose} />}
<<<<<<< HEAD
      {/* <Ex3Modal onClose={onClose} /> Ex3Modal컴포넌트에 props(속성) */}
=======
      {/* <Ex3Modal onClose={onClose} /> Ex3Modal컴포넌트에 props(속성) 전달 */}
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
    </section>
  );
};

export default Ex3State;
