// Add this component to your homepage
// src/components/schema/HomePageSchema.tsx
export default function HomePageSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wing Logistics",
      "url": "https://winggroup.org",
      "logo": "https://winggroup.org/images/logo.png",
      "description": "Trusted logistics company providing roadways, airways, and railways transportation services across India.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ED-9 New Ashok Nagar Street No-21",
        "addressLocality": "New Delhi",
        "postalCode": "110096",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9971981827",
        "contactType": "customer service",
        "email": "logistics@winggroup.org"
      },
      "sameAs": [
        "https://www.instagram.com/wing_logistics"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Logistics Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Road Transportation",
              "description": "Reliable roadways transportation across India."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Air Freight",
              "description": "Fast airways freight services for time-sensitive cargo."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rail Logistics",
              "description": "Cost-effective railways transportation for large shipments."
            }
          }
        ]
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }