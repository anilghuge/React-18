import React from "react";

export function DataBindingArray() {
  //Array
  var menu = [
    {
      Category: "Electronices",
      Products: ["Televisions", "Mobile", "Watches"],
    },
    {
      Category: "Fashion",
      Products: ["Men Fashion", "Kids Fashion", "Women Fashion"],
    },
  ];

  //List
  var topics = [
    { Title: "HTML", Description: "It is a markup Language" },
    { Title: "CSS", Description: "It Configure style for HTML." },
  ];

  var iccTable = [
    {
      Team: "India",
      Matches: 8,
      Won: 8,
      Lost: 0,
      PTS: 16,
      NRR: "+2.456",
      Flag: "India.png",
    },
    {
      Team: "South Africa",
      Matches: 8,
      Won: 6,
      Lost: 2,
      PTS: 12,
      NRR: "+1.456",
      Flag: "South_Afarika.png",
    },
    {
      Team: "Australia",
      Matches: 8,
      Won: 6,
      Lost: 2,
      PTS: 12,
      NRR: "+0.856",
      Flag: "Australiya.png",
    },
  ];

  var mobiles = [
    {
      Title: "APPLE iPhone 14(Blue,128 GB)",
      Price: 57999,
      Rating: 4.6,
      Features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "12MP + 12MP | 12MP Front Camera",
        "A15 Bionic Chip, 6 Core Processor Processor",
      ],
      Photo: "IBlue.png",
    },
    {
      Title: "APPLE iPhone 14 (Starlight, 128 GB)",
      Price: 58499,
      Rating: 4.5,
      Features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "12MP + 12MP | 12MP Front Camera",
        "A15 Bionic Chip, 6 Core Processor Processor",
      ],
      Photo: "Startlight.png",
    },
  ];

  return (
    <>
      <h2>Product Details</h2>
      <ol>
        {menu.map((item) => (
          <li key={item.Category}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <dl>
        {topics.map((topic) => (
          <React.Fragment key={topic.Title}>
            <dt key={topic.Title}>{topic.Title}</dt>
            <dd key={topic.Description}>{topic.Description}</dd>
          </React.Fragment>
        ))}
      </dl>

      <h1>ICC WorldCup 2023 Table</h1>
      <table className="table w-50 table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>PTS</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {iccTable.map((country) => (
            <tr key={country.Team}>
              <td>
                <img src={country.Flag} alt="Country" width="40" />
                {country.Team}
              </td>
              <td>{country.Matches}</td>
              <td>{country.Won}</td>
              <td>{country.Lost}</td>
              <td>{country.PTS}</td>
              <td>{country.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Mobile Details</h2>
      {mobiles.map((item) => (
        <div key={item.Title} className="row p-2 m-2 border-top">
          <div className="col-2">
            <img src={item.Photo} alt="Mobile IMG" width="100%" />
          </div>
          <div className="col-7">
            <div className="h4 text-primary">{item.Title}</div>
            <div
              className="bg-success rounded rounded-pill p-1 text-center text-white"
              style={{ width: "70px" }}
            >
              {item.Rating}
              <span className="bi bi-star-fill text-white"></span>
            </div>
            <div className="mt-3">
              <ul>
                {item.Features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="h1">
              {item.Price.toLocaleString("en-in", {
                style: "currency",
                currency: "INR",
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
