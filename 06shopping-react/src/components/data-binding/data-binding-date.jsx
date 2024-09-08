export function DataBindingDate() {
  var departure = new Date();
  var months = [
    "January",
    "Febevary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "Sepember",
    "Octmber",
    "November",
    "December",
  ];

  var weekdays = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thuseday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      Departure :{weekdays[departure.getDay()]},{months[departure.getMonth()]}
      {departure.getDate()}-{departure.getFullYear()}
    </>
  );
}
