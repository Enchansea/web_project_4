class UserInfo {
  constructor({nameSelector, descriptionSelector}) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;

    getUserInfo() {
      return {
        userName: this._nameSelector.textContent,
        userDescription: this._descriptionSelector.textContent
      }
    }

    setUserInfo() {

    }
  }
}

export default UserInfo;
