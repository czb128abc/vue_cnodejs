import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = 'https://cnodejs.org/api/v1';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;