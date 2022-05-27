import AccordionPanel from "./AccordionPanel";

const data = [
  {
    id: 1,
    title: 'Title 1',
    text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing.'
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing.'
  },
  {
    id: 3,
    title: 'Title 3',
    text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing. Progressive disclosure, that is funny.'
  },
]

export default function Accordion() {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'next');
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'prev');
        break;
      }
      case 'Home': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'first');
        break;
      }
      case 'End': {
        e.preventDefault();
        changeFocusToItem(e.currentTarget, 'last');
        break;
      }
      default: {
        break;
      }
    }
  }

  const changeFocusToItem = (target, item) => {
    const items = Array.from(
      target.querySelectorAll('.a-accordion__item-button')
    );

    let index = [...target.children].indexOf(document.activeElement.closest('.a-accordion__item'))

    if (item === 'last') {
      index = items.length - 1;
    } else if (item === 'first') {
      index = 0;
    } else if (item === 'next') {
      index = index === items.length - 1 ? 0 : index + 1;
    } else if (item === 'prev') {
      index = index <= 0 ? items.length - 1 : index - 1;
    }

    items[index]?.focus();
  };

  return (
    <div
      className="a-accordion"
      onKeyDown={handleKeyDown}
    >
      {data.map((item) => (
        <AccordionPanel key={item.id} id={item.id} title={item.title}>
          {item.text}
        </AccordionPanel>
      ))}
    </div>
  );
}
