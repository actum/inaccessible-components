export default function Breadcrumb() {
  const data = {
    ariaLabel: 'Breadcrumb',
    items: [
      {
        id: 1,
        text: 'Breadcrumb level 1',
        url: '#'
      },
      {
        id: 2,
        text: 'Breadcrumb level 2',
        url: '#'
      },
      {
        id: 3,
        text: 'Breadcrumb level 3',
        url: '#'
      }
    ]
  }

  return (
    <nav aria-label={data.ariaLabel} className="a-breadcrumb">
      <ol className="a-breadcrumb__list">
        {data.items.map((item, index) => (
          <li key={item.id} className="a-breadcrumb__list-item">
            <a href={item.url} className="a-breadcrumb__link" aria-current={data.items.length === index + 1 ? 'page' : undefined}>{item.text}</a>
            {index !== data.items.length - 1 && (<span className="a-breadcrumb__separator" aria-hidden="true">/</span>)}
          </li>
        ))}
      </ol>
    </nav>
  )
}
