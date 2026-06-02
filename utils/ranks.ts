import {
  BookCheck,
  BowArrow,
  ChartArea,
  ChessKnight,
  ChessQueen,
  Crown,
  Leaf,
  Medal,
  Star,
} from "lucide-react";

export const ranks = [
  {
    name: "Debiutant",
    min: 0,
    max: 20,
    icon: Leaf,
  },
  {
    name: "Typer",
    min: 21,
    max: 50,
    icon: BowArrow,
  },
  {
    name: "Analityk",
    min: 51,
    max: 90,
    icon: ChartArea,
  },
  {
    name: "Strateg",
    min: 91,
    max: 140,
    icon: ChessKnight,
  },
  {
    name: "Ekspert",
    min: 141,
    max: 190,
    icon: BookCheck,
  },
  {
    name: "Mistrz Typów",
    min: 191,
    max: 250,
    icon: ChessQueen,
  },
  {
    name: "Elita",
    min: 251,
    max: 320,
    icon: Star,
  },
  {
    name: "Legenda",
    min: 321,
    max: 380,
    icon: Crown,
  },
  {
    name: "Wyrocznia",
    min: 381,
    max: 9999,
    icon: Medal,
  },
];
