


// simulate api call
export const signUp = (payload: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(({ status: "success" })), Math.random() * 1000);
  })
};



