import { useState, useEffect } from "react";
import "./App.css";

const navigation = [
  { name: "Dashboard", icon: "▦" },
  { name: "Students", icon: "♙" },
  { name: "Companies", icon: "▣" },
  { name: "Jobs", icon: "▤" },
  { name: "Applications", icon: "▧" },
  { name: "Placements", icon: "◆" },
];

const statistics = [
  {
    title: "Total Students",
    value: "—",
    description: "Registered students",
    icon: "♙",
    color: "blue",
  },
  {
    title: "Companies",
    value: "—",
    description: "Registered companies",
    icon: "▣",
    color: "purple",
  },
  {
    title: "Available Jobs",
    value: "—",
    description: "Job opportunities",
    icon: "▤",
    color: "orange",
  },
  {
    title: "Placements",
    value: "—",
    description: "Placement records",
    icon: "◆",
    color: "green",
  },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("https://smart-job-placement-management-system.onrender.com/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load students");
        }
        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => console.error("Students API:", error));

    fetch("https://smart-job-placement-management-system.onrender.com/companies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load companies");
        }
        return response.json();
      })
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Companies API:", error));

    fetch("https://smart-job-placement-management-system.onrender.com/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load jobs");
        }
        return response.json();
      })
      .then((data) => setJobs(data))
      .catch((error) => console.error("Jobs API:", error));

    fetch("https://smart-job-placement-management-system.onrender.com/applications")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load applications");
        }
        return response.json();
      })
      .then((data) => setApplications(data))
      .catch((error) => console.error("Applications API:", error));

    fetch("https://smart-job-placement-management-system.onrender.com/api/placements")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load placements");
        }
        return response.json();
      })
      .then((data) => setPlacements(data))
      .catch((error) => console.error("Placements API:", error));
  }, []);

  function handleNavigation(page) {
    setActivePage(page);
    setMenuOpen(false);
  }
  const liveStatistics = [
  {
    title: "Total Students",
    value: students.length,
    description: "Registered students",
    icon: "♙",
    color: "blue",
  },
  {
    title: "Companies",
    value: companies.length,
    description: "Registered companies",
    icon: "▣",
    color: "purple",
  },
  {
    title: "Available Jobs",
    value: jobs.length,
    description: "Job opportunities",
    icon: "▤",
    color: "orange",
  },
  {
    title: "Placements",
    value: placements.length,
    description: "Placement records",
    icon: "◆",
    color: "green",
  },
];
const recentJobs = jobs.slice(0, 3).map((job) => ({
  role: job.jobTitle,
  company: job.companyName,
  location: job.location,
  status: "Active",
}));
const managementData = {
  Students: {
    title: "Student Management",
    description: "View registered students and their skills.",
    rows: students,
    columns: [
      { label: "ID", keys: ["id"] },
      { label: "NAME", keys: ["name"] },
      { label: "EMAIL", keys: ["email"] },
      { label: "PHONE", keys: ["phone"] },
      { label: "COURSE", keys: ["course"] },
      { label: "SKILLS", keys: ["skills"] },
    ],
  },

  Companies: {
    title: "Company Management",
    description: "View registered company information.",
    rows: companies,
    columns: [
      { label: "COMPANY", keys: ["companyName", "name"] },
      { label: "INDUSTRY", keys: ["industry"] },
      { label: "LOCATION", keys: ["location"] },
      { label: "WEBSITE", keys: ["website"] },
      { label: "CONTACT EMAIL", keys: ["contactEmail"] },
    ],
  },

  Jobs: {
    title: "Job Management",
    description: "Explore available job opportunities.",
    rows: jobs,
    columns: [
      { label: "ID", keys: ["id"] },
      { label: "COMPANY", keys: ["companyName"] },
      { label: "JOB TITLE", keys: ["jobTitle"] },
      { label: "LOCATION", keys: ["location"] },
      { label: "SALARY", keys: ["salary"] },
      { label: "SKILLS REQUIRED", keys: ["skillsRequired"] },
    ],
  },

  Applications: {
    title: "Application Management",
    description: "Track student job applications.",
    rows: applications,
    columns: [
      { label: "ID", keys: ["id", "applicationId"] },
      { label: "STUDENT ID", keys: ["studentId"] },
      { label: "JOB ID", keys: ["jobId"] },
      {
        label: "STATUS",
        keys: ["applicationStatus", "status"],
      },
      { label: "APPLICATION DATE", keys: ["applicationDate"] },
    ],
  },

  Placements: {
    title: "Placement Management",
    description: "View student placement records.",
    rows: placements,
    columns: [
      { label: "ID", keys: ["placementId", "id"] },
      { label: "STUDENT ID", keys: ["studentId"] },
      { label: "JOB ID", keys: ["jobId"] },
      { label: "COMPANY", keys: ["companyName"] },
      { label: "JOB ROLE", keys: ["jobRole"] },
      { label: "PACKAGE", keys: ["packageAmount"] },
      { label: "STATUS", keys: ["placementStatus"] },
    ],
  },
};

const currentSection = managementData[activePage];

