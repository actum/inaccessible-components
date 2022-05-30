export default function Breadcrumb() {
  const data = [
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

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {data.map((item, index) => (
          <>
            <li key={item.id} className="breadcrumb__list-item">
              <a href={item.url} className="breadcrumb__link" aria-label={`Breadcrumb ${item.text}`}>{item.text}</a>
              {index !== data.length - 1 && ('/')}
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}
