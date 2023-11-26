import { useEffect } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../Component/LoadingSpinner';


function StaffDeleteTrainee() {
  const navigate = useNavigate();
  const cid = new URL(window.location).searchParams.get("cid");
  const url = "http://127.0.0.1:1000/DeleteTrainee/" + cid
  
  useEffect(()=>{
    fetch(url, {
      method: 'DELETE'
    })
    .then(navigate('/StaffTraining'))
  
  },[])

  return (
    <>
      <LoadingSpinner />
    </>
  )
}

export default StaffDeleteTrainee;