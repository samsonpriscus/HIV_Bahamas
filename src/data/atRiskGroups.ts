// data/atRiskGroups.ts

export interface AtRiskGroup {
    group: string;
    description: string;
    tips: string[];
  }
  
  export const atRiskGroups: AtRiskGroup[] = [
    {
      group: "Youth (13-24)",
      description: "Youth aged 13-24 are at higher risk of HIV infection due to a combination of factors including lack of comprehensive sex education, peer pressure, and risky sexual behaviors. It's crucial to promote awareness and encourage regular testing among this age group.",
      tips: [
        "Attend workshops and seminars on safe sex practices and HIV awareness.",
        "Get tested regularly and know your HIV status."
      ]
    },
    {
      group: "Adults (25-40)",
      description: "Adults aged 25-40 are at risk due to increased sexual activity and potential substance use that may lead to risky behaviors. Prevention efforts should focus on safe sex practices, routine testing, and harm reduction strategies.",
      tips: [
        "Use protection such as condoms during sexual activities.",
        "Avoid sharing needles or any equipment that can transmit HIV."
      ]
    },
    {
      group: "Older Adults (41+)",
      description: "Older adults may believe they are not at risk for HIV, leading to less frequent testing and potential late diagnosis. Health education should address the misconceptions about aging and HIV risk, emphasizing the importance of testing and safe practices.",
      tips: [
        "Engage in conversations about sexual health with healthcare providers.",
        "Schedule regular HIV tests as part of routine health check-ups."
      ]
    },
    {
      group: "LGBTQ+ Community",
      description: "The LGBTQ+ community, particularly men who have sex with men (MSM), are disproportionately affected by HIV due to higher rates of unprotected sex and limited access to culturally competent healthcare. Targeted prevention and support services are essential.",
      tips: [
        "Seek out LGBTQ+ friendly healthcare providers for regular HIV testing and sexual health advice.",
        "Join support groups and community programs to stay informed about HIV prevention."
      ]
    }
  ];
  