const ACCOUNT_API = 'http://localhost:8080/accounts/search/findByName'

export const getAccountsByName = (query, pageNum, pageSize, callback) => {

  const url = `${ACCOUNT_API}?name=${query}&page=${pageNum}&size=${pageSize}`;

  fetch(url)
    .then(response => {
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(callback)
}