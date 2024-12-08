import React, { ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { organizations } from '../data/organizations';

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
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

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

  useEffect(() => {
    // Define the initMap function globally
    (window as any).initMap = () => setMapLoaded(true);

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap&libraries=maps,marker&v=beta`;
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 25.0343, lng: -77.3963 }, // Coordinates for Nassau, The Bahamas
        zoom: 7,
        mapId: 'DEMO_MAP_ID',
      });

      filteredOrganizations.forEach((org, index) => {
        if (org.latitude && org.longitude) {
          const marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: org.latitude, lng: org.longitude },
            map: map,
            title: org.name,
          });
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div>
                <h3 class="font-bold">${org.name}</h3>
                <p>${org.address}</p>
                <p>Contact: ${org.contact?.phone || 'N/A'}</p>
                <p>Hours: ${org.hours || 'N/A'}</p>
              </div>
            `,
          });
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        } else {
          console.warn(`Invalid location data for organization at index ${index}:`, org);
        }
      });
    }
  }, [mapLoaded, filteredOrganizations]);

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
              <div id="map" style={{ height: '500px', width: '100%' }} className="rounded-lg"></div>
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
