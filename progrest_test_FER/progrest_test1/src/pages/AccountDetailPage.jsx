import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccountById } from "../services/accountService";
import { Card, Button, Badge } from "react-bootstrap";

function AccountDetailPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    const data = await getAccountById(id);
    setAccount(data);
  };

  if (!account) return <p>Loading...</p>;

  return (

    <div className="container mt-4">

      <Card style={{ width: "400px", margin: "auto" }}>

        <Card.Body>

          <div className="text-center mb-3">

            <img
              src={account.avatar}
              width="120"
              alt="avatar"
            />

          </div>

          <p><b>Username:</b> {account.username}</p>

          <p><b>Email:</b> {account.email}</p>

          <p><b>Role:</b> {account.role}</p>

          <p>
            <b>Status:</b>{" "}
            <Badge
              bg={
                account.status === "active"
                  ? "success"
                  : "danger"
              }
            >
              {account.status}
            </Badge>
          </p>

          <Button
            variant="secondary"
            onClick={() => navigate("/accounts")}
          >
            Back to Lists
          </Button>

        </Card.Body>

      </Card>

    </div>
  );
}

export default AccountDetailPage;