function getCellValue(row, keys) {
  const value = keys
    .map((key) => row[key])
    .find((item) => item !== undefined && item !== null);

  if (value === undefined || value === "") {
    return "—";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

  return (
    <div className="app-container">
     <aside
  className={"sidebar " + (menuOpen ? "sidebar-open" : "")}
>
        <div className="brand">
          <div className="brand-logo">SP</div>

          <div className="brand-text">
            <h2>SmartPlacement</h2>
            <p>PLACEMENT PORTAL</p>
          </div>
        </div>

        <div className="menu-heading">WORKSPACE</div>

        <nav
          className="sidebar-menu"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`menu-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.name)}
              aria-current={
                activePage === item.name ? "page" : undefined
              }
            >
              <span className="menu-icon" aria-hidden="true">
                {item.icon}
              </span>

              <span>{item.name}</span>

              {activePage === item.name && (
                <span className="active-indicator" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="help-card">
            <div className="help-icon">?</div>
            <h3>Need assistance?</h3>
            <p>
              Your placement management workspace, all in one place.
            </p>
          </div>

          <div className="profile">
            <div className="avatar">AD</div>

            <div className="profile-info">
              <strong>Administrator</strong>
              <span>Management Portal</span>
            </div>
          </div>
        </div>
      </aside>

      {menuOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="main-content">
        <header className="topbar">
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{activePage}</strong>
          </div>

          <div className="topbar-right">
            <div className="system-status">
              <span className="status-dot" />
              <span>Placement Portal</span>
            </div>

            <div className="top-avatar">AD</div>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-section">
            <div>
              <span className="eyebrow">
                SMART JOB & PLACEMENT MANAGEMENT
              </span>

              <h1>
                {activePage === "Dashboard"
                  ? "Dashboard Overview"
                  : activePage}
              </h1>

              <p>
                Manage students, companies, job opportunities, and
                placements from one centralized workspace.
              </p>
            </div>

            <div className="portal-badge">
              <span className="portal-badge-icon">✦</span>
              Career Management
            </div>
          </section>

          {activePage === "Dashboard" ? (
            <>
              <section
                className="stats-grid"
                aria-label="System statistics"
              >
                {liveStatistics.map((stat) => (
                  <article
                    className="stat-card"
                    key={stat.title}
                  >
                    <div
                      className={"stat-icon " + stat.color}
                    >
                      {stat.icon}
                    </div>

                    <div className="stat-details">
                      <p>{stat.title}</p>
                      <h2>{stat.value}</h2>
                      <span>{stat.description}</span>
                    </div>

                    <span
                      className="stat-decoration"
                      aria-hidden="true"
                    >
                      ↗️
                    </span>
                  </article>
                ))}
              </section>

              <section className="content-grid">
                <article className="panel jobs-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Recent Job Opportunities</h2>
                      <p>
                        Latest job opportunities from the database
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-button"
                      onClick={() => handleNavigation("Jobs")}
                    >
                      View jobs <span>→</span>
                    </button>
                  </div>

                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>JOB ROLE</th>
                          <th>COMPANY</th>
                          <th>LOCATION</th>
                          <th>DATA TYPE</th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentJobs.map((job) => (
                          <tr
                            key={job.company + "-" + job.role}
                          >
                            <td>
                              <span className="job-role">
                                {job.role}
                              </span>

                              <span className="job-subtitle">
                                Career opportunity
                              </span>
                            </td>

                            <td>{job.company}</td>
                            <td>{job.location}</td>

                            <td>
                              <span className="sample-badge">
                                {job.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="demo-notice">
                     Job listings are connected to the live Spring Boot API.
                </div>
                </article>

                <article className="panel overview-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Platform Overview</h2>
                      <p>Manage your placement workflow</p>
                    </div>

                    <span className="overview-symbol">▦</span>
                  </div>

                  <button
                    type="button"
                    className="overview-item"
                    onClick={() => handleNavigation("Students")}
                  >
                    <span className="overview-icon blue">♙</span>

                    <span className="overview-copy">
                      <strong>Student Management</strong>
                      <span>
                        View student records and skills
                      </span>
                    </span>

                    <span className="overview-arrow">→</span>
                  </button>

                  <button
                    type="button"
                    className="overview-item"
                    onClick={() => handleNavigation("Companies")}
                  >
                    <span className="overview-icon purple">▣</span>

                    <span className="overview-copy">
                      <strong>Company Management</strong>
                      <span>
                        Organize company information
                      </span>
                    </span>

                    <span className="overview-arrow">→</span>
                  </button>

                  <button
                    type="button"
                    className="overview-item"
                    onClick={() => handleNavigation("Applications")}
                  >
                    <span className="overview-icon orange">▤</span>

                    <span className="overview-copy">
                      <strong>Application Tracking</strong>
                      <span>
                        Review application records
                      </span>
                    </span>

                    <span className="overview-arrow">→</span>
                  </button>

                  <button
                    type="button"
                    className="overview-item"
                    onClick={() => handleNavigation("Placements")}
                  >
                    <span className="overview-icon green">◆</span>

                    <span className="overview-copy">
                      <strong>Placement Records</strong>
                      <span>
                        Review placement information
                      </span>
                    </span>

                    <span className="overview-arrow">→</span>
                  </button>
                </article>
              </section>
            </>
          ) : (
             <section className="panel section-placeholder management-section">
    <div className="panel-header">
      <div>
        <h2>{currentSection.title}</h2>
        <p>{currentSection.description}</p>
      </div>

      <span className="overview-symbol">
        {currentSection.rows.length}
      </span>
    </div>

    {currentSection.rows.length > 0 ? (
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {currentSection.columns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentSection.rows.map((row, index) => (
              <tr
                key={
                  row.id ??
                  row.placementId ??
                  row.applicationId ??
                  index
                }
              >
                {currentSection.columns.map((column) => (
                  <td key={column.label}>
                    {getCellValue(row, column.keys)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="empty-state">
        <div className="placeholder-icon">▦</div>

        <h3>No Records Found</h3>

        <p>
          There are currently no records available in this section.
          Records will appear here when data is available from the API.
        </p>
      </div>
    )}

    <button
      type="button"
      className="primary-button"
      onClick={() => handleNavigation("Dashboard")}
    >
      ← Back to Dashboard
    </button>
  </section>
)}

          <footer className="footer">
            <span>
              © 2026 Smart Job and Placement Management System
            </span>

            <span>React · Spring Boot · MySQL</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;