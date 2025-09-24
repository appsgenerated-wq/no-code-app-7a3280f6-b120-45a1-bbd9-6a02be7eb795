import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/apiService';
import Card from '../components/Card';
import Button from '../components/Button';
import { PlusIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const DashboardScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiService.get('/entities/Project');
        setProjects(data.items || []);
      } catch (err) {
        setError('Failed to fetch projects.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div>
            <span className='mr-4'>Welcome, {user?.name} ({user?.role})</span>
            <Button onClick={logout} variant="secondary">Logout</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Projects</h2>
              {user?.role === 'Manager' && (
                <Button>
                  <PlusIcon className="h-5 w-5 mr-2" />
                  New Project
                </Button>
              )}
            </div>
            {loading ? (
              <p>Loading projects...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <BuildingOfficeIcon className="h-6 w-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Location: {project.location}</p>
                    <p className="text-sm text-gray-500 mb-4">Status: 
                      <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                        {project.status}
                      </span>
                    </p>
                    <div className="mt-auto">
                       {/* Link to a future Project Detail Screen */}
                       <Link to={`/projects/${project.id}`} className="font-medium text-blue-600 hover:text-blue-800">
                        View Details &rarr;
                       </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 border-2 border-dashed border-gray-300 rounded-lg'>
                <BuildingOfficeIcon className='mx-auto h-12 w-12 text-gray-400' />
                <h3 className='mt-2 text-sm font-medium text-gray-900'>No projects yet</h3>
                <p className='mt-1 text-sm text-gray-500'>Get started by creating a new project.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardScreen;
