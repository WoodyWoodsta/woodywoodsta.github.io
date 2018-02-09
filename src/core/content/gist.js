import axios from 'axios';
import clone from 'clone';

import { ContentProvider } from './provider';
import config from '../../../config/site';
import * as consts from '../../constants/content';

class GistProvider extends ContentProvider {
  constructor(name) {
    super(name);

    this.cachedFiles = {};
  }

  fetchContent(contentType) {
    let fetchUrl;

    switch (contentType) {
      case consts.GIST_CONTENT_TYPES.PAGES:
        fetchUrl = `${config.content.gist.apiRoot}/${config.content.gist.id}`;
        break;

      default:
        break;
    }

    if (fetchUrl) {
      return axios.get(fetchUrl)
        .then((res) => {
          if (res && res.status === 200) {
            switch (contentType) {
              case consts.GIST_CONTENT_TYPES.PAGES:
                if (res.data && res.data.files && 'pages.json' in res.data.files) {
                  return res.data.files['pages.json'];
                }

                break;

              default:
                return res.data;
            }
          }
        });
    }
  }

  parseContent(contentType, raw) {
    if (raw) {
      switch (contentType) {
        case consts.GIST_CONTENT_TYPES.PAGES: {
          let fileRequest = Promise.resolve(raw);

          if (!raw.truncated && raw.raw_url) {
            fileRequest = this.getCachedGistFile(raw);
          }

          return fileRequest.then((_file) => {
            if (_file.content) {
              return typeof _file.content === 'string' ? JSON.parse(_file.content) : _file.content;
            }
          });
        }

        default:
          return raw;
      }
    }
  }

  getCachedGistFile(file) {
    // Return cached
    if (file && file.filename && file.filename in this.cachedFiles) {
      return Promise.resolve(this.cachedFiles[file.filename]);
    }

    // Return newly fetched
    const _file = clone(file);
    return axios.get(file.raw_url)
      .then((res) => {
        _file.content = (res && res.data) || _file.content;
        this.cachedFiles[_file.filename] = _file;

        return _file;
      });
  }
}

export const provider = new GistProvider();
