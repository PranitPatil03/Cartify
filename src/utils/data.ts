import { product } from "@/types/types";

import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
} from "@/assets/index";

export const products: product[] = [
  {
    id: 1,
    name: "Slim Fit Fine-knit jumper",
    price: 1499,
    mrp: 2000,
    description:
      "T-shirt in lightweight jersey blended with wool and mulberry silk.",
    image: product1,
    isCart: false,
  },
  {
    id: 2,
    name: "Polarised sunglasses",
    price: 2000,
    mrp: 2800,
    description:
      "Sunglasses with plastic frames and sidepieces, and polarised lenses",
    image: product6,
    isCart: false,
  },
  {
    id: 3,
    name: "Regular Fit Sweatshorts",
    price: 999,
    mrp: 1500,
    description:
      "Shorts in lightweight sweatshirt fabric with a soft brushed inside..",
    image: product3,
    isCart: false,
  },
  {
    id: 4,
    name: "Loose Fit T-shirt",
    price: 899,
    mrp: 1000,
    description: "T-shirt in lightweight cotton jersey with a round Loose fit",
    image: product7,
    isCart: false,
  },
  {
    id: 5,
    name: "Slim Fit Textured polo shirt",
    price: 2399,
    mrp: 3000,
    description: "Polo shirt in textured cotton jersey with a collar",
    image: product5,
    isCart: false,
  },
  {
    id: 6,
    name: "Denim cap",
    price: 1499,
    mrp: 2000,
    description:
      " This cap is made from cotton denim with an embroidered motif.",
    image: product8,
    isCart: false,
  },
  {
    id: 7,
    name: "Regular Fit T-shirt",
    mrp: 1500,
    price: 1299,
    description:
      "T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline",
    image: product2,
    isCart: false,
  },
  {
    id: 8,
    name: "Loose Fit Hoodie",
    price: 1400,
    mrp: 2399,
    description:
      "Hoodie in midweight sweatshirt fabric made from a cotton blend",
    image: product4,
    isCart: false,
  },
];
