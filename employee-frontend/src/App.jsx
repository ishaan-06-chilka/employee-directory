import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:8080/api/employees'

function App() {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
const [form, setForm] = useState({ name: '', email: '', department: '', salary: '' })


const [editingId, setEditingId] = useState(null)
  async function loadEmployees() {
    try {
      setLoading(true)
      setError('')
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('Could not load employees.')
      }

      const data = await response.json()
      setEmployees(data)
    } catch {
      setError('Could not connect to the backend. Make sure Spring Boot is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEmployees()
  }, [])
  function handleEdit(employee) {
  setEditingId(employee.id)
  setForm({
    name: employee.name,
    email: employee.email,
    department: employee.department,
    salary: String(employee.salary),
  })
  setShowForm(true)
  setError('')
}
async function handleDelete(employee) {
  const confirmed = window.confirm(
    `Are you sure you want to delete ${employee.name}?`
  )

  if (!confirmed) return

  setError('')

  try {
    const response = await fetch(`${API_URL}/${employee.id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Could not delete employee.')
    }

    await loadEmployees()
    alert('Employee deleted successfully!')
  } catch (err) {
    setError(err.message || 'Could not delete employee.')
  }
}
  async function handleSubmit(event) {
  event.preventDefault()
  setError('')

  try {
    const isEditing = editingId !== null

    const response = await fetch(
      isEditing ? `${API_URL}/${editingId}` : API_URL,
      {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          salary: Number(form.salary),
        }),
      }
    )

   if (!response.ok) {
    if (response.status === 409) {
        throw new Error('This email address is already registered. Please use a different email.')
    }

    if (response.status === 400) {
        throw new Error('Please check the employee details and try again.')
    }

    throw new Error('Could not save employee. Please try again.')
}

    setForm({ name: '', email: '', department: '', salary: '' })
    setEditingId(null)
    setShowForm(false)
    await loadEmployees()

    alert(isEditing ? 'Employee updated successfully!' : 'Employee added successfully!')
  } catch (err) {
    setError(err.message || 'Could not save employee. Check that the backend is running.')
  }
}

  const departments = [
    'All',
    ...new Set(employees.map((employee) => employee.department)),
  ]

  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesDepartment =
      department === 'All' || employee.department === department

    return matchesName && matchesDepartment
  })

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">ED</div>
          <span>Employee<span className="brand-light">Directory</span></span>
        </div>
        <span className="status"><span className="status-dot" /> Directory Portal</span>
      </header>

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">PEOPLE MANAGEMENT</p>
            <h1>Employee Directory</h1>
            <p className="subtitle">Manage your team, all in one place.</p>
          </div>
         <button
  className="primary-button"
  onClick={() => setShowForm(!showForm)}
>
  {showForm ? 'Cancel' : '+ Add Employee'}
</button>
        </section>
        {showForm && (
  <section className="directory-card employee-form-card">
    <div className="directory-heading">
      <div>
        <h2>{editingId !== null ? 'Edit Employee' : 'Add New Employee'}</h2>
        <p>Enter the employee details below.</p>
      </div>
    </div>

    <form className="employee-form" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          type="text"
          required
          maxLength={100}
          placeholder="Enter full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          required
          maxLength={150}
          placeholder="name@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <label>
        Department
        <input
          type="text"
          required
          maxLength={100}
          placeholder="e.g. Engineering"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />
      </label>

      <label>
        Salary
        <input
          type="number"
          required
          min="0"
          step="0.01"
          placeholder="Enter salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />
      </label>

      <div className="form-actions">
        <button
          type="button"
          className="refresh-button"
          onClick={() => {
  setShowForm(false)
  setEditingId(null)
  setForm({ name: '', email: '', department: '', salary: '' })
}}
        >
          Cancel
        </button>
        <button type="submit" className="primary-button">
          {editingId !== null ? 'Update Employee' : 'Save Employee'}
        </button>
      </div>
    </form>
  </section>
)}
        <section className="stats">
          <div className="stat-card">
            <span className="stat-label">Total Employees</span>
            <strong>{employees.length}</strong>
            <span className="stat-note">Employees in your directory</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Departments</span>
            <strong>{new Set(employees.map((employee) => employee.department)).size}</strong>
            <span className="stat-note">Across your organization</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Matching Results</span>
            <strong>{filteredEmployees.length}</strong>
            <span className="stat-note">Based on your filters</span>
          </div>
        </section>

        <section className="directory-card">
          <div className="directory-heading">
            <div>
              <h2>Team Members</h2>
              <p>View and find employees in your organization.</p>
            </div>
            <span className="count-badge">{filteredEmployees.length} records</span>
          </div>

          <div className="filters">
            <div className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search by employee name..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              aria-label="Filter by department"
            >
              {departments.map((item) => (
                <option key={item} value={item}>{item === 'All' ? 'All departments' : item}</option>
              ))}
            </select>
            <button className="refresh-button" onClick={loadEmployees}>↻ Refresh</button>
          </div>

          {error && <div className="message error-message">{error}</div>}

          {loading ? (
            <div className="empty-state">Loading employees...</div>
          ) : filteredEmployees.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">♙</div>
              <h3>{employees.length === 0 ? 'No employees yet' : 'No matching employees'}</h3>
              <p>
                {employees.length === 0
                  ? 'Your employee directory is ready. Add your first team member soon.'
                  : 'Try changing your search or department filter.'}
              </p>
            </div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>EMPLOYEE</th>
                    <th>EMAIL</th>
                    <th>DEPARTMENT</th>
                    <th>SALARY</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <div className="employee-cell">
                          <span className="avatar">
                            {employee.name.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <strong>{employee.name}</strong>
                            <small>ID: {employee.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>{employee.email}</td>
                      <td><span className="department-tag">{employee.department}</span></td>
                      <td>{Number(employee.salary).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>
 <td>
  <div className="action-buttons">
    <button
      type="button"
      className="edit-button"
      onClick={() => handleEdit(employee)}
    >
      Edit
    </button>

    <button
      type="button"
      className="delete-button"
      onClick={() => handleDelete(employee)}
    >
      Delete
    </button>
  </div>
</td>
</td>                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer>Employee Directory · Built with React, Spring Boot and MySQL</footer>
      </main>
    </div>
  )
}

export default App
