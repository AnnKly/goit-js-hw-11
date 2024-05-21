export const createMarkup = images => {
  return images.reduce(
    (
      html,
      { tags, webformatURL, largeImageURL, likes, views, comments, downloads }
    ) => {
      return (
        html +
        `<li class="photo-container">
    <a href=${largeImageURL} class="card-link js-card-link">
        <img class="photo" src="${webformatURL}" alt="${tags}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="text">${likes}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="text">${views}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="text">${comments}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="text">${downloads}</span>
        </div>
    </div>
</li>
    `
      );
    },
    ''
  );
};