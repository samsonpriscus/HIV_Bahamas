import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { organizations } from '../data/organizations';

// Fix for default Leaflet marker icons (optional but recommended)
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ResourcesPage = () => {
  const [selectedService, setSelectedService] = useState('');

  // Filter organizations based on the selected service
  const filteredOrganizations = selectedService
    ? organizations.filter((org) =>
        org.services.some((service) =>
          service.toLowerCase().includes(selectedService.toLowerCase())
        )
      )
    : organizations;

  // Get unique services for the dropdown
  const uniqueServices = Array.from(
    new Set(organizations.flatMap((org) => org.services))
  );

  return (
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
              {filteredOrganizations.map((org, index) => (
                <Marker key={index} position={[org.latitude, org.longitude]}>
                  <Popup>
                    <h3 className="font-bold">{org.name}</h3>
                    <p>{org.address}</p>
                    <p>Contact: {org.contact.phone}</p>
                    <p>Hours: {org.hours}</p>
                  </Popup>
                </Marker>
              ))}
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
          <tr className="bg-gray-50">
            <td className="border px-6 py-4 text-sm text-gray-700">Bahamas National HIV/AIDS Programme</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Community outreach, awareness campaigns, education on HIV/AIDS prevention</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Confidential HIV counseling (pre-test & post-test), referrals for further support</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-502-4784 / +1 242-502-4785<br />
              Email: info@bahamas.gov.bs
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4 text-sm text-gray-700">The AIDS Foundation of The Bahamas</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Community outreach, education, and awareness programs on HIV/AIDS</td>
            <td className="border px-6 py-4 text-sm text-gray-700">HIV/AIDS counseling, emotional support, guidance for those newly diagnosed or facing stigma</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-328-0983<br />
              Email: info@aidsbahamas.org<br />
              Website: <a href="http://www.aidsbahamas.org" className="text-indigo-500 hover:underline">www.aidsbahamas.org</a>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-6 py-4 text-sm text-gray-700">The Bahamas Red Cross</td>
            <td className="border px-6 py-4 text-sm text-gray-700">HIV/AIDS awareness programs, education in schools and communities</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Confidential HIV counseling, psychological support for those affected by HIV</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-322-9303<br />
              Website: <a href="http://www.bahamasredcross.org" className="text-indigo-500 hover:underline">www.bahamasredcross.org</a>
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4 text-sm text-gray-700">Ministry of Health and Wellness</td>
            <td className="border px-6 py-4 text-sm text-gray-700">National outreach campaigns, educational material distribution</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Pre-test & post-test counseling, psychosocial support for HIV-positive individuals</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-502-4770<br />
              Email: bahamashealth.gov.bs
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-6 py-4 text-sm text-gray-700">Care Bahamas</td>
            <td className="border px-6 py-4 text-sm text-gray-700">HIV/AIDS awareness in local communities and schools, workshops</td>
            <td className="border px-6 py-4 text-sm text-gray-700">HIV counseling, HIV testing, referrals, emotional and psychosocial support</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-323-6614
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4 text-sm text-gray-700">The Bahamas HIV/AIDS Foundation (BHF)</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Community outreach, education on HIV prevention, targeting high-risk groups</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Individual & group counseling, support for families of those living with HIV</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-323-8800 / +1 242-323-9134<br />
              Email: info@bahamashivfoundation.org<br />
              Website: <a href="http://www.bahamashivfoundation.org" className="text-indigo-500 hover:underline">www.bahamashivfoundation.org</a>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-6 py-4 text-sm text-gray-700">Social Services and Urban Development</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Outreach programs to support people with HIV/AIDS, social assistance</td>
            <td className="border px-6 py-4 text-sm text-gray-700">Psychosocial counseling, support for reintegration and emotional needs</td>
            <td className="border px-6 py-4 text-sm text-gray-700">
              Phone: +1 242-502-2422<br />
              Email: info@bahamas.gov.bs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
    </div>
  );
};

export default ResourcesPage;
