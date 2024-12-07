export interface Organization {
  latitude: number; // Top-level latitude
  longitude: number; // Top-level longitude
  name: string;
  outreach: string;
  counseling: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  hours: string;
  services: string[];
}

export const organizations: Organization[] = [
  {
    latitude: 25.0343,
    longitude: -77.3963,
    name: "Bahamas National HIV/AIDS Programme",
    outreach: "Community outreach, awareness campaigns, education on HIV/AIDS prevention",
    counseling: "Confidential HIV counseling (pre-test & post-test), referrals for further support",
    contact: {
      phone: "+1 242-502-4784",
      email: "info@bahamas.gov.bs"
    },
    location: {
      latitude: 25.0343,
      longitude: -77.3963
    },
    address: "Shirley Street, Nassau, The Bahamas",
    hours: "Monday to Friday: 8:30 AM - 4:30 PM",
    services: [
      "HIV Testing",
      "Education & Awareness",
      "Counseling Services",
      "Referrals"
    ]
  },
  {
    latitude: 25.0780,
    longitude: -77.3421,
    name: "The AIDS Foundation of The Bahamas",
    outreach: "Community outreach, education, and awareness programs on HIV/AIDS",
    counseling: "HIV/AIDS counseling, emotional support, guidance for those newly diagnosed",
    contact: {
      phone: "+1 242-325-9326",
      email: "info@aidsbahamas.org",
      website: "www.aidsbahamas.org"
    },
    location: {
      latitude: 25.0780,
      longitude: -77.3421
    },
    address: "Delancy Street, Nassau, The Bahamas",
    hours: "Monday to Friday: 9:00 AM - 5:00 PM",
    services: [
      "HIV Testing",
      "Support Groups",
      "Community Outreach",
      "Education & Awareness"
    ]
  },
  {
    latitude: 25.06351,
    longitude: -77.347277,
    name: "Fleming Street Clinic",
    outreach: "Not Available",
    counseling: "Not Available",
    contact: {
      phone: "+1 242-322-6748",
      email: "Not Available"
    },
    location: {
      latitude: 25.06351,
      longitude: -77.347277
    },
    address: "Fleming Street, Nassau",
    hours: "Monday to Friday: 8:00 AM - 9:00 PM",
    services: [
      "HIV Testing",
      "Health Counseling"
    ]
  },
  {
    latitude: 25.009904,
    longitude: -77.351377,
    name: "South Beach Health Centre",
    outreach: "Not Available",
    counseling: "Not Available",
    contact: {
      phone: "+1 242-392-2123",
      email: "Not Available"
    },
    location: {
      latitude: 25.009904,
      longitude: -77.351377
    },
    address: "South Beach Road, Nassau",
    hours: "Monday to Friday: 8:00 AM - 9:00 PM",
    services: [
      "HIV Testing",
      "Sexual Health Counseling"
    ]
  },
  {
    latitude: 24.998645,
    longitude: -77.365657,
    name: "Flamingo Gardens Clinic",
    outreach: "Not Available",
    counseling: "Not Available",
    contact: {
      phone: "+1 242-361-6430",
      email: "Not Available"
    },
    location: {
      latitude: 24.998645,
      longitude: -77.365657
    },
    address: "Flamingo Gardens, Nassau",
    hours: "Monday to Friday: 9:00 AM - 5:00 PM",
    services: [
      "HIV Testing",
      "Education Services"
    ]
  },
  {
    latitude: 25.063547,
    longitude: -77.334772,
    name: "Eight Mile Rock Clinic",
    outreach: "Not Available",
    counseling: "Not Available",
    contact: {
      phone: "+1 242-348-2227",
      email: "Not Available"
    },
    location: {
      latitude: 25.063547,
      longitude: -77.334772
    },
    address: "Eight Mile Rock, Grand Bahama",
    hours: "Monday to Friday: 9:00 AM - 5:00 PM",
    services: [
      "HIV Testing",
      "Basic Health Services"
    ]
  },
  {
    latitude: 25.0743159,
    longitude: -77.3333253,
    name: "Doctors Hospital",
    outreach: "Not Available",
    counseling: "Not Available",
    contact: {
      phone: "+1 242-302-4600",
      email: "info@doctorshosp.com",
      website: "www.doctorshosp.com"
    },
    location: {
      latitude: 25.0743159,
      longitude: -77.3333253
    },
    address: "Collins Avenue, Nassau",
    hours: "Monday to Friday: 24hrs",
    services: [
      "HIV Testing",
      "Health Care"
    ]
  }
];
