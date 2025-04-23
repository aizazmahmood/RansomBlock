// Initial layout setup for RansomBlock Frontend (React + shadcn/ui + Tailwind)
// Includes: Sidebar, Routing, Basic Pages (Dashboard, Upload, Verify, Logs)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
    <h1 className="text-xl font-bold mb-6">RansomBlock</h1>
    <Link to="/" className="mb-2">Dashboard</Link>
    <Link to="/upload" className="mb-2">Upload File</Link>
    <Link to="/verify" className="mb-2">Verify File</Link>
    <Link to="/logs" className="mb-2">Logs</Link>
  </div>
);

const Dashboard = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to RansomBlock. Start by uploading a file or verifying a hash.</p>
    </CardContent>
  </Card>
);

const Upload = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      <input type="file" className="mb-4" />
      <Button>Submit Hash</Button>
    </CardContent>
  </Card>
);

const Verify = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Verify File</h2>
      <input type="text" placeholder="File ID" className="mb-2" />
      <input type="text" placeholder="Hash Value" className="mb-2" />
      <Button>Verify</Button>
    </CardContent>
  </Card>
);

const Logs = () => (
  <Card className="p-6">
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">Logs</h2>
      <p>Activity logs will appear here.</p>
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
