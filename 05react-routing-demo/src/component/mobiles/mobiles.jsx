import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Mobiles() {
  const [mobiles] = useState([
    { Name: "Realme C16", Category: "Realme" },
    { Name: "Iphone 14 Prox", Category: "iphone" },
  ]);

  let params = useParams();

  useEffect(() => {
    console.log(params);
  });
  return (
    <div>
      <h4>Mobiles</h4>
      <table width="400" border="1">
        <thead>
          <th>Name</th>
          <th>Category</th>
        </thead>
        <tbody>
          {mobiles
            .filter((mobile) => mobile.Category === params.category)
            .map((item) => (
              <tr key={item.Name}>
                <td>{item.Name}</td>
                <td>{item.Category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
