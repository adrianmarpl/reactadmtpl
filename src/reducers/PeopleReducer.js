const peopleReducer = (currentPeoples, action) => {
    switch (action.type) {
      case 'SET':
        return action.peoples;
      case 'ADD':
        return [...currentPeoples, action.ingredient];
      default:
        throw new Error('Should not get there!');
    }
  };

  export default peopleReducer;