
interface ISizePrice {
  size: string;
  price: number;
}
interface IGetSizePriceProps {
  format: string;
  priceRange: string;
}


const getSizePrice = (format: string, priceRange: string) => {
  


/* Portrait */
if (format === "Portrait" && priceRange === "Low") {
  [
    {
      size: "10 x 15",
      price: 5,
    },
    {
      size: "30 x 45",
      price: 79,
    },
    {
      size: "60 x 90",
      price: 399,
    },
  ];
} else if (format === "Portrait" && priceRange === "Medium") {
  [
    {
      size: "10 x 15",
      price: 10,
    },
    {
      size: "30 x 45",
      price: 149,
    },
    {
      size: "60 x 90",
      price: 599,
    },
  ];
} else if (format === "Portrait" && priceRange === "High") {
  [
    {
      size: "10 x 15",
      price: 25,
    },
    {
      size: "30 x 45",
      price: 299,
    },
    {
      size: "60 x 90",
      price: 999,
    },
  ];
} else if (format === "Landscape" && priceRange === "Low") {
/* Landscape */
  [
    {
      size: "15 x 10",
      price: 5,
    },
    {
      size: "45 x 30",
      price: 79,
    },
    {
      size: "90 x 60",
      price: 399,
    },
  ];
} else if (format === "Landscape" && priceRange === "Medium") {
  [
    {
      size: "15 x 10",
      price: 10,
    },
    {
      size: "45 x 30",
      price: 149,
    },
    {
      size: "90 x 60",
      price: 599,
    },
  ];
} else if (format === "Landscape" && priceRange === "High") {
  [
    {
      size: "15 x 10",
      price: 25,
    },
    {
      size: "45 x 30",
      price: 299,
    },
    {
      size: "90 x 60",
      price: 999,
    },
  ];
} else if (format === "Square" && priceRange === "Low") {
/* Square */
  [
    {
      size: "15 x 15",
      price: 5,
    },
    {
      size: "40 x 40",
      price: 79,
    },
    {
      size: "60 x 60",
      price: 399,
    },
  ];
} else if (format === "Square" && priceRange === "Medium") {
  [
    {
      size: "15 x 15",
      price: 10,
    },
    {
      size: "40 x 40",
      price: 149,
    },
    {
      size: "60 x 60",
      price: 599,
    },
  ];
} else if (format === "Square" && priceRange === "High") {
  [
    {
      size: "15 x 15",
      price: 25,
    },
    {
      size: "40 x 40",
      price: 299,
    },
    {
      size: "60 x 60",
      price: 999,
    },
  ];
}
