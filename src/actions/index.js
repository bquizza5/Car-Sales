

export const add = (payload) => {

    return { 
        type: 'add_feature',
        payload: payload
};
  };

export const remove = (payload) => {

    return { 
        type: 'remove_feature',
        payload: payload
};
  };