import { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { getAccounts, updateAccount } from "../services/accountService";
import FilterBar from "../components/FilterBar";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import ToastMessage from "../components/ToastMessage";

function AccountListPage() {
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const data = await getAccounts();
    setAccounts(data);
    setFiltered(data);
  };

 const handleAction = (acc) => {

  if (acc.id === currentUser?.id) {
    alert("You cannot lock your own admin account!");
    return;
  }

  setSelected(acc);
  setShowModal(true);
};

  // confirm lock/unlock
  const confirmAction = async () => {

    const newStatus =
      selected.status === "active" ? "locked" : "active";

    await updateAccount(selected.id, { status: newStatus });

    const updated = accounts.map((acc) =>
      acc.id === selected.id
        ? { ...acc, status: newStatus }
        : acc
    );

    setAccounts(updated);
    setFiltered(updated);

    setToastMsg(
      newStatus === "locked"
        ? "Locked successfully"
        : "Unlocked successfully"
    );

    setShowToast(true);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">

      <h2>Account List</h2>

      <FilterBar
        accounts={accounts}
        setFiltered={setFiltered}
      />

      <Table striped bordered hover responsive>

        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filtered.map((acc) => (

            <tr key={acc.id}>

              <td>
                <img
                  src={acc.avatar}
                  width="40"
                  alt="avatar"
                />
              </td>

              <td>{acc.username}</td>

              <td>{acc.email}</td>

              <td>{acc.role}</td>

              <td>
                <Badge bg={acc.status === "active" ? "success" : "danger"}>
                  {acc.status}
                </Badge>
              </td>

              <td>

                <Button
                  size="sm"
                  variant="primary"
                  className="me-2"
                  onClick={() => navigate(`/accounts/${acc.id}`)}
                >
                  View Details
                </Button>

                <Button
                  size="sm"
                  variant={acc.status === "active" ? "danger" : "success"}
                  onClick={() => handleAction(acc)}
                >
                  {acc.status === "active" ? "Lock" : "Unlock"}
                </Button>

              </td>

            </tr>

          ))}

        </tbody>

      </Table>

      {/* Confirm Modal */}

      <ConfirmModal
        show={showModal}
        message={
          selected?.status === "active"
            ? `Lock account ${selected?.username}? The user cannot log in after this`
            : `Unlock account ${selected?.username}?`
        }
        onConfirm={confirmAction}
        onCancel={() => setShowModal(false)}
      />

      {/* Toast Message */}

      <ToastMessage
        show={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />

    </div>
  );
}

export default AccountListPage;