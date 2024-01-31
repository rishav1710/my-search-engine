'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('');
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return (
    <div>
      {!country ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="spinner.svg" alt="loading..." className="h-6 text-center" />
      ) : (
        country
      )}
    </div>
  );
}
