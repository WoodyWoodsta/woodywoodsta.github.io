export class ContentProvider {
  constructor(name) {
    this.name = name;
  }

  get(contentType) {
    if (!this.cachedPromise) {
      this.cachedPromise = this.fetchContent(contentType)
        .then(res => this.parseContent(contentType, res));
    }

    return this.cachedPromise;
  }

  invalidateCache() {
    this.cachedPromise = undefined;
  }

  fetchContent(contentType) {
    console.warn(`Content Provider instance '${this.name}' should
      define the 'fetchContent' method for content type: '${contentType}'`);
    return Promise.resolve();
  }

  parseContent(contentType, content) {
    console.warn(`Content Provider instance '${this.name}' should define the 'parseContent' method`);
    return Promise.resolve(content);
  }
}
