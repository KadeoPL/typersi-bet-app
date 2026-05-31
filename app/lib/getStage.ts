export function getStage(stage: string) {
  switch (stage) {
    case "group":
      return "Faza grupowa";

    case "round_of_32":
      return "1/16 finału";

    case "round_of_16":
      return "1/8 finału";

    case "quarter_final":
      return "Ćwierćfinał";

    case "semi_final":
      return "Półfinał";

    case "third_place":
      return "Mecz o 3. miejsce";

    case "final":
      return "Finał";

    default:
      return "Nieznany etap";
  }
}
