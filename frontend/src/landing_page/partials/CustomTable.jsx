export default function CustomTable({ data }) {
  return (
    <>
      <h2 className="mb-4">{data.title}</h2>

      {data.note && (
        <div className="alert alert-primary d-inline-block">
          {data.note}
        </div>
      )}

      {data.description && <p>{data.description}</p>}

      <table className="table table-bordered">

        <thead>
          <tr>
            {data.headers.map((header) => (
              <th className="text-muted" key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.rows.map((row, index) => (
            <tr  key={index}>
              {row.cols.map((col, i) => (
                <td  className="text-muted" key={i}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

      {data.footer &&
        data.footer.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
    </>
  );
}