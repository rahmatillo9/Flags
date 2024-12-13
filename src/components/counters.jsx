import React, { useEffect, useState } from "react";
import { getData } from "../service/api";
import Loader from "./Loader";

const CountryList = ({ element }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getData(element);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [element]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {countries.map((country) => (
        <div key={country.cca3} className="border rounded-lg shadow-lg p-4">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
