import { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';

const Lead = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [leadInfo, setLeadInfo] = useState(null);

  console.log('REACT_APP_GET_LEAD_URL', process.env.REACT_APP_GET_LEAD_URL);

  useEffect(() => {
    getLead();
  }, []);

  const getLead = () => {
    setIsLoading(true);

    fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GET_LEAD_URL + params.identificationNumber, {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then(data => {
      setLeadInfo(data[data.mostRecentTimestamp]);
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.log(`There is no user with an identification number ${params.identificationNumber} - Erro: ${err}`)
    });
  };

  return (
    <div>
      { JSON.stringify(leadInfo) }
      {/* <Link
        to={`/management/leads/:/edit`}
      >
        Edit
      </Link> */}
    </div>
  )
};

export default Lead;