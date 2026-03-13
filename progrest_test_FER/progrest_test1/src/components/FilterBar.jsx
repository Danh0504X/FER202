import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

function FilterBar({ accounts, setFiltered }) {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [role, setRole] = useState("all");
  const [sort, setSort] = useState("");

  const applyFilter = (
    searchValue,
    statusValue,
    roleValue,
    sortValue
  ) => {

    let data = [...accounts];

    // search
    if (searchValue) {
      data = data.filter(
        (a) =>
          a.username
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          a.email
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      );
    }

    // filter status
    if (statusValue !== "all") {
      data = data.filter((a) => a.status === statusValue);
    }

    // filter role
    if (roleValue !== "all") {
      data = data.filter((a) => a.role === roleValue);
    }

    // sorting
    if (sortValue === "username_asc") {
      data.sort((a, b) =>
        a.username.localeCompare(b.username)
      );
    }

    if (sortValue === "username_desc") {
      data.sort((a, b) =>
        b.username.localeCompare(a.username)
      );
    }

    if (sortValue === "role") {
      data.sort((a, b) =>
        a.role.localeCompare(b.role)
      );
    }

    if (sortValue === "status") {
      data.sort((a, b) =>
        a.status.localeCompare(b.status)
      );
    }

    setFiltered(data);
  };

  const handleChange = (
    value,
    type
  ) => {

    let newSearch = search;
    let newStatus = status;
    let newRole = role;
    let newSort = sort;

    if (type === "search") newSearch = value;
    if (type === "status") newStatus = value;
    if (type === "role") newRole = value;
    if (type === "sort") newSort = value;

    setSearch(newSearch);
    setStatus(newStatus);
    setRole(newRole);
    setSort(newSort);

    applyFilter(newSearch, newStatus, newRole, newSort);
  };

  return (

    <Row className="mb-3">

      <Col>
        <Form.Control
          placeholder="Search by username or email"
          onChange={(e) =>
            handleChange(e.target.value, "search")
          }
        />
      </Col>

      <Col>
        <Form.Select
          onChange={(e) =>
            handleChange(e.target.value, "status")
          }
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="locked">Locked</option>
        </Form.Select>
      </Col>

      <Col>
        <Form.Select
          onChange={(e) =>
            handleChange(e.target.value, "role")
          }
        >
          <option value="all">All Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Form.Select>
      </Col>

      <Col>
        <Form.Select
          onChange={(e) =>
            handleChange(e.target.value, "sort")
          }
        >
          <option value="">Sort</option>
          <option value="username_asc">
            Username A-Z
          </option>
          <option value="username_desc">
            Username Z-A
          </option>
          <option value="role">
            Role
          </option>
          <option value="status">
            Status
          </option>
        </Form.Select>
      </Col>

    </Row>
  );
}

export default FilterBar;