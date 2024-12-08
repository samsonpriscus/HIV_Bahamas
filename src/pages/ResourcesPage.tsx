import React, { ReactNode, useState, useEffect } from 'react';
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

// Singleton function to load the Google Maps script
const loadGoogleMapsScript = (() => {
  let scriptLoadingPromise: Promise<void> | null = null;

  return () => {
    if (!scriptLoadingPromise) {
      scriptLoadingPromise = new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector(
          'script[src^="https://maps.googleapis.com/maps/api/js"]'
        );

        if (existingScript) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDcpmw6Emr11s5CJMkeuu72bQYCOp4xrDQ&callback=initMap&libraries=maps,marker&v=beta`;
          script.async = true;

          script.onload = () => resolve();
          script.onerror = (err) => reject(err);

          document.head.appendChild(script);
        }
      });
    }

    return scriptLoadingPromise;
  };
})();

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
  
    loadGoogleMapsScript()
      .then(() => {
        // Ensure the callback is triggered if the script is already loaded
        if ((window as any).google) {
          (window as any).initMap();
        }
      })
      .catch((err) => console.error('Error loading Google Maps script:', err));
  }, []);
  
  useEffect(() => {
    if (mapLoaded && typeof google !== 'undefined') {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 25.0343, lng: -77.3963 },
        zoom: 7,
        mapId: 'DEMO_MAP_ID',
      });
  
      const markers: google.maps.marker.AdvancedMarkerElement[] = [];
  
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
                <p>${org.address || 'No address available'}</p>
                <p>Contact: ${org.contact?.phone || 'N/A'}</p>
                <p>Hours: ${org.hours || 'N/A'}</p>
              </div>
            `,
          });
  
          // Use 'gmp-click' for AdvancedMarkerElement
          marker.addEventListener('gmp-click', () => infoWindow.open(map, marker));
          markers.push(marker);
        } else {
          console.warn(`Invalid location data for organization at index ${index}:`, org);
        }
      });
  
      // Cleanup markers when the map is unmounted
      return () => {
        markers.forEach((marker) => {
          marker.map = null; // Properly dissociate the marker from the map
        });
      };
    }
  }, [mapLoaded, filteredOrganizations]);
  

  return (
    <ErrorBoundary>
      <div className="bg-gray-50">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testing Sites Map</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
      </div>
    </ErrorBoundary>
  );
};

export default ResourcesPage;
