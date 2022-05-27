import AccordionPanel from "./AccordionPanel";

export default function Accordion() {
  const data = [
    {
      title: 'Title 1',
      text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing.'
    },
    {
      title: 'Title 2',
      text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing.'
    },
    {
      title: 'Title 3',
      text: 'The accordion component delivers large amounts of content in a small space through this nice progressive disclosure. Amazing. Progressive disclosure, that is funny.'
    },
  ]

  return (
    <div className="accordion">
      {data.map((item) => <AccordionPanel key={item.title} title={item.title} text={item.text} />)}
    </div>
  );
}
