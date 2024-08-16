import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export const CountrySelect = () => {
  const [countries, setCountries] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.countries)) {
          const filteredCountries = data.countries.filter((country: any) =>
            /* ["CG", "SN", "GA"].includes(country.value) */
            ["SN", "GA"].includes(country.value)
          );
          setCountries(filteredCountries);

          const defaultSelection = filteredCountries.find(
            (country: any) => country.value === data.userSelectValue.value
          );
          setSelectedCountry(defaultSelection || null);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  /*   const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#01BF62" : "#11836C",

      "&:hover": {
        borderColor: "#01BF62",
      },
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1C486F"
        : state.isFocused
        ? "#e6f7ff"
        : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#e6f7ff",
        color: "black",
      },
    }),
  };
 */

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      height: "100%", // La hauteur du select est égale à celle de son conteneur
      minHeight: "100%", // Assurez-vous que la hauteur minimale correspond également
      border: "none", // Supprimer toutes les bordures
      boxShadow: "none", // Supprimer les ombres de bordure
      "&:hover": {
        border: "none", // Empêcher l'apparition des bordures au survol
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1C486F"
        : state.isFocused
        ? "#e6f7ff"
        : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#e6f7ff",
        color: "black",
      },
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: 4,
    }),
    indicatorSeparator: () => ({
      display: "none", // Supprimer le séparateur entre l'indicateur de menu déroulant et le texte
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: 0,
      marginTop: 0,
    }),
  };
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      styles={customStyles}
      getOptionLabel={(e: any) => `${e.label.split(" ")[0]} ${e.value}`}
      isOptionDisabled={(option) => !option.value}
    />
  );
};
