import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/youtube/v3/';
class Youtube {
  constructor(key) {
    this.key = key;
  }

  /**
   * 첫 화면에 가장인기있는 영상 25개 보여주는 메서드
   * @returns 가장인기있는 영상 25개 data를 담은 object
   */
  mostPopular() {
    return axios.get(
      `${baseUrl}videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    );
  }

  /**
   * 검색 메서드
   * @param {*} value 검색어
   * @returns 검색어에 해당하는 영상 25개 data를 담은 object
   */
  search(value) {
    return axios
      .get(
        `${baseUrl}search?part=snippet&maxResults=25&key=${this.key}&q=${value}&type=video`,
      )
      .then((results) =>
        results.data.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        })),
      );
  }
}

export default Youtube;
