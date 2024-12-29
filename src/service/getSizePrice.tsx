export const getSizePrice = (format: string, priceRange: string) => {
  /* Portrait */
  if (format === "Portrait" && priceRange === "Low") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "10 x 15",
        price: 5,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "30 x 45",
        price: 79,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 90",
        price: 399,
      },
    ];
  } else if (format === "Portrait" && priceRange === "Medium") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "30 x 45",
        price: 149,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 90",
        price: 599,
      },
    ];
  } else if (format === "Portrait" && priceRange === "High") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "10 x 15",
        price: 25,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "30 x 45",
        price: 299,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 90",
        price: 999,
      },
    ];
  } else if (format === "Landscape" && priceRange === "Low") {
    /* Landscape */
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 10",
        price: 5,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "45 x 30",
        price: 79,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "90 x 60",
        price: 399,
      },
    ];
  } else if (format === "Landscape" && priceRange === "Medium") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 10",
        price: 10,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "45 x 30",
        price: 149,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "90 x 60",
        price: 599,
      },
    ];
  } else if (format === "Landscape" && priceRange === "High") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 10",
        price: 25,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "45 x 30",
        price: 299,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "90 x 60",
        price: 999,
      },
    ];
  } else if (format === "Square" && priceRange === "Low") {
    /* Square */
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 15",
        price: 5,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "40 x 40",
        price: 79,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 60",
        price: 399,
      },
    ];
  } else if (format === "Square" && priceRange === "Medium") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 15",
        price: 10,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "40 x 40",
        price: 149,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 60",
        price: 599,
      },
    ];
  } else if (format === "Square" && priceRange === "High") {
    return [
      {
        format: format,
        priceRange: priceRange,
        size: "15 x 15",
        price: 25,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "40 x 40",
        price: 299,
      },
      {
        format: format,
        priceRange: priceRange,
        size: "60 x 60",
        price: 999,
      },
    ];
  }
};
