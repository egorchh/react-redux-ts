import React, {useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import type {} from 'redux-thunk/extend-redux';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  const {fetchUsers} = useActions();
  
  
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h3>Идет загрузка...</h3>
  }

  if(error) {
    return <h3>{error}</h3>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;
