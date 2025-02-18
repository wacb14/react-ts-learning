import { useRef, useState } from 'react';

// OBJECTIVE: useRef allows to create a mutable reference that remains throughout the life cycle of the component without re-rendering.
// OBJECTIVE 2: Make a reference to a DOM element.

// EXAMPLE: A bookmark to save the last read page (it doesn't modify the content of the book)

export function BookReader() {
  // This example is to illustrate the difference in rendering
  const currentPageRef = useRef<number>(1);
  const [currentPageState, setCurrentPageState] = useState<number>(1);
  const [inputValue, setInputValue] = useState<number>(0);

  // This example is to show how to access a DOM element using useRef
  const inputPage = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (!inputPage.current) {
      alert("There's no reference to this element");
      return;
    }
    inputPage.current.focus();
  }

  function PreviousPage(): void {
    if (currentPageRef.current === 1) {
      alert(
        `You are on the page ${currentPageRef.current}, you cannot go back`
      );
      return;
    }
    currentPageRef.current--;
  }

  function NextPage(): void {
    currentPageRef.current++;
    setCurrentPageState(currentPageState + 1);
  }

  function GotoPage(page: number): void {
    if (page < 1) {
      alert(
        `You are trying to access the page ${page}, this action is invalid`
      );
      return;
    }
    currentPageRef.current = page;
  }

  return (
    <div>
      <h1>Book reading</h1>
      <h2>
        Now you are currently on the page {currentPageRef.current} [ref - no
        render]{' '}
      </h2>
      <h2>
        Now you are currently on the page {currentPageState} [state - render]
      </h2>
      <div>
        <button onClick={PreviousPage}>Previous Page [no render]</button>
        <button onClick={NextPage}>Next Page [render]</button>
      </div>
      <div>
        <input
          type='text'
          onBlur={e => setInputValue(Number(e.target.value))}
          ref={inputPage}
        />
        <button onClick={() => GotoPage(inputValue)}>
          Go to Page [no render]
        </button>
        <button type='button' onClick={handleFocus}>
          Focus Input
        </button>
      </div>
    </div>
  );
}
