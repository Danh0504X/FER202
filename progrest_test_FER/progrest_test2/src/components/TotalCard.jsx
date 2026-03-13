import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { formatCurrencyVND } from '../utils/format';

function TotalCard() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const filterCategory = useSelector((state) => state.expenses.filterCategory);

  const filteredExpenses = expenses.filter((item) =>
    item.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  const total = filteredExpenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Total Expenses</Card.Title>
        <h3 className="text-danger">{formatCurrencyVND(total)}</h3>
      </Card.Body>
    </Card>
  );
}

export default TotalCard;