import AllAdsTable from 'components/Dashboard/AllAds.jsx';
import CardDataStats from 'components/Dashboard/CardDataStats';
import DefaultLayout from 'components/Dashboard/layout/DefaultLayout';
import React from 'react';

const AllAds = () => {
    return (
        <DefaultLayout>
     <AllAdsTable/>
    </DefaultLayout>
    );
};

export default AllAds;