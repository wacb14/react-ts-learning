import { Modal } from './components';
import { useModalContext } from './context';

function App() {
  const { setState } = useModalContext();

  function openModal() {
    setState(true);
  }

  return (
    <>
      <Modal>
        <div>
          <h1>Modal title</h1>
          <p>Modal content</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            mollitia ad aspernatur accusamus. Ut enim consequuntur possimus
            mollitia ducimus!
          </p>
        </div>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
    </>
  );
}

export default App;
