import UserTable from 'components/Dashboard/AllUser/userTable/UserTable';
import CardDataStats from 'components/Dashboard/CardDataStats';
import DefaultLayout from 'components/Dashboard/layout/DefaultLayout';
import React from 'react';

const AllUser = () => {
    return (
        <DefaultLayout>
 <UserTable/>
      </DefaultLayout>
    );
};

export default AllUser;