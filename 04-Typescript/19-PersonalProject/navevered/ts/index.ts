//model//
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


// Income entity
class Income {
  id: string;
  constructor(public amount: number, public source: string, public date: Date) {
    this.id = uid();
  }
}

// Expense entity
class Expense {
  id: string;
  constructor(
    public amount: number,
    public category: string,
    public date: Date
  ) {
    this.id = uid();
  }
}

// Monthly Summary entity
class MonthlySummary {
  id: string;
  constructor(
    public totalIncome: number,
    public totalExpenses: number,
    public month: number,
    public year: number
  ) {
    this.netEarnings = totalIncome - totalExpenses;
    this.id = uid();
  }

  netEarnings: number;
}
