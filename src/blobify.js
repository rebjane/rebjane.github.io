export default new (class Blob {
  constructor(url) {
    return url;
  }
  blobify(url) {
    return new Promise((res) => {
      fetch(url).then((e) =>
        e.blob().then((blob) => {
          url = `${URL.createObjectURL(blob).toString()}`;
          res(url);
          return url;
        })
      );
    });
  }
})();
