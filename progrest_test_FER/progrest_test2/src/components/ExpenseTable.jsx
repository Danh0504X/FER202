import { Card, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../store/expenseSlice';
import { formatCurrencyVND, formatDate } from '../utils/format';

function ExpenseTable({ setEditingExpense }) {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const filterCategory = useSelector((state) => state.expenses.filterCategory);

  const filteredExpenses = expenses.filter((item) =>
    item.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Expense Management</Card.Title>

        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th width="140">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{formatCurrencyVND(item.amount)}</td>
                  <td>{item.category}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => setEditingExpense(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No expenses found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default ExpenseTable;