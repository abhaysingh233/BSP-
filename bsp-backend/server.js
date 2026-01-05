const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- SERVER LIST ---------------- */

app.get("/servers", (req, res) => {
  res.json([
    { host: "10.145.8.23", status: "UP", cpu: 22, mem: 39 },
    { host: "10.145.25.5", status: "DOWN", cpu: null, mem: null },
    { host: "10.145.1.55", status: "UP", cpu: 45, mem: 61 }
  ]);
});

/* ---------------- SERVER DETAILS ---------------- */

app.get("/servers/:ip", (req, res) => {
  const { ip } = req.params;

  res.json({
    ip,
    cpu: 22,
    mem: 39,

    filesystems: [
      {
        filesystem: "/dev/root",
        size: "134G",
        available: "98G",
        used: "27%",
        mounted: "/"
      },
      {
        filesystem: "/dev/data",
        size: "200G",
        available: "50G",
        used: "75%",
        mounted: "/data"
      }
    ],

    tablespaces: [
      {
        name: "BIOMETRIC",
        allocated: 1572,
        free: 102,
        used: "93%"
      },
      {
        name: "COST",
        allocated: 120,
        free: 30,
        used: "75%"
      }
    ],

    sessions: [
      {
        sid: 925,
        user: "GPASS",
        status: "KILLED",
        machine: "SAILBSPDT",
        program: "SQLPLUS"
      },
      {
        sid: 812,
        user: "SYSTEM",
        status: "ACTIVE",
        machine: "DBSERVER1",
        program: "JDBC"
      }
    ]
  });
});

/* ---------------- START SERVER ---------------- */

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
