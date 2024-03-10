import { ResultType } from "@/app/Hooks/Type";

type result = {
  id: number;
  advice: string;
};

export class CardViewModel {
  constructor(readonly data: ResultType) {}

  getData() {
    const data = {
      id: this.data.slip?.id ?? 0,
      advice: this.data.slip.advice ?? "--",
    };

    return data;
  }
}
