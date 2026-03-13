import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory } from '../store/expenseSlice';

function FilterBox() {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.expenses.filterCategory);

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Filter</Card.Title>
        <Form.Control
          type="text"
          placeholder="Category (e.g., Food)"
          value={filterCategory}
          onChange={(e) => dispatch(setFilterCategory(e.target.value))}
        />
      </Card.Body>
    </Card>
  );
}

export default FilterBox;