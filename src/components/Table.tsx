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
          <tr className="text-center">
            <td>{car.name}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
