class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  /**
   * 첫 화면에 가장인기있는 영상 25개 보여주는 메서드
   * @returns 가장인기있는 영상 25개 data를 담은 object
   */
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '25',
      },
    });

    return response.data.items;
  }

  /**
   * 검색 메서드
   * @param {*} value 검색어
   * @returns 검색어에 해당하는 영상 25개 data를 담은 object
   */
  async search(value) {
    const reponse = await this.youtube
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: '25',
          type: 'video',
          q: value,
        },
      })
      .then((results) =>
        results.data.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        })),
      );

    return reponse;
  }
}

export default Youtube;
