import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalCard from '../components/TotalCard';
import FilterBox from '../components/FilterBox';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import { fetchExpenses } from '../store/expenseSlice';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    dispatch(fetchExpenses(user.id));
  }, [dispatch, user, navigate]);

  if (!user) return null;

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col md={4}>
            <TotalCard />
            <FilterBox />
            <ExpenseForm
              editingExpense={editingExpense}
              setEditingExpense={setEditingExpense}
            />
          </Col>

          <Col md={8}>
            <ExpenseTable setEditingExpense={setEditingExpense} />
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
}

export default HomePage;