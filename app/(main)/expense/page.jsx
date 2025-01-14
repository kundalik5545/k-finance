import React from "react";
import { AddExpenseForm } from "./_componets/AddExpenseForm";
import { Button } from "@/components/ui/button";
import AddEForm from "./_componets/AddEForm";

const ExpensePage = () => {
  return (
    <div>
      <h1>Expense Page</h1>
      <div className="my-2">
        <AddExpenseForm>
          <Button>Add Expense</Button>
        </AddExpenseForm>
      </div>
      <div className="my-2">
        <AddEForm>
          <Button>Add E Form</Button>
        </AddEForm>
      </div>
    </div>
  );
};

export default ExpensePage;
