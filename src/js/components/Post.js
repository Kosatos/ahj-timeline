export default class Post {
  constructor(text, coords) {
    this.postText = text;
    this.coords = coords;
    this.date = new Date();
  }

  render() {
    this.postEl = document.createElement('li');
    this.postEl.className = 'feed__post post-feed';
    this.postDateEl = document.createElement('span');
    this.postDateEl.className = 'post-feed__date';
    this.postDateEl.textContent = `${this.formatDate()}`;
    this.postTextEl = document.createElement('span');
    this.postTextEl.className = 'post-feed__text';
    this.postTextEl.textContent = this.postText;
    this.postCoordsEl = document.createElement('span');
    this.postCoordsEl.className = 'post-feed__coords';
    this.postCoordsEl.textContent = this.coords;

    this.postEl.appendChild(this.postDateEl);
    this.postEl.appendChild(this.postTextEl);
    this.postEl.appendChild(this.postCoordsEl);

    return this.postEl;
  }

  formatDate() {
    const day =
      this.date.getDate() < 10
        ? `0${this.date.getDate()}`
        : this.date.getDate();
    const month =
      this.date.getMonth() < 10
        ? `0${this.date.getMonth()}`
        : this.date.getMonth();
    const year = String(this.date.getFullYear()).slice(-2);
    const hour =
      this.date.getHours() < 10
        ? `0${this.date.getHours()}`
        : this.date.getHours();
    const minute =
      this.date.getMinutes() < 10
        ? `0${this.date.getMinutes()}`
        : this.date.getMinutes();
    const formattedDate = `${day}.${month}.${year} ${hour}:${minute}`;

    return formattedDate;
  }
}
