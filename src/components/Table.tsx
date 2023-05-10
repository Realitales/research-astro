import type Cars from "src/types/Cars";

export default function Table({ cars }: { cars: Cars[] }) {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th>name</th>
          <th>model</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car: Cars) => (
          <tr key={car.model} className="text-center">
            <td>
              <a href={`/cars/${car.id}`}>{car.name} </a>
            </td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
