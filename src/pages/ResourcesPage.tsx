import React, { ReactNode, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../assets/images/marker-icon.png';
import markerShadow from '../assets/images/marker-shadow.png';
import { organizations } from '../data/organizations';

// Fix for default Leaflet marker icons
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Define the types for props and state
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Error in component:', error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const ResourcesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  // Validate data structure of organizations
  if (!Array.isArray(organizations)) {
    console.error('Invalid organizations data:', organizations);
    return <p>Error: Organizations data is unavailable or invalid.</p>;
  }

  // Filter organizations based on the selected service
  const filteredOrganizations = selectedService
    ? organizations.filter((org) =>
        org.services?.some((service) =>
          service.toLowerCase().includes(selectedService.toLowerCase())
        )
      )
    : organizations;

  // Get unique services for the dropdown
  const uniqueServices = Array.from(
    new Set(organizations.flatMap((org) => org.services || []))
  );

  return (
    <ErrorBoundary>
      <div className="bg-gray-50">
        {/* Testing Sites Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testing Sites Map</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Filter by Service */}
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Filter by Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">All Services</option>
                  {uniqueServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <MapContainer
                center={[25.0343, -77.3963]} // Coordinates for Nassau, The Bahamas
                zoom={7}
                style={{ height: '500px', width: '100%' }}
                className="rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {filteredOrganizations.map((org, index) => {
                  if (!org.latitude || !org.longitude) {
                    console.warn(`Invalid location data for organization at index ${index}:`, org);
                    return null; // Skip rendering this Marker
                  }
                  return (
                    <Marker key={index} position={[org.latitude, org.longitude]}>
                      <Popup>
                        <h3 className="font-bold">{org.name}</h3>
                        <p>{org.address}</p>
                        <p>Contact: {org.contact?.phone || 'N/A'}</p>
                        <p>Hours: {org.hours || 'N/A'}</p>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Support Organizations</h2>
            <div className="grid gap-8">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-red-100">
                  <tr>
                    <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Organization</th>
                    <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Outreach Services</th>
                    <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Counseling Services</th>
                    <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Contact Information</th>
                  </tr>
                </thead>
                <tbody>
                  {organizations.map((org, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="border px-6 py-4 text-sm text-gray-700">{org.name}</td>
                      <td className="border px-6 py-4 text-sm text-gray-700">
                        {org.services?.join(', ') || 'N/A'}
                      </td>
                      <td className="border px-6 py-4 text-sm text-gray-700">{org.counseling || 'N/A'}</td>
                      <td className="border px-6 py-4 text-sm text-gray-700">
                        {org.contact?.phone || 'N/A'}<br />
                        {org.contact?.email || ''}<br />
                        {org.contact?.website ? (
                          <a
                            href={org.contact.website}
                            className="text-indigo-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {org.contact.website}
                          </a>
                        ) : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ResourcesPage;
