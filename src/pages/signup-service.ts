


// simulate api call
export const signUp = (payload: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(({ status: "success" })), 5000);
  })
};



