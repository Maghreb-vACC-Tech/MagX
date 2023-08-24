import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LocationExtractor() {
  const navigate = useNavigate();
  const location = useLocation();
  const encodedData = new URLSearchParams(location.search).get('data');
  const jsonData = JSON.parse(decodeURIComponent(encodedData || ''));
  const Data = JSON.parse(jsonData).data;

  useEffect(() => {
    console.log(Data);
    navigate('/dashboard', { state: Data });
  }, []);

  return null; // or your desired JSX
}

export default LocationExtractor;