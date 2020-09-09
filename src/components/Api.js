class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    //GET https://around.nomoreparties.co/v1/group-4/cards
    getCardList() {
      return fetch(this._baseUrl + '/cards', {
           headers:  this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch(err => console.log(err))
    }

    //GET https://around.nomoreparties.co/v1/group-4/users/me
    getUserInfo() {
      return fetch(this._baseUrl + '/users/me', {
        headers:  this._headers
     })
     .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
     .catch(err => console.log(err))
    }

    getAppInfo() {
      return Promise.all([this.getUserInfo(), this.getCardList()])
    }

    //POST https://around.nomoreparties.co/v1/group-4/cards
    addCard({ name, link}) {
      return fetch(this._baseUrl + '/cards', {
        headers:  this._headers,
        method: "POST",
        body: JSON.stringify({
          name,
          link
        })
     })
     .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
     //.then(res => console.log("post", res))
     .catch(err => console.log(err))
    }

    //DELETE https://around.nomoreparties.co/v1/group-4/cards/cardId
    removeCard(cardId) {
      console.log(cardId);
      return fetch(this._baseUrl + '/cards' + cardId, {
        headers:  this._headers,
        method: "DELETE"
     })
     .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
     //.then(res => console.log("delete", res))
     .catch(err => console.log(err))
    }

    //PUT https://around.nomoreparties.co/v1/group-4/cards/likes/cardId
    //DELETE https://around.nomoreparties.co/v1/group-4/cards/likes/cardId
    changeLikeCardStatus(cardId, like) { }

    //PATCH https://around.nomoreparties.co/v1/group-4/users/me
    setUserInfo({name, about}) {
      return fetch(this._baseUrl + '/cards', {
        headers:  this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name,
          about
        })
     })
     .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
     //.then(res => console.log("post", res))
     .catch(err => console.log(err))
    }

    //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
    setUserAvatar({ avatar }) { }


}

export default Api;

//   const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/group-4",
//     headers: {
//       authorization: "82ebb591-5edb-4637-a2e8-efb178ef4c56",
//       "Content-Type": "application/json"
//     }
//   });
