//import { createSimilarOffers } from './data.js';
import { createMarks } from './map.js';
import './map.js';
import { createFetch } from './create-fetch.js';
import './validate-form.js';

const SIMILAR_OFFER_COUNT = 10;

const fetchData = createFetch(
  (data) => {
    createMarks(data.slice(0, SIMILAR_OFFER_COUNT));
  })

fetchData();









